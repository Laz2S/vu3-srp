<script setup>
import Button from './pages/Srp/CatTips.vue'
import Description from './Description.vue'
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 1fr; padding: 0 2rem">
    <header>
      <div>
        <Button msg="Look out for some Cat tips!" />
      </div>
    </header>

    <main>
      <Description title="Single Responsibility Protocol" type="srp"/>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
  }
  main {
    margin-top: 16px;
  }
}
</style>
