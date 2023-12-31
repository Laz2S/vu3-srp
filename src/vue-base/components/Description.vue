<template>
  <DescriptionItem>
    <template #icon>
      <img alt="Vue logo" class="logo" src="../../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>{{ title }}</template>
    Architecture
  </DescriptionItem>
  <DescriptionItem>
    <template #icon>
      <img alt="Vue logo" class="logo" src="../../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>Files</template>
    <ul>
      <li v-for="(object, index) in filteredComponents" :key="index" v-html="object.path"/>
    </ul>
  </DescriptionItem>
  <DescriptionItem v-for="(object, index) in filteredComponents" :key="index">
    <template #icon>
      <img alt="Vue logo" class="logo" src="../../assets/logo.png" width="25" height="25" />
    </template>
    <template #heading>Content of file {{ object.component }}</template>
    <div class="content-block">
      {{ object.value }}
    </div>
  </DescriptionItem>
</template>

<script>
import { ref, computed } from 'vue'
import DescriptionItem from './DescriptionItem.vue'

import CompositionCatTips from './prints/CompositionApi/component_print.js'
import CompositionService from './prints/CompositionApi/service_print.js'

import SrpCatTips from './prints/Srp/component_print.js'
import SroController from './prints/Srp/controller_print.js'
import SrpStyle from './prints/Srp/style_print.js'
import SrpService from './prints/Srp/service_print.js'

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
        ? '/vue-base/components/pages/CompositionApi/'
        : '/vue-base/components/pages/SrpApi/';
    });
    const catTips = ref(props.type == 'composition' ? CompositionCatTips : SrpCatTips);
    const controller = ref(SroController);
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
            path: '/vue-base/service/Cat/service.js',
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