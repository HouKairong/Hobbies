import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./Plan.css";
import gamesData from "../data/gamesData";
import seriesData from "../data/seriesData";
import moviesData from "../data/movies";
import booksData from "../data/books";
import { readGameStatuses, updateGameStatus } from "../data/gameStatuses";
import { readSeriesStatuses, updateSeriesStatus } from "../data/seriesStatuses";
import {
  buildBookStatusKey,
  readBookStatuses,
  updateBookStatus,
} from "../data/bookStatuses";
import { readMovieStatuses, updateMovieStatus } from "../data/movieStatuses";
import {
  readPlanEntries,
  subscribeToPlanEntries,
  writePlanEntries,
} from "../data/planEntriesStore";
import { subscribeToAccountState } from "../data/accountStore";

const planCategories = ["Gry", "Seriale", "Książki", "Filmy"];
const planStatuses = ["Nie znam", "W trakcie", "Zakończone"];
const planStatusFilters = [...planStatuses, "Wszystkie"];
const formStatusOptions = [...planStatuses, "Wszystkie"];
const planDayTypes = [
  "1 dzień",
  "Wiele dni",
  "Przedział czasowy",
  "Regularnie",
  "Regularnie ale od konkretnego terminu",
];
const weekDays = [
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
  "Niedziela",
];

const normalizeStatusLabel = (status) => {
  const currentStatus = String(status || "")
    .trim()
    .toLowerCase();

  if (
    ["nie znam", "nie rozpoczęte", "not-started", "seen"].includes(
      currentStatus,
    )
  ) {
    return "Nie znam";
  }

  if (["w trakcie", "in-progress", "progress"].includes(currentStatus)) {
    return "W trakcie";
  }

  if (["zakończone", "done", "finished", "completed"].includes(currentStatus)) {
    return "Zakończone";
  }

  return "Nie znam";
};

const mapPlanStatusToSharedStatus = (status) => {
  const normalized = normalizeStatusLabel(status);

  if (normalized === "W trakcie") {
    return "progress";
  }

  if (normalized === "Zakończone") {
    return "done";
  }

  return "seen";
};

const getQuantityOptions = (category) => {
  if (category === "Gry") {
    return Array.from({ length: 48 }, (_, index) => {
      const value = (index + 1) / 2;
      return Number.isInteger(value)
        ? String(value)
        : value.toFixed(1).replace(".0", "").replace(".5", ",5");
    });
  }

  if (category === "Seriale") {
    return Array.from({ length: 30 }, (_, index) => String(index + 1));
  }

  if (category === "Filmy") {
    return ["Cały", "Połowa"];
  }

  if (category === "Książki") {
    return Array.from({ length: 60 }, (_, index) => String(index + 1));
  }

  return ["1"];
};

const getDefaultQuantityValue = (category) => {
  if (category === "Filmy") {
    return "1";
  }

  return "1";
};

