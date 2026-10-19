import {
  getAccountDataValue,
  setAccountDataValue,
  subscribeToAccountState,
} from "./accountStore";

export const PROGRESS_PLAN_DATA_KEY = "progressPlan";

const listeners = new Set();

const emitProgressPlan = () => {
  const nextPlan = readProgressPlan();
  listeners.forEach((listener) => listener(nextPlan));
};

export const readProgressPlan = () => {
  const value = getAccountDataValue(PROGRESS_PLAN_DATA_KEY, {});
  return value && typeof value === "object" && !Array.isArray(value)
    ? value
    : {};
};

subscribeToAccountState(() => {
  emitProgressPlan();
});

export const subscribeToProgressPlan = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const writeProgressPlan = async (plan) => {
  const safePlan =
    plan && typeof plan === "object" && !Array.isArray(plan) ? plan : {};

  await setAccountDataValue(PROGRESS_PLAN_DATA_KEY, safePlan);
  emitProgressPlan();
  return safePlan;
};
