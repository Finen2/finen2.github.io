import AddWatch from './components/AddWatch.vue'
import List from './list/List.vue'
import IconButton from '../liberyComponents/IconButton.vue'
import Btn from '../liberyComponents/Btn.vue'
import Modal from '../liberyComponents/Modal.vue'
import Form from '../liberyComponents/Form.vue'
import {Account} from '../js/Account'

export default {
  name: 'logenIn',
  components: {
    List,
    IconButton,
    Btn,
    Modal,
    Form,
    AddWatch,
  },
  data: () => ({
    icon: 'user',
    modalHeader: '',
    userData: {},
    componentKey: 0,
  }),
  methods: {
    async showModal() {
      this.$refs.logModal.displayModal()
      this.userData = await Account.userInfo
      this.modalHeader = await this.userData.firstName + ' ' + this.userData.lastName
    },
    closeModal() {
      this.$refs.logModal.hideModal()
      this.forceRerender();
    },
    forceRerender() {
      this.componentKey += 1;
    },
    async logut() {
      const user = new Account;
      await user.logutUser();
    },
  },
  async mounted() {
    const user = new Account;
    user.checkLoginStatus();
  }
}
