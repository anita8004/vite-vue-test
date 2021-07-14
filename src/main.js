import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import "./assets/styles/base.scss";

const app = createApp(App);
app.use(router);
app.use(store, key);
app.use(vuetify);

app.mount("#app");
