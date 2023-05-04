<template>
  <div>
    <div class="search-todo">
      <input
        class="search"
        type="text"
        required="required"
        placeholder="Введите строку для поиска"
        @input="setSearch"
        v-model="search"
      />
      <button type="reset" @click="resetText">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    setSearch() {
      this.$store.commit("setSearchString", this.search);
    },
    resetText() {
      this.search = "";
      this.$store.commit("clearSearchBar");
    },
  },
};
</script>

<style scoped>
.search-todo {
  display: flex;
  align-items: center;
  margin: 20px auto;
  position: relative;
  width: 400px;
  font-size: 30px;
}

.search {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  border: 2px solid #aaa;
}

button[type="reset"] {
  position: absolute;
  top: 10px;
  bottom: 10px;
  right: 10px;
  color: #666;
  border: 0;
  display: none;
  padding: 0 10px;
  border-radius: 50%;
  background-color: #fff;
  transition: background 200ms;
  outline: none;

  &:hover {
    background-color: #eee;
  }
}

input:valid ~ button[type="reset"] {
  display: block;
}

.btn {
  padding: 10px;
}
</style>