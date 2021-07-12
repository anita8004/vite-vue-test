import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(store, key);

app.mount("#app");
