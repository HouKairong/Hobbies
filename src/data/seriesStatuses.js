import {
  getAccountDataValue,
  mergeAccountObjectValue,
  subscribeToAccountState,
} from "./accountStore";

export const SERIES_STATUS_STORAGE_KEY = "hobbies-series-statuses";

export const SERIES_STATUS_DATA_KEY = "seriesStatuses";

const listeners = new Set();

const emitSeriesStatuses = () => {
  const nextStatuses = readSeriesStatuses();
  listeners.forEach((listener) => listener(nextStatuses));
};

export const readSeriesStatuses = () => {
  const value = getAccountDataValue(SERIES_STATUS_DATA_KEY, {});
  return value && typeof value === "object" ? value : {};
};

subscribeToAccountState(() => {
  emitSeriesStatuses();
});

export const notifySeriesStatusListeners = () => {
  emitSeriesStatuses();
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

  mergeAccountObjectValue(SERIES_STATUS_DATA_KEY, {
    [itemKey]: nextStatus,
  });

  notifySeriesStatusListeners();
  return nextStatuses;
};
