export const GAME_STATUS_STORAGE_KEY = "hobbies-game-statuses";

const listeners = new Set();

export const readGameStatuses = () => {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    return JSON.parse(
      window.localStorage.getItem(GAME_STATUS_STORAGE_KEY) || "{}",
    );
  } catch {
    return {};
  }
};

export const notifyGameStatusListeners = () => {
  const nextStatuses = readGameStatuses();
  listeners.forEach((listener) => listener(nextStatuses));
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

  if (typeof window !== "undefined") {
    window.localStorage.setItem(
      GAME_STATUS_STORAGE_KEY,
      JSON.stringify(nextStatuses),
    );
  }

  notifyGameStatusListeners();
  return nextStatuses;
};
