import {
  getAccountDataValue,
  mergeAccountObjectValue,
  subscribeToAccountState,
} from "./accountStore";

export const GAME_STATUS_STORAGE_KEY = "hobbies-game-statuses";

export const GAME_STATUS_DATA_KEY = "gameStatuses";

const listeners = new Set();

const emitGameStatuses = () => {
  const nextStatuses = readGameStatuses();
  listeners.forEach((listener) => listener(nextStatuses));
};

export const readGameStatuses = () => {
  const value = getAccountDataValue(GAME_STATUS_DATA_KEY, {});
  return value && typeof value === "object" ? value : {};
};

subscribeToAccountState(() => {
  emitGameStatuses();
});

export const notifyGameStatusListeners = () => {
  emitGameStatuses();
};

export const subscribeToGameStatuses = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const updateGameStatus = (itemKey, nextStatus) => {
  const nextStatuses = {
    ...readGameStatuses(),
    [itemKey]: nextStatus,
  };

  mergeAccountObjectValue(GAME_STATUS_DATA_KEY, {
    [itemKey]: nextStatus,
  });

  notifyGameStatusListeners();
  return nextStatuses;
};
