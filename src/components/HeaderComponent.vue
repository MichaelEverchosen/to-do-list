<template>
  <div class="header">
    <div class="logo">
      <img src="" alt="" />
      <p>To Do List</p>
    </div>
    <div class="login">
      <button class="btn">Войти</button>
      <button class="btn">Регистрация</button>
    </div>
    <!-- <ModalWindow v-if="toggleModal" @click="toggleModal">
      <div v-if="ActiveModalName === 'registration'">
        <p>Регистрация</p>
        <div>
          <p>Придумайте логин</p>
          <input type="text" placeholder="Введите логин" />
        </div>
        <div>
          <p>Придумайте пароль</p>
          <input type="text" placeholder="Введите пароль" />
        </div>
        <div v-if="ActiveModalName === 'authorization'">
        <p>Авторизация</p>
        <div>
          <p>Логин</p>
          <input type="text" placeholder="Введите логин" />
        </div>
        <div>
          <p>Пароль</p>
          <input type="text" placeholder="Введите пароль" />
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
  data() {
    return {
      ActiveModalName: "",
    };
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
  gap: 20px;
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
