import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { store, key } from "./store";

const app = createApp(App);

app.use(router);
app.use(store, key);
app.mount("#app");

