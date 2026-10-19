export const SERIES_STATUS_STORAGE_KEY = "hobbies-series-statuses";

const listeners = new Set();

export const readSeriesStatuses = () => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    return JSON.parse(
      window.localStorage.getItem(SERIES_STATUS_STORAGE_KEY) || "{}",
    );
  } catch {
    return {};
  }
};

export const notifySeriesStatusListeners = () => {
  const nextStatuses = readSeriesStatuses();
  listeners.forEach((listener) => listener(nextStatuses));
};

export const subscribeToSeriesStatuses = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const updateSeriesStatus = (itemKey, nextStatus) => {
  const nextStatuses = {
    ...readSeriesStatuses(),
    [itemKey]: nextStatus,
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      SERIES_STATUS_STORAGE_KEY,
      JSON.stringify(nextStatuses),
    );
  }

  notifySeriesStatusListeners();
  return nextStatuses;
};
