<template>
    <div class="body">
      <img alt="Vue logo" class="logo" src="../../../assets/logo.png" width="125" height="125" />
      <button class="greetings" @click="showMsg">
        <h1 class="green">{{ msg }}</h1>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const showMsg = () => {
        alert(props.msg)
      }
      return {
        showMsg
      }
    }
  }
  </script>
  
  <style scoped>
  .body {
    display: flex;
    gap: 4px;
  }
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  
  .logo {
    display: block;
  }
  
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>
  