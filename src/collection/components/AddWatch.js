import {Watches} from '../../js/Watches.js'
import Btn from '../../liberyComponents/Btn.vue'
import Form from '../../liberyComponents/Form.vue'
import InputFiled from '../../liberyComponents/InputFiled.vue'

export default {
  name: 'addWatch',
  components: {
    Btn,
    Form,
    InputFiled,
  },
  props: {
    propFunction: Function
  },
  data: () => ({
    input: {
      brand: '',
      family: '',
      name: '',
      movementType: '',
      caseType: '',
      comment: '',
      file: {
        type: Object,
        default: () => ({})
      },
    },
    componentKey: 0,
  }),
  methods: {
    async addWatch() {
      const uploadFile = document.getElementById("files").files[0]
      if (uploadFile.size <= 5242880) {
        this.input.file = uploadFile
        const path = this.input
        const watch = new Watches;
        await watch.addWatch(path.brand, path.family, path.name, path.movementType, path.caseType, path.comment, path.file);
        this.propFunction();
      }else{
        alert('Image size is to big')
      }
      this.componentKey += 1;
    },
  },
}
