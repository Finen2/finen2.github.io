export default {
  name: 'btn',
  props: {
    icon: {
      default: '',
      type: String,
    },
    color: {
      default: '',
      type: String,
    },
    btnState: {
      default: '',
      type: String,
    },
    btnSize: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    btnClass: 'flex-row-center btn'
  }),
  methods: {
    async setClass() {
      const color = await this.color
      const btnState = await this.btnState
      const btnSize = await this.btnSize
      if (color != '') {
        const btnClass = await this.btnClass
        const baseClass = btnClass + ' btn--';
        this.btnClass = baseClass + color;
      }
      if (btnState != '') {
        const btnClass = await this.btnClass
        const baseClass = btnClass + ' btn--';
        this.btnClass = baseClass + color;
      }
      if (btnSize != '') {
        const btnClass = await this.btnClass
        const baseClass = btnClass + ' btn--';
        this.btnClass = baseClass + color;
      }
    }
  },
  mounted() {
    this.setClass();
  }
}
