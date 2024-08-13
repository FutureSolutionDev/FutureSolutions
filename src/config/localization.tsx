// src/config/localization.ts
import {
  TranslationsList,
  setLocalizationConfigurations,
} from "@mongez/localization";

const translations: TranslationsList = {
};

setLocalizationConfigurations({
  /**
   * Default locale code
   * 
   * @default en
   */
  defaultLocaleCode: "en",
  /**
   * Fall back locale code
   * 
   * @default ar
   */
  fallback: "ar",
  /**
   * Set translations list
   */
  translations: translations,
});