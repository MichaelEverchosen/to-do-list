<template>
  <div class="filter-todo">
    <select v-model="select" сlass="select">
      <option v-for="(select, index) in selects" :key="index">
        {{ select }}
      </option>
    </select>
    <FeatherIcon class="btn" @click="searchTodo" type="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selects: ["По времени", "По дате", "По cрочности", "По алфавиту"],
      select: "Срочно",
    };
  },
};
</script>

<style scoped>
.filter-todo {
  display: flex;
  align-items: center;
}
.select {
  padding: 15px;
}
.btn {
  padding: 10px;
}
</style>