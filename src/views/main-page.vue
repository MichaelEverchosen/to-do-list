<template>
  <div>
    <div class="actions">
      <SearchComponents></SearchComponents>
      <FilterComponents></FilterComponents>
      <div class="create-todo">
        <button class="btn" @click="toggleModal">Создание новой задачи</button>
      </div>
    </div>
    <div class="todos">
      <TodoComponent
        v-for="(todo, idx) in todos"
        :todo="todo"
        :key="idx"
      ></TodoComponent>
    </div>
    <ModalWindow>
      <!-- Компонент формы TODO!!!! -->
    </ModalWindow>
  </div>
</template>

<script>
import SearchComponents from "@/components/Actions/SearchComponents.vue";
import FilterComponents from "@/components/Actions/FilterComponents.vue";
import CreateComponents from "@/components/Actions/CreateComponents.vue";
import TodoComponent from "@/components/TodoComponent.vue";

export default {
  components: {
    SearchComponents,
    FilterComponents,
    CreateComponents,
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
.actions {
  display: flex;
  gap: 20px;
  padding: 20px 0px 0px 40px;
}

.todos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 40px;
}
</style>