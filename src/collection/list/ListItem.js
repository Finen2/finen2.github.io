import {Watches} from '../../js/Watches.js'
import IconButton from '../../liberyComponents/IconButton.vue'

export default {
  name: 'listItem',
  components: {
    IconButton
  },
  props: {
    watchList: {
      default: [],
      type: Array
    },
    propFunction: Function,
    logedIn: {
      default: false,
      type: Boolean
    },
  },
  data: () => ({
    icon: 'chevron-right'
  }),
  methods: {
    showInfo(id) {
      const elId = document.getElementById(id);
      if (elId.style.display === "none") {
        elId.style.display = "flex";
        this.icon = 'chevron-left'
      } else {
        elId.style.display = "none";
        this.icon = 'chevron-right'
      }
    },
    async eraseWatch(id) {
      const watch = new Watches;
      await watch.removeWatch(id);
      this.propFunction();
    },
  },
}
