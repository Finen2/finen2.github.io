export default {
  name: 'alertBar',
  props: {
    icon: {
      defulat: '',
      type: String,
    }
  },
  data: () => ({
    setIcon: '',
    icons: {
      primary: 'plus-circle',
      secundary: 'minus-circle',
      success: 'check-circle',
      danger: 'times-circle',
      warning: 'exclamation-circle',
      info: 'info-circle',
      light: 'sun',
      dark: 'moon',
    }
  }),
  methods: {
    alertBar(){
      const modal: any = document.getElementById('alertBar');
      const btn: any = document.getElementById("alertBarButton");
      const span: any = document.getElementsByClassName("alertBar__close")[0];
      btn.onclick = function() {
        modal.style.display = "flex";
      }
      span.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    },

    async selectIcon() {
      const selectIcon = await this.icon;

      switch(selectIcon) {
        case "primary":
          this.setIcon = this.icons.primary;
          break;
        case "secondary":
          this.setIcon = this.icons.secondary;
          break;
        case "success":
          this.setIcon = this.icons.success;
          break
        case "danger":
          this.setIcon = this.icons.danger;
          break;
        case "warning":
          this.setIcon = this.icons.warning;
          break;
        case "info":
          this.setIcon = this.icons.info;
          break;
        case "light":
          this.setIcon = this.icons.light;
          break;
        case "dark":
          this.setIcon = this.icons.dark;
          break;
        default:
          this.setIcon = this.icons.primary;
      }
    },
  },
  mounted() {
    this.alertBar();
    this.selectIcon();
  },
};
