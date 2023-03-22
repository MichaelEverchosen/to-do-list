<template>
  <div class="todo">
    <div class="insidesTodo">
      <div>
        <div class="title">
          <p class="priority">{{ todo.priority }}</p>
          <p :class="{ strikethrough: todo.complete }">{{ todo.title }}:</p>
          <p class="description">{{ todo.description }}</p>
        </div>
        <div class="tasks">
          <div class="task" v-for="(task, idx) in todo.tasks" :key="idx">
            <p>{{ task.description }}</p>
          </div>
        </div>
      </div>
      <div class="priority-and-time">
        <div class="date">
          <p>{{ todo.data }}</p>
        </div>
        <div class="edit-button">
          <FeatherIcon type="eye" class="btn" @click="toggleModal('taskView')"
            >Просмотр всех задач</FeatherIcon
          >
          <FeatherIcon type="pen-tool" class="btn" @click="editTodo(todo.id)"
            >Редактировать</FeatherIcon
          >
          <FeatherIcon
            type="trash-2"
            class="btn"
            @click="toggleModal('deleteTodo')"
            >Удалить</FeatherIcon
          >
        </div>
      </div>
    </div>
    <ModalWindow v-if="activeModal.length" @close="activeModal = ''">
      <div v-if="activeModal === 'taskView'">
        <div class="task" v-for="(task, idx) in todo.tasks" :key="idx">
          <p>{{ task.description }}</p>
        </div>
        <button @click="toggleModal()">Выйти</button>
      </div>
      <div class="delete" v-if="activeModal === 'deleteTodo'">
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
      activeModal: "",
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleModal(modalName = "") {
      this.activeModal = modalName;
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo.id);
      this.activeModal = !this.activeModal;
    },

    editTodo(id) {
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
.insidesTodo {
  display: grid;
  grid-template: auto/ 1fr 1fr;
}
.title {
  display: flex;
  gap: 20px;
  font-size: 19px;
}
.priority {
  padding: 1px 5px;
  background-color: red;
  border: 1px solid red;
  border-radius: 3px;
}

.strikethrough {
  text-decoration: line-through;
}

.priority-and-time {
  display: grid;
  gap: 20px;
  text-align: right;
}

.tasks {
  display: grid;
}
.task {
  display: flex;
  gap: 20px;
}
.date {
  display: flex;
  justify-content: end;
  font-size: 19px;
}

.edit-button {
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 35px;
  padding-left: 300px;
}
.btn {
}

.btn-icon {
  padding: 15px;
  border: 0px;
  border-radius: 5px;
}
</style>

