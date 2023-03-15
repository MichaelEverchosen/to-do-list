<template>
  <div>
    <div class="search-todo">
      <input
        class="search"
        type="text"
        placeholder="Введите строку для поиска"
      />
      <FeatherIcon class="btn" @click="searchTodo" type="search" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.search-todo {
  display: flex;
  align-items: center;
}
.search {
  padding: 15px;
}

.btn {
  padding: 10px;
}
</style>