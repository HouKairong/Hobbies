import {
  getAccountDataValue,
  setAccountDataValue,
  subscribeToAccountState,
} from "./accountStore";

export const PLAN_ENTRIES_DATA_KEY = "planEntries";

const listeners = new Set();

const emitPlanEntries = () => {
  const nextEntries = readPlanEntries();
  listeners.forEach((listener) => listener(nextEntries));
};

export const readPlanEntries = () => {
  const value = getAccountDataValue(PLAN_ENTRIES_DATA_KEY, []);
  return Array.isArray(value) ? value : [];
};

subscribeToAccountState(() => {
  emitPlanEntries();
});

export const subscribeToPlanEntries = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const writePlanEntries = async (entries) => {
  const safeEntries = Array.isArray(entries) ? entries : [];

  await setAccountDataValue(PLAN_ENTRIES_DATA_KEY, safeEntries);
  emitPlanEntries();
  return safeEntries;
};