const getEstimatedCompletionDate = (selectedDays, weeksNeeded, startDate) => {
  const normalizedDays = selectedDays
    .map((day) => weekDays.indexOf(day))
    .filter((index) => index >= 0);

  if (!normalizedDays.length) {
    return "Brak terminu";
  }

  const baseDate = parseDateValue(startDate) || new Date();
  baseDate.setHours(0, 0, 0, 0);

  const targetDate = new Date(baseDate);
  const totalDays = Math.max(weeksNeeded, 0) * 7;
  targetDate.setDate(targetDate.getDate() + totalDays);

  let result = new Date(targetDate);
  while (!normalizedDays.includes((result.getDay() + 6) % 7)) {
    result.setDate(result.getDate() + 1);
  }

  return result.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const getRegularityEstimateDetails = ({
  category,
  dayType,
  timeValue,
  quantity,
  totalItems,
  startFrom,
  startDate,
}) => {
  if (
    dayType !== "Regularnie" &&
    dayType !== "Regularnie ale od konkretnego terminu"
  ) {
    return null;
  }

  if (!category || !["Seriale", "Książki"].includes(category)) {
    return null;
  }

  const total = Math.max(1, Number(totalItems) || 1);
  const start = Math.min(Math.max(1, Number(startFrom) || 1), total);
  const sessionSize = Math.max(parseNumericValue(quantity), 1);
  const selectedDays = parseTimeValues(timeValue);
  const sessionsPerWeek = Math.max(selectedDays.length, 1);
  const remaining = Math.max(total - start + 1, 0);
  const sessionsNeeded =
    remaining === 0 ? 0 : Math.ceil(remaining / sessionSize);
  const weeksNeeded =
    sessionsNeeded === 0 ? 0 : Math.ceil(sessionsNeeded / sessionsPerWeek);
  const completionDate = getEstimatedCompletionDate(
    selectedDays,
    weeksNeeded,
    dayType === "Regularnie ale od konkretnego terminu" ? startDate : undefined,
  );

  return {
    total,
    start,
    remaining,
    sessionsNeeded,
    weeksNeeded,
    completionDate,
    unitLabel: category === "Seriale" ? "odc." : "rozdz.",
  };
};

const getRegularityEstimate = (data) => {
  const details = getRegularityEstimateDetails(data);

  if (!details) {
    return "";
  }

  if (details.weeksNeeded <= 0) {
    return "Skończysz dziś";
  }

  return `Skończysz za ok. ${details.weeksNeeded} ${details.weeksNeeded === 1 ? "tydzień" : "tygodni"}`;
};

const parseTimeValues = (value) => {
  if (Array.isArray(value)) {
    return value.map((entry) => String(entry).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  return [];
};

const formatTimeValue = (value, dayType) => {
  const entries = parseTimeValues(value);

  if (!entries.length) {
    return dayType === "Regularnie" ||
      dayType === "Regularnie ale od konkretnego terminu"
      ? "Brak dni"
      : "Brak terminu";
  }

  return entries.join(", ");
};

const toLocalDateString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const parseDateValue = (value) => {
  if (!value) {
    return undefined;
  }

  if (value instanceof Date) {
    return value;
  }

  const [year, month, day] = String(value)
    .split("-")
    .map((part) => Number(part));

  if (!year || !month || !day) {
    return undefined;
  }

  return new Date(year, month - 1, day);
};

const parseRangeValue = (value) => {
  if (!value) {
    return { from: undefined, to: undefined };
  }

  const entries = parseTimeValues(value);
  if (!entries.length) {
    return { from: undefined, to: undefined };
  }

  const [fromValue, toValue] = entries;
  return {
    from: parseDateValue(fromValue),
    to: parseDateValue(toValue) || parseDateValue(fromValue),
  };
};

const parseMultipleDatesValue = (value) => {
  if (!value) {
    return [];
  }

  return parseTimeValues(value).map(parseDateValue).filter(Boolean);
};

const parseNumericValue = (value) => {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  const normalized = String(value).replace(",", ".").trim();
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
};

const formatHoursValue = (value) => {
  const hours = parseNumericValue(value);

  if (!Number.isFinite(hours) || hours === 0) {
    return "0h";
  }

  const formatted = Number(hours.toFixed(1)).toString().replace(".", ",");
  return `${formatted}h`;
};

const formatQuantityValue = (category, value) => {
  if (category === "Gry") {
    return formatHoursValue(value);
  }

  if (category === "Seriale") {
    return `${value} odc.`;
  }

  if (category === "Filmy") {
    return value === "Połowa" ? "Połowa" : "Cały";
  }

  if (category === "Książki") {
    return `${value} rozdz.`;
  }

  return value;
};

const formatScheduledTotal = (category, value) => {
  if (category === "Gry") {
    return formatHoursValue(value);
  }

  if (category === "Seriale") {
    return `${Math.max(0, Number(value) || 0)} odc.`;
  }

  if (category === "Książki") {
    return `${Math.max(0, Number(value) || 0)} rozdz.`;
  }

  return "";
};

const formatDisplayDate = (value) => {
  const date = parseDateValue(value);

  if (!date) {
    return value || "Brak terminu";
  }

  return date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
  });
};

const getWeekdayNameFromDate = (date) => {
  if (!date) {
    return "";
  }

  const dayIndex = (date.getDay() + 6) % 7;
  return weekDays[dayIndex] || "";
};

const buildGroupedTimeLines = (entries) => {
  const dateTotals = new Map();
  const weekdayTotals = new Map();
  const category = entries[0]?.category || "Gry";

  entries.forEach((entry) => {
    const numericQuantity = parseNumericValue(entry.quantity);
    const countQuantity =
      category === "Gry" ? numericQuantity : Number(entry.quantity) || 0;

    if (!countQuantity && category !== "Gry") {
      return;
    }

    if (category === "Filmy") {
      return;
    }

    if (
      entry.dayType === "Regularnie" ||
      entry.dayType === "Regularnie ale od konkretnego terminu"
    ) {
      const startDate = parseDateValue(entry.startDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (startDate && startDate > today) {
        return;
      }

      const selectedDays = parseTimeValues(entry.timeValue);
      selectedDays.forEach((day) => {
        const nextTotal = (weekdayTotals.get(day) || 0) + countQuantity;
        weekdayTotals.set(day, nextTotal);
      });
      return;
    }

    if (entry.dayType === "1 dzień") {
      const date = parseDateValue(entry.timeValue);
      if (!date) {
        return;
      }

      const key = toLocalDateString(date);
      dateTotals.set(key, (dateTotals.get(key) || 0) + countQuantity);
      return;
    }

    if (entry.dayType === "Wiele dni") {
      parseMultipleDatesValue(entry.timeValue).forEach((date) => {
        const key = toLocalDateString(date);
        dateTotals.set(key, (dateTotals.get(key) || 0) + countQuantity);
      });
      return;
    }

    if (entry.dayType === "Przedział czasowy") {
      const range = parseRangeValue(entry.timeValue);

      if (!range.from) {
        return;
      }

      const start = new Date(range.from);
      const end = range.to ? new Date(range.to) : start;
      const current = new Date(start);

      while (current <= end) {
        const key = toLocalDateString(current);
        dateTotals.set(key, (dateTotals.get(key) || 0) + countQuantity);
        current.setDate(current.getDate() + 1);
      }
    }
  });

  const lines = [];

  Array.from(dateTotals.entries())
    .sort(([left], [right]) => new Date(left) - new Date(right))
    .forEach(([dateKey, total]) => {
      const date = parseDateValue(dateKey);
      const weekday = getWeekdayNameFromDate(date);
      const recurringTotal = weekdayTotals.get(weekday) || 0;
      const combinedTotal = total + recurringTotal;

      lines.push(
        `${formatDisplayDate(dateKey)} - ${formatScheduledTotal(category, combinedTotal)}`,
      );
    });

  Array.from(weekdayTotals.entries())
    .sort(
      (left, right) => weekDays.indexOf(left[0]) - weekDays.indexOf(right[0]),
    )
    .forEach(([day, total]) => {
      lines.push(`${day} - ${formatScheduledTotal(category, total)}`);
    });

  return lines.filter((line) => !line.endsWith(" - "));
};

const normalizePlanTimeValue = (dayType, value) => {
  if (!value) {
    return dayType === "Regularnie" ||
      dayType === "Regularnie ale od konkretnego terminu"
      ? weekDays[0]
      : "";
  }

  return value;
};

const getTodayStart = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
};

const getTodayEnd = () => {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  return date;
};

const isEntryInPast = (entry) => {
  if (
    !entry ||
    entry.dayType === "Regularnie" ||
    entry.dayType === "Regularnie ale od konkretnego terminu"
  ) {
    return false;
  }

  if (entry.dayType === "1 dzień") {
    const date = parseDateValue(entry.timeValue);
    return Boolean(date && date < getTodayStart());
  }

  if (entry.dayType === "Wiele dni") {
    const dates = parseMultipleDatesValue(entry.timeValue);
    return dates.length > 0 && dates.every((date) => date < getTodayStart());
  }

  if (entry.dayType === "Przedział czasowy") {
    const range = parseRangeValue(entry.timeValue);
    if (!range.from) {
      return false;
    }

    const endDate = range.to || range.from;
    return Boolean(endDate && endDate < getTodayStart());
  }

  return false;
};

const isEntryLockedByPastDate = (item) => {
  return Boolean(item && isEntryInPast(item));
};

const isEntryScheduledForToday = (item) => {
  if (
    !item ||
    item.dayType === "Regularnie" ||
    item.dayType === "Regularnie ale od konkretnego terminu"
  ) {
    return false;
  }

  const todayStart = getTodayStart();
  const todayEnd = getTodayEnd();

  if (item.dayType === "1 dzień") {
    const date = parseDateValue(item.timeValue);
    return Boolean(date && date >= todayStart && date <= todayEnd);
  }

  if (item.dayType === "Wiele dni") {
    return parseMultipleDatesValue(item.timeValue).some(
      (date) => date >= todayStart && date <= todayEnd,
    );
  }

  if (item.dayType === "Przedział czasowy") {
    const range = parseRangeValue(item.timeValue);
    if (!range.from) {
      return false;
    }

    const from = range.from;
    const to = range.to || range.from;
    return Boolean(from <= todayEnd && to >= todayStart);
  }

  return false;
};

const getMillisecondsUntilNextMidnight = () => {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  return nextMidnight.getTime() - now.getTime();
};

const mapGameStatusToProgressStatus = (status) => {
  if (status === "progress") return "in-progress";
  if (status === "done") return "done";
  return "not-started";
};

const mapSeriesStatusToProgressStatus = (status) => {
  if (status === "progress") return "in-progress";
  if (status === "done") return "done";
  return "not-started";
};

const mapMovieStatusToProgressStatus = (status) => {
  if (status === "progress") return "in-progress";
  if (status === "done") return "done";
  return "not-started";
};

const getMovieItems = (movieStatuses) => {
  const items = [];
  const seen = new Set();

  const walk = (value, parentSeriesTitle = null) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach((entry) => walk(entry, parentSeriesTitle));
      return;
    }

    if (typeof value !== "object") {
      return;
    }

    if (value.title && Array.isArray(value.parts)) {
      const groupTitle = value.title;

      value.parts.forEach((part) => {
        if (!part || !part.title) return;

        const title = part.title;
        const key = `movie:${groupTitle}:${title}`;
        if (seen.has(key)) return;

        seen.add(key);
        items.push({
          title,
          section: "Filmy",
          status: mapMovieStatusToProgressStatus(
            movieStatuses[`movie-part:${groupTitle}:${title}`],
          ),
        });
      });

      return;
    }

    if (typeof value.title === "string") {
      const title = value.title;
      const key = `movie:${parentSeriesTitle ?? "standalone"}:${title}`;
      if (seen.has(key)) return;

      seen.add(key);
      items.push({
        title,
        section: "Filmy",
        status: mapMovieStatusToProgressStatus(movieStatuses[`movie:${title}`]),
      });
    }

    Object.values(value).forEach((entry) => walk(entry, parentSeriesTitle));
  };

  walk(moviesData);
  return items;
};

