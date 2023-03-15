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
      <CustomSelect :options="priorityOptions" v-model="priority" />
      <input
        class="modal-edit"
        type="date"
        id="data-picker"
        placeholder="Выберите дату"
      />
    </div>
    <div class="subtasks">
      <input
        v-for="(task, idx) in todo.tasks"
        v-model="task.description"
        :key="idx"
        class="modal-edit"
        type="text"
        placeholder="Введите подзадачу"
      />
    </div>
    <div class="add-btn">
      <div>
        <FeatherIcon type="plus" class="btn-icon" @click="addSubtask"
          >Добавить</FeatherIcon
        >
      </div>
      <div class="exit-btn">
        <button class="btn" @click="addTodo">Сохранить</button>
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
        isComplete: false,
        tasks: [
          {
            description: "",
            status: false,
          },
        ],
      },
      priorityOptions: [
        { text: "Низкий", key: "low" },
        { text: "Средний", key: "middle" },
        { text: "Высокий", key: "high" },
      ],
      priority: {},
    };
  },
  created() {
    this.priority = this.priorityOptions[0];
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    addSubtask() {
      this.todo.tasks.push({
        description: "",
        status: false,
      });
    },
    addTodo() {
      this.$store.commit("addTodo", this.todo);
      this.closeModal();
    },
    optionSelect(option) {
      this.selected = option.name;
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