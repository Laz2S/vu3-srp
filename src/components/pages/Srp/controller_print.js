const html = `import { ref } from 'vue'
import { getFact } from './service.js';

export class ButtonController {
  constructor(props) {
    this.props = ref(props)
  }

  showMsg = async () => {
    let message = await getFact();
    alert(message)
  }
}

`;

export default html;