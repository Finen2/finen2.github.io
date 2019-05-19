import InfoBoxes from './info/InfoBoxes.vue'
import ImgBox from './info/ImgBox.vue'

export default {
  name: 'About',
  components: {
    InfoBoxes,
    ImgBox,
  },
  data: () => ({
  infoBoxesOne: [],
  infoBoxesTwo: [],
  }),
  methods: {
    setText() {
      this.infoBoxesOne = {
        boxOne: {title: 'BoxOne', text: '11'},
        boxTwo: {title: 'BoxTwo', text: '12'},
        boxThree: {title: 'BoxThree', text: '13'},
        boxFour: {title: 'BoxFour', text: '14'},
      }
      this.infoBoxesTwo = {
        boxOne: {title: 'BoxOne', text: '21'},
        boxTwo: {title: 'BoxTwo', text: '22'},
        boxThree: {title: 'BoxThree', text: '23'},
        boxFour: {title: 'BoxFour', text: '24'},
      }
    }
  },
  mounted() {
    this.setText();
  }
}
