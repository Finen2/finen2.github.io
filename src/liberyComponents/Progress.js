export default {
  name: 'progressLopping',
  props: {
    color:{
      default: '',
      type:String
    }
  },
  data: () => ({
    barClass: 'progressLopping__bar',
  }),
  methods: {
    async setColor() {
      const color = await this.color
      const baseClass = this.barClass
      if (color != '') {
        this.barClass = baseClass + ' progressLopping__bar--' + color
      }
    },
  },
  mounted(){
    this.setColor();
  }
}
