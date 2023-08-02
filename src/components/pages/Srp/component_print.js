const html = `<template>
  <div class="body">
    <img alt="Vue logo" class="logo" src="../../../assets/logo.svg" width="125" height="125" />
    <button class="greetings" @click="controller.showMsg">
      <h1 class="green">{{ msg }}</h1>
    </button>
  </div>
</template>

<script>
import { ButtonController } from './controller.js';
export default {
  name: 'Button',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const controller = ref(new ButtonController(props));
    return {
      controller
    }
  }
}
</script>

<style scoped>
@import './style.css';
</style>
`
export default html
