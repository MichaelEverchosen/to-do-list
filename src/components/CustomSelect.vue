<template>
  <div class="custom-select">
    <select v-model="selectedValue" name="" id="">
      <option v-for="(option, idx) in options" :key="idx" :value="option">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style>
</style>