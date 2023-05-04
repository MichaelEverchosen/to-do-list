<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="" />
      <p>To Do List</p>
    </div>
    <div class="login">
      <button class="btn" @click="toggleModal(authorization)">Войти</button>
      <button class="btn" @click="toggleModal(registration)">
        Регистрация
      </button>
    </div>
  </div>
</template>

<script>
// import ModalWindow from "@/components/ModalWindow.vue";

export default {
  components: {
    // ModalWindow,
  },
  data() {
    return {
      isActiveModal: false,
      activeModalName: "",
    };
  },
  methods: {
    toggleModal(modalName = "") {
      this.activeModalName = modalName;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  gap: 20px;
}

.logo {
  display: flex;
  gap: 40px;
  align-items: center;
}

.login {
  display: flex;
  gap: 20px;
  padding: 10px;
}

.btn {
  padding: 15px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 5px;
}
</style>
