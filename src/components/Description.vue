<template>
  <DescriptionItem>
    <template #icon>
      <img alt="Vue logo" class="logo" src="../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>{{ title }}</template>
    Architecture
  </DescriptionItem>
  <DescriptionItem>
    <template #icon>
      <img alt="Vue logo" class="logo" src="../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>Files</template>
    <ul>
      <li v-for="(object, index) in filteredComponents" :key="index">
        {{ path + object.component }}
      </li>
    </ul>
  </DescriptionItem>
  <DescriptionItem v-for="(object, index) in filteredComponents" :key="index">
    <template #icon>
      <img alt="Vue logo" class="logo" src="../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>Body of file {{ object.component }}</template>
    <div v-if="object.name == 'button'" class="content-block">
      {{ object.value }}
    </div>
    <div v-else class="content-block" v-html="object.value"/>
  </DescriptionItem>
</template>

<script>
import { ref, computed } from 'vue'
import CompositionButton from './pages/CompositionApi/component_print.js'
import SrpButton from './pages/Srp/component_print.js'
import { ButtonController } from './pages/Srp/controller.js'
import SrpStyle from './pages/Srp/style.css'
import DescriptionItem from './DescriptionItem.vue'

export default {
  components: {
    DescriptionItem
  },
  name: 'Description',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup(props) {
    const subtitle = ref('Trabalhando diretamente com');
    const path = computed(() => {
      return props.type == 'composition'
        ? '/src/components/pages/CompositionApi/'
        : '/src/components/pages/SrpApi/';
    });
    const components = computed(() => {
      return props.type == 'composition'
        ? ['button']
        : ['button', 'controller', 'style'];
    });
    const button = ref(props.type == 'composition' ? CompositionButton : SrpButton)
    const controller = ref(ButtonController)
    const style = ref(SrpStyle)
    const filteredComponents = computed(() => {
      let dictionary = [
        {
          name: 'button',
          component: 'Button.vue',
          value: button.value
        },
        {
          name: 'controller',
          component: 'controller.js',
          value: controller.value
        },
        {
          name: 'style',
          component: 'style.css',
          value: style.value
        }
      ]
      return dictionary.filter((object) => {
        if (components.value.some((component) => component == object.name)) {
          return object
        }
      })
    })
    return {
      path,
      subtitle,
      filteredComponents
    }
  }
}
</script>

<style scoped>
.content-block {
  background-color: #f2f9ff;
  margin-bottom: 8px;
  padding: 8px 12px 12px;
  border-radius: 8px;
  color: #53565b;
  white-space: break-spaces;
}
</style>