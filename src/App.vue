<template>
  <div>
    <div style="display: flex; gap: 8px">
      <button :class="[{ active: !show }]" @click="showComposition">View Composition Api</button>
      <button :class="[{ active: show }]" @click="showSrp">
        View Single Responsability Protocol
      </button>
    </div>
    <SrpDescription v-if="show" />
    <CompositionDescription v-else />
  </div>
</template>

<script>
import { ref } from 'vue'
import SrpDescription from './vue-base/components/SrpDescription.vue'
import CompositionDescription from './vue-base/components/CompositionDescription.vue'

export default {
  components: {
    SrpDescription,
    CompositionDescription
  },
  setup() {
    const show = ref(false)
    const showComposition = () => {
      show.value = false
    }
    const showSrp = () => {
      show.value = true
    }
    return {
      show,
      showComposition,
      showSrp
    }
  }
}
</script>

<style scoped>
button {
  border: 2px solid #0068b3;
  cursor: pointer;
  font-family:
    Open Sans,
    sans-serif;
  font-weight: 600;
  outline: none !important;
  transition: all 0.3s linear;
  border-radius: 16px;
  font-size: 16px;
  padding: 8px 16px;
  width: 100%;
}

.active {
  background-color: #0068b3;
  color: #fff;
}
</style>
