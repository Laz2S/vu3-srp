const html = `<template>
  <div class="body">
    <img alt="Vue logo" class="logo" src="../../../../assets/logo.png" width="55" height="55" />
    <button class="greetings" @click="controller.showMsg">
      <h2 class="green">{{ msg }}</h2>
    </button>
  </div>
</template>

<script>
import { CatTipsController } from './controller.js';
export default {
  name: 'CatTips',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const controller = ref(new CatTipsController(props));
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
