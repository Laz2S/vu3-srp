<template>
    <DescriptionItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>{{ title }}</template>
      Architecture
    </DescriptionItem>
    <DescriptionItem>
      <template #icon>
        <DocumentationIcon />
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
        <DocumentationIcon />
      </template>
      <template #heading>Body of file {{ object.component }}</template>
      <div
        style="
          background-color: #f2f9ff;
          margin-bottom: 8px;
          padding: 8px 12px 12px;
          border-radius: 8px;
          color: #53565b;
          white-space: break-spaces;
        "
      >
        {{ object.value }}
      </div>
    </DescriptionItem>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import CompositionButton from './pages/CompositionApi/component_print.js'
  import SrpButton from './pages/Srp/component_print.js'
  import { ButtonController } from './pages/Srp/controller.js'
  import SrpStyle from './pages/Srp/style.css'
  import DescriptionItem from './DescriptionItem.vue'
  import DocumentationIcon from '../assets/icons/IconDocumentation.vue'
  
  export default {
    components: {
      DescriptionItem,
      DocumentationIcon
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
      },
      components: {
        type: Array,
        required: true,
        default: []
      }
    },
    setup(props) {
      const subtitle = ref('Trabalhando diretamente com')
      const path = ref(
        props.type == 'composition'
          ? '/src/components/pages/CompositionApi/'
          : '/src/components/pages/SrpApi/'
      )
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
          if (props.components.some((component) => component == object.name)) {
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
  