import {Watches} from '../../js/Watches.js'
import ListItem from './ListItem.vue'

export default {
  name: 'list',
  props: {
    logedIn: {
      default: false,
      type: Boolean
    },
    propFunction: Function
  },
  components: {
    ListItem
  },
  data: () => ({
    watchList: []
  }),
  async mounted(){
    const watch = new Watches;
    if (this.logedIn === true) {
      this.watchList = await Watches.watchListUser
      await watch.getWatchesUser();
    }else{
      await watch.getWatches();
      this.watchList = await Watches.watchList
    }
  },
  methods: {
    propFromPropFunction(){
      this.propFunction();
    }
  }
}
