<template>
  <div class="todo">
    <div class="title">
      <input type="checkbox" />
      <p :class="{ strikethrough: todo.complete }">{{ todo.title }}</p>
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
      <button class="btn" @click="">Редактировать</button>
      <button class="btn" @click="">Удалить</button>
    </div>
    <!-- <ModalWindow v-if="toggleModal" @click="toggleModal">
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <button>Добавить</button>
        </div>
      </div>
    </ModalWindow> -->
  </div>
</template>

<script>
// import ModalWindow from "@/src/components/ModalWindow.vue";

export default {
  components: {
    // ModalWindow,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {},
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
</style>

