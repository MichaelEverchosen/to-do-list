<template>
  <div class="filter-todo">
    <select v-model="selected" сlass="select">
      <option v-for="(select, index) in options" :key="index">
        {{ select }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["-", "Низкий", "Средний", "Высокий"],
      selected: "",
    };
  },
  watch: {
    selected() {
      if (this.selected === "-") {
        this.$store.commit("clearPriority");
        return;
      }
      this.$store.commit("setPriority", this.selected);
    },
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