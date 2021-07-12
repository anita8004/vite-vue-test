export interface IThemeState {
  theme: string;
}

export default {
  state: () => ({
    theme: "light"
  }),
  mutations: {
    changeTheme(state: IThemeState, theme: string) {
      state.theme = theme;
    }
  },
  getters: {},
  actions: {}
};
