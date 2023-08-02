import { ref } from 'vue'

export class ButtonController {
  constructor(props) {
    this.props = ref(props)
  }

  showMsg = () => {
    alert(this.props.msg)
  }
}
