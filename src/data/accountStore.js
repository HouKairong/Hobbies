import { isSupabaseConfigured, supabase } from "./supabaseClient";

const ACCOUNT_TABLE = "hobbies_accounts";

const listeners = new Set();

let state = {
  nickname: "",
  data: {},
  loading: false,
  error: "",
};

const notifyListeners = () => {
  const snapshot = {
    nickname: state.nickname,
    data: { ...(state.data || {}) },
    loading: state.loading,
    error: state.error,
  };

  listeners.forEach((listener) => listener(snapshot));
};

const setState = (nextPartial) => {
  state = {
    ...state,
    ...nextPartial,
  };

  notifyListeners();
};

const ensureSupabase = () => {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error(
      "Brak konfiguracji Supabase. Ustaw VITE_SUPABASE_URL i VITE_SUPABASE_ANON_KEY.",
    );
  }
};

const normalizePayload = (value) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return value;
};

const insertAccountRecord = async (nickname, payload = {}) => {
  ensureSupabase();

  const { error } = await supabase.from(ACCOUNT_TABLE).insert({
    nickname,
    payload,
  });

  if (error) {
    throw error;
  }
};

const loadAccountPayload = async (nickname) => {
  ensureSupabase();

  const { data, error } = await supabase
    .from(ACCOUNT_TABLE)
    .select("payload")
    .eq("nickname", nickname)
    .single();

  if (error) {
    throw error;
  }

  return normalizePayload(data?.payload);
};

const loadAccountPayloadOrNull = async (nickname) => {
  ensureSupabase();

  const { data, error } = await supabase
    .from(ACCOUNT_TABLE)
    .select("payload")
    .eq("nickname", nickname)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return normalizePayload(data.payload);
};

const persistPayload = async (nickname, payload) => {
  ensureSupabase();

  const normalizedPayload = normalizePayload(payload);

  const { error } = await supabase
    .from(ACCOUNT_TABLE)
    .update({ payload: normalizedPayload })
    .eq("nickname", nickname);

  if (error) {
    throw error;
  }
};

export const subscribeToAccountState = (listener) => {
  listeners.add(listener);
  listener({
    nickname: state.nickname,
    data: { ...(state.data || {}) },
    loading: state.loading,
    error: state.error,
  });

  return () => {
    listeners.delete(listener);
  };
};

export const getAccountNickname = () => state.nickname;

export const isAccountLoggedIn = () => Boolean(state.nickname);

export const getAccountDataValue = (key, fallbackValue) => {
  if (!key) {
    return fallbackValue;
  }

  const value = state.data?.[key];
  if (value === undefined) {
    return fallbackValue;
  }

  return value;
};

export const loginToAccount = async (rawNickname) => {
  const nickname = String(rawNickname || "").trim();
  if (!nickname) {
    throw new Error("Podaj nickname.");
  }

  setState({ loading: true, error: "" });

  try {
    let payload = await loadAccountPayloadOrNull(nickname);

    if (payload === null) {
      await insertAccountRecord(nickname, {});
      payload = await loadAccountPayload(nickname);
    }

    setState({
      nickname,
      data: payload,
      loading: false,
      error: "",
    });

    return {
      nickname,
      payload,
    };
  } catch (error) {
    setState({ loading: false, error: error?.message || "Błąd logowania." });
    throw error;
  }
};

export const logoutFromAccount = () => {
  setState({
    nickname: "",
    data: {},
    loading: false,
    error: "",
  });
};

export const clearCurrentAccountData = async () => {
  if (!state.nickname) {
    return;
  }

  const previousData = state.data;
  setState({ data: {} });

  try {
    await persistPayload(state.nickname, {});
  } catch (error) {
    setState({
      data: previousData,
      error: error?.message || "Błąd resetu danych konta.",
    });
    throw error;
  }
};

export const setAccountDataValue = async (key, value) => {
  if (!key || !state.nickname) {
    return false;
  }

  const nextData = {
    ...(state.data || {}),
    [key]: value,
  };

  const previousData = state.data;
  setState({ data: nextData, error: "" });

  try {
    await persistPayload(state.nickname, nextData);
    return true;
  } catch (error) {
    setState({
      data: previousData,
      error: error?.message || "Błąd zapisu danych konta.",
    });
    return false;
  }
};

export const mergeAccountObjectValue = async (key, patchObject) => {
  const currentValue = getAccountDataValue(key, {});

  const nextValue = {
    ...(currentValue && typeof currentValue === "object" ? currentValue : {}),
    ...(patchObject && typeof patchObject === "object" ? patchObject : {}),
  };

  await setAccountDataValue(key, nextValue);
  return nextValue;
};