const getBookItems = () => {
  const items = [];
  const savedBookStatuses = readBookStatuses();

  Object.entries(booksData).forEach(([seriesName, seriesBooks]) => {
    (Array.isArray(seriesBooks) ? seriesBooks : []).forEach((book) => {
      const title = typeof book === "string" ? book : book?.title;
      if (!title) return;

      items.push({
        title,
        section: "Książki",
        status: mapSeriesStatusToProgressStatus(
          savedBookStatuses[buildBookStatusKey(title)],
        ),
        series: seriesName,
      });
    });
  });

  const crossoverTitles = [
    "Wiedźmin Ronin",
    "Sherlock Holmes and the Case of Death and Honey",
    "Sherlock Holmes and the Nine-Dragon Sigil",
  ];

  crossoverTitles.forEach((title) => {
    items.push({
      title,
      section: "Książki",
      status: mapSeriesStatusToProgressStatus(
        savedBookStatuses[buildBookStatusKey(title)],
      ),
      series: "Crossovery",
    });
  });

  return items;
};

const getInProgressItems = () => {
  const gameStatuses = readGameStatuses();
  const seriesStatuses = readSeriesStatuses();
  const movieStatuses = readMovieStatuses();

  const items = [];

  gamesData.forEach((game) => {
    const status = mapGameStatusToProgressStatus(
      gameStatuses[`game:${game.title}`],
    );
    if (status === "in-progress") {
      items.push({ title: game.title, section: "Gry", status });
    }
  });

  seriesData.forEach((series) => {
    const status = mapSeriesStatusToProgressStatus(
      seriesStatuses[`series:${series.title}`],
    );
    if (status === "in-progress") {
      items.push({ title: series.title, section: "Seriale", status });
    }
  });

  getMovieItems(movieStatuses).forEach((item) => {
    if (item.status === "in-progress") {
      items.push(item);
    }
  });

  getBookItems().forEach((item) => {
    if (item.status === "in-progress") {
      items.push(item);
    }
  });

  return items;
};

