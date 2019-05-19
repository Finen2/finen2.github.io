export default {
  name: 'iconButton',
  props: {
    icon: {
      default: '',
      type: String,
    },
    color: {
      default: '',
      type: String,
    },
    iconBtnState: {
      default: '',
      type: String,
    },
    iconBtnSize: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    iconBtnClass: 'flex-row-center iconButton'
  }),
  methods: {
    async setClass() {
      const color = await this.color
      const iconBtnState = await this.iconBtnState
      const iconBtnSize = await this.iconBtnSize
      if (color != '') {
        const iconBtnClass = await this.iconBtnClass
        const baseClass = iconBtnClass + ' iconButton--';
        this.iconBtnClass = baseClass + color;
      }
      if (iconBtnState != '') {
        const iconBtnClass = await this.iconBtnClass
        const baseClass = iconBtnClass + ' iconButton--';
        this.iconBtnClass = baseClass + color;
      }
      if (iconBtnSize != '') {
        const iconBtnClass = await this.iconBtnClass
        const baseClass = iconBtnClass + ' iconButton--';
        this.iconBtnClass = baseClass + color;
      }
    }
  },
  mounted() {
    this.setClass();
  }
}
