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
      <li v-for="(object, index) in filteredComponents" :key="index" v-html="object.path"/>
    </ul>
  </DescriptionItem>
  <DescriptionItem v-for="(object, index) in filteredComponents" :key="index">
    <template #icon>
      <img alt="Vue logo" class="logo" src="../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>Content of file {{ object.component }}</template>
    <div class="content-block">
      {{ object.value }}
    </div>
  </DescriptionItem>
</template>

<script>
import { ref, computed } from 'vue'
import CompositionCatTips from './pages/CompositionApi/component_print.js'
import SrpCatTips from './pages/Srp/component_print.js'
import CatTipsController from './pages/Srp/controller_print.js'
import SrpStyle from './pages/Srp/style_print.js'
import CompositionService from './services/Cat/service_print.js'
import SrpService from './pages/Srp/service_print.js'
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
    const catTips = ref(props.type == 'composition' ? CompositionCatTips : SrpCatTips);
    const controller = ref(CatTipsController);
    const style = ref(SrpStyle);
    const service = ref(props.type == 'composition' ? CompositionService : SrpService);
    const filteredComponents = computed(() => {
      let dictionary = [];
      if (props.type == 'composition') {
        dictionary = [
          {
            component: 'CatTips.vue',
            path: path.value + 'CatTips.vue',
            value: catTips.value
          },
          {
            component: 'service.js',
            path: 'src/components/services/Cat/service.js',
            value: service.value
          }
        ];

      } else {
        dictionary = [
          {
            component: 'CatTips.vue',
            path: path.value + 'CatTips.vue',
            value: catTips.value
          },
          {
            component: 'controller.js',
            path: path.value + 'controller.js',
            value: controller.value
          },
          {
            component: 'service.js',
            path: path.value + 'service.js',
            value: service.value
          },
          {
            component: 'style.css',
            path: path.value + 'style.css',
            value: style.value
          }
        ];
      }
      return dictionary;
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