const getStoredPlanEntries = () => {
  return readPlanEntries();
};

const setStoredPlanEntries = (entries) => {
  writePlanEntries(entries);
};

const getCategoryStatusEntries = (category) => {
  const entries = new Map();

  const addEntry = (title, status) => {
    if (!title) {
      return;
    }

    entries.set(title, normalizeStatusLabel(status));
  };

  if (category === "Gry") {
    const gameStatuses = readGameStatuses();
    gamesData.forEach((game) => {
      const normalizedStatus = mapGameStatusToProgressStatus(
        gameStatuses[`game:${game.title}`],
      );
      addEntry(game.title, normalizedStatus);
    });
  }

  if (category === "Seriale") {
    const seriesStatuses = readSeriesStatuses();
    seriesData.forEach((series) => {
      const normalizedStatus = mapSeriesStatusToProgressStatus(
        seriesStatuses[`series:${series.title}`],
      );
      addEntry(series.title, normalizedStatus);
    });
  }

  if (category === "Filmy") {
    const movieStatuses = readMovieStatuses();
    Object.values(moviesData).forEach((group) => {
      if (!Array.isArray(group)) {
        return;
      }

      group.forEach((item) => {
        if (item && Array.isArray(item.parts)) {
          item.parts.forEach((part) => {
            if (!part || !part.title) {
              return;
            }

            const normalizedStatus = mapMovieStatusToProgressStatus(
              movieStatuses[`movie-part:${item.title}:${part.title}`],
            );
            addEntry(part.title, normalizedStatus);
          });
          return;
        }

        if (item && typeof item.title === "string") {
          const normalizedStatus = mapMovieStatusToProgressStatus(
            movieStatuses[`movie:${item.title}`],
          );
          addEntry(item.title, normalizedStatus);
        }
      });
    });
  }

  if (category === "Książki") {
    const savedBookStatuses = readBookStatuses();

    Object.values(booksData).forEach((list) => {
      if (!Array.isArray(list)) {
        return;
      }

      list.forEach((book) => {
        const title = typeof book === "string" ? book : book?.title;
        if (!title) {
          return;
        }

        addEntry(
          title,
          mapMovieStatusToProgressStatus(
            savedBookStatuses[buildBookStatusKey(title)],
          ),
        );
      });
    });
  }

  getStoredPlanEntries()
    .filter((item) => item.category === category)
    .forEach((item) => addEntry(item.title, item.status));

  return Array.from(entries.entries()).map(([title, status]) => ({
    title,
    status,
  }));
};

