import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import userModule, { IUserState } from "./modules/user";
import authModule, { IAuthState } from "./modules/auth";
import counterModule, { ICounterState } from "./modules/counter";
import themeModule, { IThemeState } from "./modules/theme";

export interface State {
  user: IUserState;
  auth: IAuthState;
  counter: ICounterState;
  theme: IThemeState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  modules: {
    user: userModule,
    auth: authModule,
    counter: counterModule,
    theme: themeModule,
  }
});

export function useStore() {
  return baseUseStore(key);
}
