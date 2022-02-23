import i18n from "i18n-js"
import en from "./en.json"
import ar from "./ar.json"
import fr from "./fr.json"

i18n.fallbacks = true
i18n.translations = { fr, en, ar }

i18n.locale = "fr"

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof fr
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
