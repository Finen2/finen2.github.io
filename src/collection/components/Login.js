import {Account} from '../../js/Account.js'
import Btn from '../../liberyComponents/Btn.vue'
import Form from '../../liberyComponents/Form.vue'
import InputFiled from '../../liberyComponents/InputFiled.vue'

export default {
  name: 'login',
  components: {
    Btn,
    Form,
    InputFiled,
  },
  props: {
    showRegister: Function
  },
  data: () => ({
    input: {
        email: '',
        password: '',
    },
  }),
  methods: {
    async login() {
      if (this.input.email !== '' && this.input.password !== '') {
        const user = new Account;
        await user.loginUser(this.input.email, this.input.password);
      }
    },
    showRegisterChild() {
      this.showRegister();
    },
  }
}
