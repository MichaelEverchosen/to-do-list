<template>
  <div>
    <div>
      <div class="title">
        <p class="priority">{{ todo.priority }}</p>
        <p :class="{ strikethrough: todo.complete }">{{ todo.title }}:</p>
        <p class="description">{{ todo.description }}</p>
      </div>
      <div class="tasks">
        <div class="task" v-for="(task, idx) in todo.tasks" :key="idx">
          <p>{{ task.description }}</p>
        </div>
      </div>
    </div>
    <div class="priority-and-time">
      <div class="date">
        <p>{{ todo.data }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>