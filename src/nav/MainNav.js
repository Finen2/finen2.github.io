import {Account} from '../js/Account'

export default {
  name: 'MainNav',
  methods: {
    scrollNav() {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("nav").style.top = "0";
        } else {
          document.getElementById("nav").style.top = "-12vh" ;
        }
        prevScrollpos = currentScrollPos;
      }
    },
    async checkStatus() {
      const user = new Account;
      await user.checkLoginStatus();
    }
  },
  mounted() {
    this.scrollNav();
  }
}
