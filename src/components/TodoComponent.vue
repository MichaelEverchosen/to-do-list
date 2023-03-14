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
      <FeatherIcon type="feather" class="btn" @click="toggleModal('editing')"
        >Редактировать</FeatherIcon
      >
      <FeatherIcon type="trash-2" class="btn" @click="toggleModal('delete')"
        >Удалить</FeatherIcon
      >
    </div>
    <!-- <ModalWindow v-if="isActiveModal !== ''" @close="isActiveModal = false">
      <div v-if="isActiveModal === 'editing'">
        <div>
          <input 
            v-model="todo.title"
            class="modal-data"
            type="text" />
        </div>
         <div>
          <input
            v-model="todo.description"
            type="text"
            class="modal-data"
          />
          </div>
        <div>
          <input 
            v-model="todo.priority"
            class="modal-data"
            type="text" />
          <input type="text" />
        </div>
        <div>                                                        ПОЛОМАНА ВЕРСТКА
          <input class="modal-data" type="number" />
        </div>
          <input
            v-for="(task, idx) in todo.tasks"
            v-model="task.description"
            :key="idx"
            class="modal-data"
            type="text"
          />
        </div>
        <div>
          <div>
            <button class="btn" @click="addSubtask">Добавить</button>
          </div>
          <div>
            <button @click="Todo">Сохранить</button>
            <button @click="toggleModal()">Закрыть</button>
          </div>
        </div>
      </div>
      <div v-if="isActiveModal === 'delete'">
        <div>
          <p>Подверлите действие</p>
          <button @click="deleteTodo()">Удалить</button>
          <button @click="toggleModal()">Отмена</button>
        </div>
      </div>
    </ModalWindow> -->
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
      activeModalName: "",
      // todo: {
      //   title: this.todo.title,
      //   description: this.todo.description,
      //   priority: this.todo.priority,
      //   id: this.state.todoCount++,
      //   isComplete: false,
      //   tasks: this.todo.tasks,
      // }, или через геттер нужно?
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
      this.isActiveModal = modalName;
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo.id);
    },
    addSubtask() {
      this.todo.tasks.push({
        description: "",
        status: false,
      });
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

