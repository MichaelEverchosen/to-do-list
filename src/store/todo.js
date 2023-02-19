import Vuex from "vuex";

const todo = new Vuex.Store({
  state: {
    todos: [
      {
        title: "Сходить посрать",
        description: "Cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        tasks: [
          {
            description: "Взять толканку",
            status: false,
          },
          {
            description: "Сесть на толчок",
            status: false,
          },
          {
            description: "Посрать",
            status: false,
          },
        ],
      },
      {
        title: "Сходить пожрать",
        description: "Cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        tasks: [
          {
            description: "Взять еду",
            status: false,
          },
          {
            description: "Сесть за стол",
            status: false,
          },
          {
            description: "Посрать",
            status: false,
          },
        ],
      },
      {
        title: "Сходить попить",
        description: "Cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        tasks: [
          {
            description: "Взять стакан",
            status: false,
          },
          {
            description: "Сесть на комп",
            status: false,
          },
          {
            description: "Посрать",
            status: false,
          },
        ],
      },
      {
        title: "Сходить поиграть",
        description: "Cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        tasks: [
          {
            description: "Взять мозги",
            status: false,
          },
          {
            description: "Сесть за комп",
            status: false,
          },
          {
            description: "Посрать",
            status: false,
          },
        ],
      },
    ],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});

export default todo;
