import Vue from 'vue';
import * as R from './vue-i18n'

declare namespace VueI18n {
  export type Translate = R.Translate
  export type TranslateChoices = R.TranslateChoices
  export type TranslationExists = R.TranslationExists
}

declare class VueI18n extends R.VueI18n {}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    i18n?: VueI18n;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $i18n: VueI18n;
    $t: VueI18n.Translate;
    $tc: VueI18n.TranslateChoices;
    $te: VueI18n.TranslationExists;
  }
}

export = VueI18n;