import {
  getAccountDataValue,
  mergeAccountObjectValue,
  subscribeToAccountState,
} from "./accountStore";

export const MOVIE_STATUS_DATA_KEY = "movieStatuses";

const listeners = new Set();

const emitMovieStatuses = () => {
  const nextStatuses = readMovieStatuses();
  listeners.forEach((listener) => listener(nextStatuses));
};

export const readMovieStatuses = () => {
  const value = getAccountDataValue(MOVIE_STATUS_DATA_KEY, {});
  return value && typeof value === "object" ? value : {};
};

subscribeToAccountState(() => {
  emitMovieStatuses();
});

export const subscribeToMovieStatuses = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const updateMovieStatus = async (itemKey, nextStatus) => {
  const nextStatuses = await mergeAccountObjectValue(MOVIE_STATUS_DATA_KEY, {
    [itemKey]: nextStatus,
  });

  emitMovieStatuses();
  return nextStatuses;
};

export const updateMovieStatuses = async (updates) => {
  const nextStatuses = await mergeAccountObjectValue(
    MOVIE_STATUS_DATA_KEY,
    updates || {},
  );

  emitMovieStatuses();
  return nextStatuses;
};
