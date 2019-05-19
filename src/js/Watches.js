import db from './firebase/FirebaseInit'
import firebase from 'firebase';
import {Autentication} from './Autentication'
import {Account} from './Account'

class Watches {

  static watchList = [];
  getWatches(){
    const watchesArray = []
    db.collection("watches").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let watch = {
          id: doc.id,
          data: doc.data(),
          img: firebase.storage().ref().child('watches/' + doc.id).getDownloadURL().then((url) => {
            return url
          }).catch((error) => {
            return error
          })
        };
        watchesArray.push(watch)
      });
    });
    Watches.watchList = watchesArray
  }

  static watchListUser = [];
  getWatchesUser(){
    if (Autentication.instance().getToken === undefined) {
      new Account().checkLoginStatus();
    }
    const watchesArray = []
    db.collection("watches").where("owner", "==", Autentication.instance().getToken).get().then(snapshot => {
      snapshot.docs.forEach( (doc) => {
        let watch = {
          id: doc.id,
          data: doc.data(),
          img: firebase.storage().ref().child('watches/' + doc.id).getDownloadURL().then((url) => {
            return url
          }).catch((error) => {
            return error
          })
        };
        watchesArray.push(watch)
      });
    });
    Watches.watchListUser = watchesArray

   }

  addWatch(brand, family, name, movementType, caseType, comment, file) {
    db.collection("watches").add({
        brand: brand,
        caseDiameter: caseType,
        family: family,
        movmentType: movementType,
        name: name,
        owner: Autentication.instance().getToken,
        comment: comment
    })
    .then((docRef) => {
       db.collection("users").doc(Autentication.instance().getToken).update({
        ownedWatches: firebase.firestore.FieldValue.arrayUnion(docRef.id)
      });
      // Upload image to storage
      firebase.storage().ref('watches/' + docRef.id).put(file);
    })
    .catch((error) => {
        alert("Error adding document: ", error);
    });
  }

  removeWatch(id) {
    db.collection("watches").doc(id).delete().then(() => {
    }).catch((error) => {
        alert("Error removing document: ", error);
    });

  }

}
export {Watches};
