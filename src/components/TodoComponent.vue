<template>
  <div class="todo">
    <div class="title">
      <input type="checkbox" />
      <p :class="{ strikethrough: todo.complete }">{{ todo.title }}</p>
    </div>
    <div>
      <p>{{ todo.description }}</p>
    </div>
    <div class="priority-and-time">
      <p>{{ todo.priority }}</p>
      <p>{{ todo.data }}</p>
    </div>
    <div class="tasks">
      <div class="task" v-for="(task, idx) in todo.tasks" :key="idx">
        <input type="checkbox" />
        <p>{{ task.description }}</p>
      </div>
    </div>
    <div class="edit-button">
      <FeatherIcon
        type="feather"
        class="btn"
        @click="openEditTodoModal(task.id)"
        >Редактировать</FeatherIcon
      >
      <FeatherIcon type="trash-2" class="btn" @click="toggleModal"
        >Удалить</FeatherIcon
      >
    </div>
    <ModalWindow v-if="isActiveModal" @close="isActiveModal = false">
      <div>
        <p>Подверлите действие</p>
        <button @click="deleteTodo()">Удалить</button>
        <button @click="toggleModal()">Отмена</button>
      </div>
    </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";

export default {
  components: {
    ModalWindow,
  },
  data() {
    return {
      isActiveModal: false,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleModal() {
      this.isActiveModal = !this.isActiveModal;
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo.id);
      this.isActiveModal = !this.isActiveModal;
    },

    openEditTodoModal(id) {
      this.$store.commit("setActiveTodoId", id);
      this.$emit("edit-todo");
    },
  },
};
</script>

<style scoped>
.todo {
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
  padding: 10px 20px 25px 20px;
}
.title {
  display: flex;
  gap: 20px;
}

.strikethrough {
  text-decoration: line-through;
}

.priority-and-time {
  display: flex;
  gap: 20px;
}

.tasks {
  display: grid;
}
.task {
  display: flex;
  gap: 20px;
}

.edit-button {
  display: flex;
  gap: 30px;
}
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
</style>

