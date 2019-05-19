class Autentication {
  //Authentication authID
  static _instance;
  autentication;
  static instance(){
    if (!Autentication._instance) {
         Autentication._instance = new Autentication;
     }
     return this;
  }

  getToken(){
    return this.autentication;
  }
  removeToken(){
    return this.autentication = null;
  }

}
export {Autentication};
