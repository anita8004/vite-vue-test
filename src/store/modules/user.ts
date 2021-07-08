
export interface IUserState {
  role: number,
  email: string
}

export default {
  state: () => ({
    role: 1,
    email: "test@gmail.com"
  }),
  mutations: {},
  getters: {},
  actions: {},
};