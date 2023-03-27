import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import VueSocialSharing from "vue-social-sharing";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faShareNodes,
  faGear,
  faXmark,
  faFilter,
  faFilterCircleXmark,
  faChevronDown,
  faCamera,
  faPencil,
  faMessage,
  faClipboard,
  fa2,
  fa3,
  fa4,
  fa6,
  faTrophy,
  faMedal,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

library.add({
  faMagnifyingGlass,
  faShareNodes,
  faGear,
  faXmark,
  faFilter,
  faFilterCircleXmark,
  faChevronDown,
  faCamera,
  faPencil,
  faMessage,
  faWhatsapp,
  faFacebook,
  faTwitter,
  faClipboard,
  fa2,
  fa3,
  fa4,
  fa6,
  faTrophy,
  faCircleQuestion,
  faMedal,
  faAward,
});
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

createApp(App)
  .use(createPinia())
  .use(VueSocialSharing)
  .component("Icon", FontAwesomeIcon)
  .mount("#app");
