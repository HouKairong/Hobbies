import {
  getAccountDataValue,
  mergeAccountObjectValue,
  subscribeToAccountState,
} from "./accountStore";

export const BOOK_STATUS_STORAGE_KEY = "hobbies-book-statuses";

export const BOOK_STATUS_DATA_KEY = "bookStatuses";

const listeners = new Set();

const emitBookStatuses = () => {
  const nextStatuses = readBookStatuses();
  listeners.forEach((listener) => listener(nextStatuses));
};

export const buildBookStatusKey = (bookTitle) =>
  `book:${String(bookTitle || "")
    .trim()
    .toLowerCase()}`;

export const buildBookStoryStatusKey = (bookTitle, storyTitle) =>
  `story:${String(bookTitle || "")
    .trim()
    .toLowerCase()}:${String(storyTitle || "")
    .trim()
    .toLowerCase()}`;

export const readBookStatuses = () => {
  const value = getAccountDataValue(BOOK_STATUS_DATA_KEY, {});
  return value && typeof value === "object" ? value : {};
};

subscribeToAccountState(() => {
  emitBookStatuses();
});

export const notifyBookStatusListeners = () => {
  emitBookStatuses();
};

export const subscribeToBookStatuses = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const updateBookStatus = (itemKey, nextStatus) => {
  const nextStatuses = {
    ...readBookStatuses(),
    [itemKey]: nextStatus,
  };

  mergeAccountObjectValue(BOOK_STATUS_DATA_KEY, {
    [itemKey]: nextStatus,
  });

  notifyBookStatusListeners();
  return nextStatuses;
};

export const updateBookStatuses = (updates) => {
  const nextStatuses = {
    ...readBookStatuses(),
    ...(updates || {}),
  };

  mergeAccountObjectValue(BOOK_STATUS_DATA_KEY, updates || {});

  notifyBookStatusListeners();
  return nextStatuses;
};
