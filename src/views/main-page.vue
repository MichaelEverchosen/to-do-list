<template>
  <div>
    <div class="actions">
      <SearchComponent />
      <FilterComponent />
      <div class="create-todo">
        <button class="btn" @click="toggleModal">Создание новой задачи</button>
      </div>
    </div>
    <div class="todos">
      <TodoComponent
        v-for="(todo, idx) in todos"
        :todo="todo"
        :key="idx"
        @edit-todo="toggleModal('edit-todo')"
      ></TodoComponent>
    </div>
    <ModalWindow v-if="isActiveModal" @close="isActiveModal = false">
      <CreateAndDeleteComponent @close="isActiveModal = false" />
    </ModalWindow>
  </div>
</template>

<script>
import SearchComponent from "@/components/Actions/SearchComponent.vue";
import FilterComponent from "@/components/Actions/FilterComponent.vue";
import CreateAndDeleteComponent from "@/components/Actions/CreateAndDeleteComponent.vue";
import TodoComponent from "@/components/TodoComponent.vue";
import ModalWindow from "@/components/ModalWindow.vue";

export default {
  components: {
    SearchComponent,
    FilterComponent,
    CreateAndDeleteComponent,
    TodoComponent,
    ModalWindow,
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  data() {
    return {
      isActiveModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isActiveModal = !this.isActiveModal;
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