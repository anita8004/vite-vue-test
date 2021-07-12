export interface ICounterState {
  count: number;
  answer: string;
}

const counterModule = {
  state: () => ({
    count: 0,
    answer: ""
  }),
  mutations: {
    increment(state: ICounterState) {
      state.count++;
    },
    setAnswer(state: ICounterState, answer: string) {
      state.answer = answer;
    }
  },
  getters: {
    doubleCount: (state: ICounterState) => {
      return state.count * 2;
    }
  },
  actions: {
    async getAnswer(context: any) {
      console.log(context);
      const res = await fetch("https://yesno.wtf/api");
      const answer = await res.json();
      context.commit("setAnswer", answer.answer);
    }
  }
};

export default counterModule;
