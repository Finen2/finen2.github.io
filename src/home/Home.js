import Foot from './foot/Foot.vue';
import HeadInfo from './headInfo/HeadInfo.vue';
import Watch from './watch/Watch.vue';

export default {
  name: 'Home',
  components: {
    Foot,
    HeadInfo,
    Watch,
  },
  data: () => ({
    backgroundImage: ''
  }),
}
