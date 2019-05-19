import IconButton from './IconButton.vue';

export default {
  name: 'modalSideIcon',
  components: {
    IconButton,
  },
  props: {
    id: {
      default: '',
      type: String,
    },
    color: {
      default: '',
      type: String,
    },
    btnColor: {
      default: '',
      type: String,
    },
    header: {
      default: '',
      type: String,
    },
    icon: {
      default: '',
      type: String,
    },
    btnText: {
      default: '',
      type: String,
    },
    btnSize: {
      default: '',
      type: String,
    },
    additionalCloseFunction: Function
  },
  data: () => ({
    btnId: '',
    iconId: '',
    headClass: 'modalSide__content__head'
  }),
  methods: {

    async setId() {
      const id = await this.id;
      this.btnId = id + 'Btn';
      this.iconId = id + 'icon';
    },

    async setColor() {
      const color = await this.color
      // const btnColor = await this.btnColor
      const headClass = await this.headClass
      if (color != '') {
        const baseClass = headClass + ' modalSide__content__head--';
        this.headClass = baseClass + color;
      }
      // if (btnColor == ''){
      //   this.btnColor = color
      // }
    },
    async displayModal() {
      const element = document.getElementById(await this.id);
      if (element !== null) {
        element.style.display = 'block';
      }
    },
    async hideModal() {
      const element = document.getElementById(await this.id);
      if (element !== null) {
        element.style.display = 'none';
      }
      this.additionalCloseFunction();
    },
  },
  mounted() {
    this.setColor();
    this.setId();
  },
};
