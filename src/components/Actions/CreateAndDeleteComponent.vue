<template>
  <div class="modal-window">
    <div>
      <input
        v-model="todo.title"
        class="modal-edit"
        type="text"
        placeholder="Введите название задачи"
      />
    </div>
    <div>
      <input
        v-model="todo.description"
        type="text"
        class="modal-edit"
        placeholder="Описание задачи"
      />
    </div>
    <div class="data">
      <CustomSelect
        :options="priorityOptions"
        v-model="todo.priority"
        returnedKey="text"
      />
      <input
        class="modal-edit"
        v-model="todo.date"
        type="date"
        id="data-picker"
        min="2023-01-01"
        max="2030-12-31"
        placeholder="Выберите дату"
      />
    </div>
    <div class="subtasks">
      <div v-for="(task, idx) in todo.tasks" :key="idx">
        <input type="checkbox" v-model="task.status" />
        <input
          class="modal-edit"
          v-model="task.description"
          type="text"
          placeholder="Введите подзадачу"
        />
      </div>
    </div>
    <div class="add-btn">
      <div>
        <FeatherIcon type="plus" class="btn-icon" @click="addSubtask"
          >Добавить</FeatherIcon
        >
      </div>
      <div class="exit-btn">
        <button class="btn" @click="saveTodo">Сохранить</button>
        <button class="btn" @click="closeModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        title: "",
        description: "",
        priority: "",
        date: "",
        isComplete: false,
        tasks: [
          {
            description: "",
            status: true,
          },
        ],
      },
      priorityOptions: [
        { text: "Низкий", key: "low" },
        { text: "Средний", key: "middle" },
        { text: "Высокий", key: "high" },
      ],
      priorityText: [],
      isEditing: false,
    };
  },

  created() {
    this.priorityText = this.priorityOptions[0].text;
    this.priority = Object.keys(this.priorityText[0]);

    const todoForEditing = this.$store.getters["getActiveTodo"];
    this.isEditing = !!todoForEditing;
    if (this.isEditing) this.parseTodoData(todoForEditing);
  },
  methods: {
    closeModal() {
      this.$emit("close");
      this.$store.commit("setActiveTodoId", null);
    },
    addSubtask() {
      this.todo.tasks.push({
        description: "",
        status: false,
      });
    },
    saveTodo() {
      this.isEditing
        ? this.$store.commit("updateTodo", this.todo)
        : this.$store.commit("addTodo", this.todo);
      this.closeModal();
    },
    optionSelect(option) {
      this.selected = option.name;
    },

    parseTodoData(todoForEditing) {
      this.todo = window.lodash.cloneDeep(todoForEditing);
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 15px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
}

.btn-icon {
  padding: 15px;
  border: 0px;
  border-radius: 5px;
}
.modal-window {
  display: grid;
  gap: 25px;
}
.select {
  padding: 10px;
  width: 100px;
}
.modal-edit {
  height: 30px;
  width: 300px;
}

.data {
  display: flex;
  gap: 30px;
}

.subtasks {
  display: grid;
  grid-auto-columns: 1fr;
  justify-items: center;
  gap: 15px;
}
.modal-edit {
  padding: 10px;
  max-width: 280px;
  font-size: 16px;
  outline: none;
}

.add-btn {
  display: grid;
  gap: 20px;
}
.exit-btn {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>