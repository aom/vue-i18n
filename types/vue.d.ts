import Vue = require("vue");
import VueI18n from './index';

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    i18n?: VueI18n;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $i18n: VueI18n;
  }
}