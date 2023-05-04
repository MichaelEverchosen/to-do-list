<template>
  <div class="todo">
    <div class="insidesTodo">
      <div>
        <div class="title">
          <div>
            <p class="priority" :class="priorityColor">
              {{ todo.priority }}
            </p>
          </div>
          <div class="name-todo">
            <p :class="{ strikethrough: todo.complete }">{{ todo.title }}</p>
          </div>
          <div class="date">
            <p>{{ todo.date }}</p>
          </div>
        </div>
        <div class="description">
          <p>{{ todo.description }}</p>
        </div>
        <div class="tasks">
          <div class="task" v-for="(task, idx) in todo.tasks" :key="idx">
            <p>- {{ task.description }}</p>
          </div>
        </div>
      </div>
      <div class="edit-actions">
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
        <div>
          <div class="title">
            <div>
              <p class="priority">
                {{ todo.priority }}
              </p>
            </div>
            <div class="name-todo">
              <p :class="{ strikethrough: todo.complete }">{{ todo.title }}</p>
            </div>
            <div class="date">
              <p>{{ todo.date }}</p>
            </div>
          </div>
          <div class="description">
            <p>{{ todo.description }}</p>
          </div>
          <div class="tasks">
            <div class="task" v-for="(task, idx) in todo.tasks" :key="idx">
              <p>- {{ task.description }}</p>
            </div>
          </div>
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
import SitePagination from "@/components/Actions/SitePagination.vue";

export default {
  components: {
    ModalWindow,
    SitePagination,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeModal: "",
    };
  },
  computed: {
    priorityColor() {
      if (this.todo.priority === "Низкий") return "bg-low-color";
      if (this.todo.priority === "Средний") return "bg-middle-color";
      return "bg-high-color";
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
  pageChangeHandler() {},
};
</script>

<style scoped>
.todo {
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
}

.title {
  display: flex;
  gap: 20px;
  font-size: 19px;
  background-color: rgb(238, 238, 238);
  padding: 3px 0px 3px 25px;
}
.priority {
  padding: 1px 5px;
  border-radius: 3px;
}

.name-todo {
  display: flex;
  gap: 40px;
}

.strikethrough {
  text-decoration: line-through;
}

.tasks {
  display: grid;
  gap: 5px;
  padding: 3px 20px;
}

.date {
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 19px;
  margin-left: auto;
  padding-right: 20px;
}

.description {
  display: grid;
  font-size: 19px;
  padding: 0px 0px 0px 26px;
  background-color: rgb(238, 238, 238);
  transform: translate(0, -20px);
}

.edit-actions {
  text-align: right;
  padding: 0px 20px 20px;
}

.edit-button {
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 35px;
}
.btn {
}

.btn-icon {
  padding: 15px;
  border: 0px;
  border-radius: 5px;
}

.bg-low-color {
  background-color: #00db12;
}
.bg-middle-color {
  background-color: #ff9500;
}
.bg-high-color {
  background-color: #ff0400;
}
</style>

