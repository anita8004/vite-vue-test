import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import { aliases, md } from "vuetify/lib/iconsets/md";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md
    }
  },
  theme: {
    defaultTheme: "light"
  }
});