const getTitleOptionsForCategory = (category, status) => {
  const items = getCategoryStatusEntries(category);

  if (status === "Wszystkie") {
    return items.map((item) => item.title);
  }

  return items
    .filter((item) => normalizeStatusLabel(item.status) === status)
    .map((item) => item.title);
};

const getNextTitleForSelection = (category, status, previousTitle) => {
  const options = getTitleOptionsForCategory(category, status);

  if (!options.length) {
    return "";
  }

  if (previousTitle && options.includes(previousTitle)) {
    return previousTitle;
  }

  return options[0];
};

const Plan = () => {
  const [showForm, setShowForm] = useState(false);
  const [abandonPrompt, setAbandonPrompt] = useState(null);
  const [planVersion, setPlanVersion] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    category: "Gry",
    status: "Wszystkie",
    dayType: "1 dzień",
    timeValue: "",
    startDate: "",
    quantity: getDefaultQuantityValue("Gry"),
    totalItems: "1",
    startFrom: "1",
  });

  useEffect(() => {
    const unsubscribeEntries = subscribeToPlanEntries(() => {
      setPlanVersion((current) => current + 1);
    });

    const unsubscribeAccount = subscribeToAccountState(() => {
      setPlanVersion((current) => current + 1);
    });

    return () => {
      unsubscribeEntries();
      unsubscribeAccount();
    };
  }, []);

  const savedEntries = useMemo(
    () => getStoredPlanEntries().filter((entry) => !isEntryInPast(entry)),
    [showForm, planVersion],
  );

  const allScheduledItems = useMemo(() => {
    const grouped = new Map();

    savedEntries.forEach((item) => {
      const key = `${item.category}::${item.title}`;
      const existing = grouped.get(key);

      const nextItem = {
        ...item,
        status: normalizeStatusLabel(item.status),
        entryIds: existing ? [...existing.entryIds, item.id] : [item.id],
        totalHours:
          (existing ? existing.totalHours : 0) +
          (item.category === "Gry" ? parseNumericValue(item.quantity) : 0),
      };

      grouped.set(key, nextItem);
    });

    return Array.from(grouped.values()).map((item) => ({
      ...item,
      timeLines: buildGroupedTimeLines(
        savedEntries.filter(
          (entry) =>
            entry.category === item.category && entry.title === item.title,
        ),
      ),
    }));
  }, [savedEntries]);

  const visibleScheduledItems = allScheduledItems;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setPlanVersion((current) => current + 1);
    }, getMillisecondsUntilNextMidnight());

    return () => window.clearTimeout(timeoutId);
  }, [planVersion]);

  const titleOptions = useMemo(
    () => getTitleOptionsForCategory(formData.category, formData.status),
    [formData.category, formData.status],
  );
  const quantityOptions = getQuantityOptions(formData.category);
  const regularityEstimate = getRegularityEstimate(formData);
  const getItemRegularitySummary = (item) => {
    if (
      !item ||
      (item.dayType !== "Regularnie" &&
        item.dayType !== "Regularnie ale od konkretnego terminu")
    ) {
      return null;
    }

    const details = getRegularityEstimateDetails(item);
    if (!details) {
      return null;
    }

    const remainingLabel =
      details.remaining === 0
        ? "0 " + details.unitLabel
        : `${details.remaining} ${details.unitLabel}`;

    return {
      remainingLabel,
      completionDate: details.completionDate,
      weeksLabel:
        details.weeksNeeded <= 0
          ? "0 tygodni"
          : `${details.weeksNeeded} ${details.weeksNeeded === 1 ? "tydzień" : "tygodni"}`,
    };
  };

  useEffect(() => {
    if (!showForm) {
      return;
    }

    setFormData((previous) => {
      const nextTitle = getNextTitleForSelection(
        previous.category,
        previous.status,
        previous.title,
      );

      if (nextTitle === previous.title) {
        return previous;
      }

      return {
        ...previous,
        title: nextTitle,
      };
    });
  }, [showForm, formData.category, formData.status, titleOptions]);

  const renderTimeInput = () => {
    if (formData.dayType === "1 dzień") {
      return (
        <DayPicker
          mode="single"
          selected={parseDateValue(formData.timeValue)}
          disabled={{ before: new Date() }}
          onSelect={(date) =>
            handleFieldChange({
              target: {
                name: "timeValue",
                value: date ? toLocalDateString(date) : "",
              },
            })
          }
          className="planDayPicker"
        />
      );
    }

    if (formData.dayType === "Wiele dni") {
      return (
        <DayPicker
          mode="multiple"
          selected={parseMultipleDatesValue(formData.timeValue)}
          disabled={{ before: new Date() }}
          onSelect={(dates) =>
            handleFieldChange({
              target: {
                name: "timeValue",
                value: (dates || []).map(toLocalDateString).join(","),
              },
            })
          }
          className="planDayPicker"
        />
      );
    }

    if (formData.dayType === "Przedział czasowy") {
      const rangeValue = parseRangeValue(formData.timeValue);

      return (
        <DayPicker
          mode="range"
          selected={rangeValue}
          disabled={{ before: new Date() }}
          onSelect={(range) =>
            handleFieldChange({
              target: {
                name: "timeValue",
                value:
                  range && range.from && range.to
                    ? [
                        toLocalDateString(range.from),
                        toLocalDateString(range.to),
                      ].join(",")
                    : range && range.from
                      ? toLocalDateString(range.from)
                      : "",
              },
            })
          }
          className="planDayPicker"
        />
      );
    }

    const selectedWeekdays = parseTimeValues(formData.timeValue);

    return (
      <div className="planRegularityContainer">
        <div className="planWeekdayGroup">
          {weekDays.map((day) => {
            const checked = selectedWeekdays.includes(day);

            return (
              <label key={day} className="planWeekdayChip">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(event) => {
                    const nextValues = event.target.checked
                      ? [...selectedWeekdays, day]
                      : selectedWeekdays.filter((entry) => entry !== day);

                    handleFieldChange({
                      target: {
                        name: "timeValue",
                        value: nextValues.join(","),
                      },
                    });
                  }}
                />
                <span>{day}</span>
              </label>
            );
          })}
        </div>

        {formData.dayType === "Regularnie ale od konkretnego terminu" && (
          <div className="planRegularityStartDate">
            <label>
              Od kiedy
              <DayPicker
                mode="single"
                selected={parseDateValue(formData.startDate)}
                disabled={{ before: new Date() }}
                onSelect={(date) =>
                  handleFieldChange({
                    target: {
                      name: "startDate",
                      value: date ? toLocalDateString(date) : "",
                    },
                  })
                }
                className="planDayPicker"
              />
            </label>
          </div>
        )}
      </div>
    );
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => {
      if (name === "category" || name === "status") {
        const nextCategory = name === "category" ? value : previous.category;
        const nextStatus = name === "status" ? value : previous.status;
        const nextTitle = getNextTitleForSelection(
          nextCategory,
          nextStatus,
          previous.title,
        );

        return {
          ...previous,
          ...(name === "category" ? { category: value } : {}),
          ...(name === "status" ? { status: value } : {}),
          title: nextTitle,
          quantity: getDefaultQuantityValue(nextCategory),
        };
      }

      if (name === "dayType") {
        const isRegular =
          value === "Regularnie" ||
          value === "Regularnie ale od konkretnego terminu";

        return {
          ...previous,
          dayType: value,
          timeValue: isRegular
            ? previous.timeValue || weekDays[0]
            : previous.timeValue || "",
          startDate:
            value === "Regularnie ale od konkretnego terminu"
              ? previous.startDate || toLocalDateString(new Date())
              : previous.startDate || "",
        };
      }

      if (name === "totalItems") {
        const totalValue =
          value === "" ? "" : String(Math.max(1, Number(value) || 1));
        const currentStart = Number(previous.startFrom) || 1;
        const totalLimit = Number(totalValue) || 1;

        return {
          ...previous,
          totalItems: totalValue,
          startFrom:
            value === ""
              ? previous.startFrom
              : String(Math.min(currentStart, totalLimit)),
        };
      }

      if (name === "startFrom") {
        const nextValue =
          value === "" ? "" : String(Math.max(1, Number(value) || 1));

        return {
          ...previous,
          startFrom: nextValue,
        };
      }

      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const syncGlobalStatus = (category, title, nextStatus) => {
    const normalizedStatus = mapPlanStatusToSharedStatus(nextStatus);

    if (category === "Gry") {
      updateGameStatus(`game:${title}`, normalizedStatus);
      return;
    }

    if (category === "Seriale") {
      updateSeriesStatus(`series:${title}`, normalizedStatus);
      return;
    }

    if (category === "Filmy") {
      const groupMatch = Object.entries(moviesData).find(
        ([, items]) =>
          Array.isArray(items) &&
          items.some(
            (entry) =>
              entry &&
              (entry.title === title ||
                (Array.isArray(entry.parts) &&
                  entry.parts.some((part) => part?.title === title))),
          ),
      );

      if (groupMatch) {
        const [groupTitle] = groupMatch;
        const targetKey = `movie-part:${groupTitle}:${title}`;
        updateMovieStatus(targetKey, normalizedStatus);
      } else {
        updateMovieStatus(`movie:${title}`, normalizedStatus);
      }
      return;
    }

    if (category === "Książki") {
      updateBookStatus(buildBookStatusKey(title), normalizedStatus);
    }
  };

  const updatePlanEntryStatus = (entryId, nextStatus) => {
    const planEntries = getStoredPlanEntries();
    const matches = Array.isArray(entryId) ? entryId : [entryId];
    const firstMatch = planEntries.find((entry) => matches.includes(entry.id));

    if (!firstMatch) {
      return;
    }

    const nextEntries = planEntries.filter(
      (entry) => !matches.includes(entry.id),
    );

    setStoredPlanEntries(nextEntries);
    syncGlobalStatus(firstMatch.category, firstMatch.title, nextStatus);
    setPlanVersion((current) => current + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = formData.title.trim();
    if (!title || titleOptions.length === 0) {
      return;
    }

    const resolvedTimeValue = normalizePlanTimeValue(
      formData.dayType,
      formData.timeValue,
    );

    const nextEntry = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title,
      category: formData.category,
      status: "W trakcie",
      dayType: formData.dayType,
      timeValue: resolvedTimeValue,
      quantity: formData.quantity,
      totalItems:
        (formData.dayType === "Regularnie" ||
          formData.dayType === "Regularnie ale od konkretnego terminu") &&
        ["Seriale", "Książki"].includes(formData.category)
          ? formData.totalItems
          : undefined,
      startFrom:
        (formData.dayType === "Regularnie" ||
          formData.dayType === "Regularnie ale od konkretnego terminu") &&
        ["Seriale", "Książki"].includes(formData.category)
          ? formData.startFrom
          : undefined,
      startDate:
        formData.dayType === "Regularnie ale od konkretnego terminu"
          ? formData.startDate
          : undefined,
      estimatedCompletion: regularityEstimate || undefined,
    };

    const nextEntries = [...getStoredPlanEntries(), nextEntry];
    setStoredPlanEntries(nextEntries);
    syncGlobalStatus(formData.category, title, nextEntry.status);
    setPlanVersion((current) => current + 1);

    setFormData({
      title: getTitleOptionsForCategory("Gry", "Wszystkie")[0] ?? "",
      category: "Gry",
      status: "Wszystkie",
      dayType: "1 dzień",
      timeValue: "",
      startDate: "",
      quantity: getDefaultQuantityValue("Gry"),
      totalItems: "1",
      startFrom: "1",
    });
    setShowForm(false);
  };

  return (
    <div className="planPage">
      <div className="planHeader">
        <div>
          <p className="planEyebrow">Plan</p>
          <h1>Plan czasu wolnego</h1>
        </div>

        <div className="planHeaderActions">
          <button
            type="button"
            className="planAddButton"
            onClick={() => setShowForm((current) => !current)}
          >
            Dodaj
          </button>
          <Link to="/progress" className="planBackButton">
            Wróć do postępów
          </Link>
        </div>
      </div>

      {showForm && (
        <div className="planModalOverlay" onClick={() => setShowForm(false)}>
          <div
            className="planModalCard"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="planModalCloseButton"
              onClick={() => setShowForm(false)}
              aria-label="Zamknij formularz"
            >
              ×
            </button>

            <form className="planAddForm" onSubmit={handleSubmit}>
              <div className="planFormRow">
                <label>
                  Status
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleFieldChange}
                  >
                    {formStatusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Kategoria
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFieldChange}
                  >
                    {planCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="planFormRow">
                <label>
                  Tytuł
                  <select
                    name="title"
                    value={formData.title}
                    onChange={handleFieldChange}
                  >
                    {titleOptions.length === 0 ? (
                      <option value="">Brak wyników</option>
                    ) : (
                      titleOptions.map((title) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))
                    )}
                  </select>
                </label>

                <label>
                  {formData.category === "Filmy"
                    ? "Ile?"
                    : formData.category === "Gry"
                      ? "Ilość godzin"
                      : formData.category === "Seriale"
                        ? "Ilość odcinków"
                        : "Ilość rozdziałów"}
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleFieldChange}
                  >
                    {quantityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="planFormRow">
                <label>
                  Czas
                  <select
                    name="dayType"
                    value={formData.dayType}
                    onChange={handleFieldChange}
                  >
                    {planDayTypes.map((dayType) => (
                      <option key={dayType} value={dayType}>
                        {dayType}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  {formData.dayType === "1 dzień"
                    ? "Wybierz dzień"
                    : formData.dayType === "Wiele dni"
                      ? "Wybierz wiele dni"
                      : formData.dayType === "Przedział czasowy"
                        ? "Wybierz zakres"
                        : formData.dayType ===
                            "Regularnie ale od konkretnego terminu"
                          ? "Wybierz dni i datę startu"
                          : "Wybierz dni tygodnia"}
                  {renderTimeInput()}
                </label>
              </div>

              {(formData.dayType === "Regularnie" ||
                formData.dayType === "Regularnie ale od konkretnego terminu") &&
                ["Seriale", "Książki"].includes(formData.category) && (
                  <div className="planRegularityBlock">
                    <div className="planRegularityLabel">
                      Wylicz ile to zajmie
                    </div>

                    <div className="planFormRow">
                      <label>
                        {formData.category === "Seriale"
                          ? "Liczba wszystkich odcinków"
                          : "Liczba wszystkich rozdziałów"}
                        <input
                          type="number"
                          min="1"
                          step="1"
                          name="totalItems"
                          value={formData.totalItems}
                          onChange={handleFieldChange}
                          placeholder="np. 24"
                        />
                      </label>

                      <label>
                        Od którego zaczynasz
                        <input
                          type="number"
                          min="1"
                          step="1"
                          name="startFrom"
                          value={formData.startFrom}
                          onChange={handleFieldChange}
                          placeholder="np. 3"
                        />
                      </label>
                    </div>
                  </div>
                )}

              {regularityEstimate && (
                <div className="planRegularityEstimate">
                  {regularityEstimate}
                </div>
              )}

              <div className="planFormActions">
                <button type="submit" className="planSubmitButton">
                  Zapisz
                </button>
                <button
                  type="button"
                  className="planCancelButton"
                  onClick={() => setShowForm(false)}
                >
                  Anuluj
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {abandonPrompt && (
        <div
          className="planModalOverlay"
          onClick={() => setAbandonPrompt(null)}
        >
          <div
            className="planModalCard"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="planConfirmTitle">
              Czy wrócisz kiedyś do tego tytułu?
            </h2>

            <div className="planFormActions">
              <button
                type="button"
                className="planCancelButton"
                onClick={() => {
                  updatePlanEntryStatus(abandonPrompt.entryIds, "Nie znam");
                  setAbandonPrompt(null);
                }}
              >
                Nie
              </button>
              <button
                type="button"
                className="planSubmitButton"
                onClick={() => {
                  const planEntries = getStoredPlanEntries();
                  const matches = abandonPrompt.entryIds || [];
                  const target = planEntries.find((entry) =>
                    matches.includes(entry.id),
                  );

                  if (target) {
                    const nextEntries = planEntries.filter(
                      (entry) => !matches.includes(entry.id),
                    );
                    setStoredPlanEntries(nextEntries);
                    syncGlobalStatus(
                      target.category,
                      target.title,
                      "W trakcie",
                    );
                    setPlanVersion((current) => current + 1);
                  }

                  setAbandonPrompt(null);
                }}
              >
                Tak
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="planSummaryCards">
        <div className="planSummaryCard">
          <span>Wszystkie</span>
          <strong>{visibleScheduledItems.length}</strong>
        </div>
      </div>

      <div className="planGrid">
        {visibleScheduledItems.length === 0 ? (
          <div className="planEmptyState">Nieprawidłowe kryteria</div>
        ) : (
          visibleScheduledItems.map((item) => {
            const regularitySummary = getItemRegularitySummary(item);

            return (
              <div
                className="planItemCard"
                key={
                  item.id || `${item.section ?? item.category}:${item.title}`
                }
              >
                <div className="planItemMeta">
                  {item.section ?? item.category}
                </div>
                <h2>{item.title}</h2>
                <div className="planItemStatus">
                  {normalizeStatusLabel(item.status) ?? "W trakcie"}
                </div>

                {regularitySummary && (
                  <div className="planItemEstimate">
                    <span>Pozostało: {regularitySummary.remainingLabel}</span>
                    <span>
                      Termin: {regularitySummary.completionDate} (
                      {regularitySummary.weeksLabel})
                    </span>
                  </div>
                )}

                {item.entryIds?.length && (
                  <div className="planItemActions">
                    <button
                      type="button"
                      className="planStatusActionButton"
                      disabled={isEntryLockedByPastDate(item)}
                      onClick={() =>
                        !isEntryLockedByPastDate(item) &&
                        setAbandonPrompt({ entryIds: item.entryIds })
                      }
                    >
                      Zrezygnuj
                    </button>
                    <button
                      type="button"
                      className="planStatusActionButton planStatusActionButtonSuccess"
                      disabled={isEntryLockedByPastDate(item)}
                      onClick={() =>
                        !isEntryLockedByPastDate(item) &&
                        updatePlanEntryStatus(item.entryIds, "Zakończone")
                      }
                    >
                      Skończyłam
                    </button>
                  </div>
                )}

                <div className="planItemFooter">
                  <div className="planItemTimeList">
                    {(item.timeLines || []).map((line, index) => (
                      <span key={`${item.title}-${index}`}>{line}</span>
                    ))}
                  </div>
                  {item.category === "Gry" && (
                    <strong>{formatHoursValue(item.totalHours)}</strong>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Plan;
