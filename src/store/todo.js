import Vuex from "vuex";

const todo = new Vuex.Store({
  state: {
    todos: [
      {
        title: "Сходить посрать",
        description: "cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        id: 0,
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
        description: "cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        id: 1,
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
        description: "cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        id: 2,
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
        description: "cосать",
        priority: "Срочно",
        data: "12/12/2033",
        isComplete: false,
        id: 3,
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
    activeTodoId: null,
  },
  mutations: {
    deleteTodo(state, id) {
      const idx = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(idx, 1);
    },
    addTodo(state, todo) {
      state.todos.push({
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        id: state.todoCount++,
        isComplete: false,
        tasks: todo.tasks,
      });
    },
    updateTodo(state, updatedTodo) {
      const idx = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      state.todos[idx] = updatedTodo;
      state.activeTodoId = null;
    },
    setActiveTodoId(state, id) {
      state.activeTodoId = id;
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getActiveTodo(state) {
      return state.todos.find((todo) => todo.id === state.activeTodoId);
    },
  },
});

export default todo;
