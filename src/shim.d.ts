import type { DefineComponent } from "vue";

declare module "*.vue" {
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
