<template>
  <div class="search-and-create">
    <div class="search-todo">
      <input
        class="search"
        type="text"
        placeholder="Введите строку для поиска"
      />
      <button class="btn">Искать</button>
    </div>
    <div class="filter">
      <button class="btn">Фильтр</button>
    </div>
    <div class="create-todo">
      <button class="btn" @click="toggleModal">Создание новой задачи</button>
    </div>
    <ModalWindow v-if="isActiveModal" @close="isActiveModal = false">
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
        </div>
        <div>
          <div>
            <button>Добавить</button>
          </div>
          <div>
            <button @click="Todo">Сохранить</button>
            <button @click="toggleModal">Закрыть</button>
          </div>
        </div>
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
  methods: {
    toggleModal() {
      this.isActiveModal = !this.isActiveModal;
    },
  },
};
</script>

<style scoped>
.search-and-create {
  display: flex;
  gap: 40px;
  padding: 20px 40px;
}

.search-todo {
  display: flex;
  gap: 30px;
}

.search {
  padding: 10px;
}

.btn {
  padding: 15px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
}
</style>