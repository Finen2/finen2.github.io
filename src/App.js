import MainNav from '@/nav/MainNav.vue';
import {Content} from './js/Content'

export default {
  name: 'App',
  components: {
    MainNav,
  },
  data: () => ({
    language: 'english'
  }),
  mounted() {
    const content = new Content;
    content.getText(this.language)
  }
}
