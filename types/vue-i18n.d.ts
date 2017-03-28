import _Vue  from 'vue';
import { PluginObject, PluginFunction } from "vue";

type Dictionary<T> = { [key: string]: T };

export type Path = string;
export type Locale = string;
export type LocaleMessage = string;
export type LocaleMessageObject = { [key: string]: LocaleMessage | LocaleMessageObject | LocaleMessageArray };
export type LocaleMessageArray = Array<LocaleMessage | LocaleMessageObject>;
export type LocaleMessages = { [key: string]: LocaleMessageObject };

export type TranslateResult = string;
export type MissingHandler = (locale: Locale, key: Path, vm?: any) => void;

declare type FormatterOptions = {
  [key: string]: any;
}

declare interface Formatter {
  format (message: string, values: any): string;
}

export declare class VueI18n {
  constructor (options?: VueI18nOptions);

  locale (): Locale;
  locale (locale: Locale): void;
  fallbackLocale (): Locale;
  fallbackLocale (locale: Locale): void;
  messages (): LocaleMessages;
  missing (): MissingHandler;
  missing (handler: MissingHandler): void;
  formatter (): Formatter;
  formatter (formatter: Formatter): void;
  getLocaleMessage (locale: Locale): LocaleMessage;
  setLocaleMessage (locale: Locale, message: LocaleMessage): void;
  t (key: Path, values: any): TranslateResult;
  tc (key: Path, choice: number, values: any): TranslateResult;
  te (key: Path, args: any): boolean;
  watchLocale (): any;
  unwatchLocale (): boolean;

  static install: () => void
}

export interface VueI18nOptions {
  locale?: Locale;
  fallbackLocale?: Locale;
  messages?: LocaleMessages;
  formatter?: Formatter;
  missing?: MissingHandler;
  root?: VueI18n,
  fallbackRoot?: boolean;
  sync?: boolean;
}
