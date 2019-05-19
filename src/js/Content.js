import db from './firebase/FirebaseInit'
// import firebase from 'firebase';
// import {Autentication} from './Autentication'
// import {Account} from './Account'

class Content {
  // getImage(path) {
  //   firebase.storage().ref().child(path).getDownloadURL().then((url) => {
  //     return url
  //   }).catch((error) => {
  //     return error
  //   })
  // }

  static textArray = []
  getText(lang){
    const textArray = []
    db.collection("language").doc(lang).get().then((doc) => {
        if (doc.exists) {
          let text = {
            id: doc.id,
            data: doc.data()
          }
          textArray.push(text)
        } else {
          let text = {
            id: 'missing id',
            data: 'missing data'
          }
          textArray.push(text)
        }
    }).catch((error) => {
        alert("Error getting document:", error);
    });
    Content.textArray = textArray
    // console.log(Content.textArray);
  }
}
export {Content};

//could make an object that corresponds with a name that makes it posible to have multibe images
