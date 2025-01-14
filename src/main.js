import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import ButtonMixin from "./mixins/ButtonMixin";
import ScrollRevealMixin from "./mixins/ScrollRevealMixin";
import "./assets/main.css";

const app = createApp(App);
const head = createHead();

app.mixin(ButtonMixin);
app.mixin(ScrollRevealMixin);
app.use(router);
app.use(head);
app.mount("#app");
