<template>
  <div>
    <SearchAndCreateTodo></SearchAndCreateTodo>
    <div class="todos">
      <TodoComponent
        v-for="(todo, idx) in todos"
        :todo="todo"
        :key="idx"
      ></TodoComponent>
    </div>
  </div>
</template>

<script>
import SearchAndCreateTodo from "@/components/SearchAndCreateTodo.vue";
import TodoComponent from "@/components/TodoComponent.vue";

export default {
  components: {
    SearchAndCreateTodo,
    TodoComponent,
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 40px;
}
</style>