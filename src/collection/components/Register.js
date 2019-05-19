import {Account} from '../../js/Account.js'
import Btn from '../../liberyComponents/Btn.vue'
import Form from '../../liberyComponents/Form.vue'
import InputFiled from '../../liberyComponents/InputFiled.vue'

export default {
  name: 'register',
  components: {
    Btn,
    Form,
    InputFiled,
  },
  data: () => ({
    input: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        conPassword: '',
    },
  }),
  methods: {
    async register() {
      if( this.input.password === this.input.conPassword){
        if (this.input.email !== '') {
          const testObj = new Account;
          await testObj.registerUser(this.input.email, this.input.firstName, this.input.lastName, this.input.password);
        }
      }else{
        alert('passowrds are not the same')
      }
    },
  }
}
