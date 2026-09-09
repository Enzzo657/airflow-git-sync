import { getContext, setContext } from "svelte";
import { translations, type Language } from "./translations";

const contextKey = Symbol("airflow-git-sync-i18n");
const storageKey = "airflow-git-sync-language";

// One reactive language per layout instance, including during prerendering.
export function provideI18n() {
  let language = $state<Language>("en");
  const i18n = {
    get language() {
      return language;
    },
    get strings() {
      return translations[language];
    },
    setLanguage(next: Language) {
      language = next;
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        /* Storage is optional. */
      }
    },
    restore() {
      try {
        language = localStorage.getItem(storageKey) === "ru" ? "ru" : "en";
      } catch {
        /* Keep the English fallback. */
      }
    },
  };
  return setContext(contextKey, i18n);
}

export function useI18n() {
  return getContext<ReturnType<typeof provideI18n>>(contextKey);
}
