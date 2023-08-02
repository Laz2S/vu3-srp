import { ref } from 'vue'
import { getFacts } from './controller.js';

export class ButtonController {
  constructor(props) {
    this.props = ref(props)
  }

  showMsg = async () => {
    let message = await getFacts();
    alert(message)
  }
}
