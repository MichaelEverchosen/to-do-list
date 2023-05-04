import Vuex from "vuex";

const todo = new Vuex.Store({
  state: {
    todos: [
      {
        title: "Test title 1",
        description: "",
        priority: "Низкий",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 2 ",
        description: "",
        priority: "Средний",
        date: "12/12/2033",
        isComplete: false,
        id: 1,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 3 ",
        description: "",
        priority: "Высокий",
        date: "12/12/2033",
        isComplete: false,
        id: 2,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 4",
        description: "",
        priority: "Низкий",
        date: "12/12/2033",
        isComplete: false,
        id: 3,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 5 ",
        description: "",
        priority: "Средний",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 6 ",
        description: "",
        priority: "Высокий",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 7 ",
        description: "",
        priority: "Низкий",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 8 ",
        description: "",
        priority: "Средний",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 9 ",
        description: "",
        priority: "Высокий",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: "Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
      {
        title: "Test title 10 ",
        description: "",
        priority: "Низкий",
        date: "12/12/2033",
        isComplete: false,
        id: 0,
        tasks: [
          {
            description: " Test description 1",
            status: false,
          },
          {
            description: "Test description 2",
            status: false,
          },
          {
            description: "Test description 3",
            status: false,
          },
        ],
      },
    ],
    activeTodoId: null,
    todoCount: 0,
    displaySettings: {
      search: "",
      priority: "",
    },
    pagination: {
      page: 1,
      perPage: 5,
      // listLength: this.$store.commit("taskArrayLength"),
      // pageCount: this.$store.commit("taskArrayLength"),
    },
  },
  getters: {
    getTodos(state) {
      let todos = window.lodash.cloneDeep(state.todos);
      if (state.displaySettings.search.length) {
        todos = todos.filter((todo) => {
          return todo.title
            .toLowerCase()
            .includes(state.displaySettings.search.toLowerCase());
        });
      }
      if (state.displaySettings.priority.length) {
        todos = todos.filter((todo) => {
          return todo.priority
            .toLowerCase()
            .includes(state.displaySettings.priority.toLowerCase());
        });
      }
      return todos;
    },
    getActiveTodo(state) {
      return state.todos.find((todo) => todo.id === state.activeTodoId);
    },
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
        date: state.date,
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
    taskArrayLength(state) {
      state.pagination.listLength = this.state.todos.length;
    },
    numberOfTaskPages(state) {
      state.pagination.pageCount =
        this.state.pagination.listLength / this.state.pagination.perPage;
    },
    //  Дальше все связонное с настройкой отображения списка
    setSearchString(state, search) {
      state.displaySettings.search = search;
    },
    clearSearchBar(state) {
      state.displaySettings.search = "";
    },
    setPriority(state, priority) {
      state.displaySettings.priority = priority;
    },
    clearPriority(state) {
      state.displaySettings.priority = "";
    },
  },
});

export default todo;
