import Login from './components/Login.vue'
import Register from './components/Register.vue'

import List from './list/List.vue'
import IconButton from '../liberyComponents/IconButton.vue'
import Btn from '../liberyComponents/Btn.vue'
import Card from '../liberyComponents/Card.vue'
import Modal from '../liberyComponents/Modal.vue'
import Form from '../liberyComponents/Form.vue'

export default {
  name: 'logedOut',
  components: {
    List,
    IconButton,
    Btn,
    Card,
    Modal,
    Form,
    Login,
    Register
  },
  data: () => ({
    icon: 'sign-in-alt',
    modalHeader: 'Login',
    componentKey: 0,
  }),
  methods: {
    initalDisplay() {
      document.getElementById("multiRegister").style.display = "none";
      this.modalHeader = 'Login';
      document.getElementById("multiLogin").style.display = "block";
    },
    forceRerender() {
      this.componentKey += 1;
    },
    showRegister() {
      document.getElementById("multiLogin").style.display = "none";
      this.modalHeader = 'Register User';
      document.getElementById("multiRegister").style.display = "block";
    },
    showModal() {
      this.$refs.logModal.displayModal()
    },
  },
}
