import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import VueFeather from "vue-feather";
import CustomSelect from "@/components/CustomSelect.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("FeatherIcon", VueFeather);
app.component("CustomSelect", CustomSelect);

app.mount("#app");
