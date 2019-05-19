import firebase from 'firebase';
import db from './firebase/FirebaseInit'
import {Autentication} from './Autentication'
import router from '../router'

class Account {
  // Account
    registerUser(email, firstName, lastName, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        () => { //user
          db.collection("users").doc(firebase.auth().currentUser.uid).set({
            email: email,
            firstName: firstName,
            lastName: lastName,
            ownedWatches: [],
          })
          .catch((error) => {
              alert(error);
          });
        },
        (err) => {
          alert(err.message)
        }
      );
    }

    loginUser(email, password){
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          this.setUid()
          router.replace( '/profile' );
        },
        (err) => {
          alert(err.message)
        }
      );
    }

    logutUser(){
      firebase.auth().signOut().then(() => {
        alert('You have been logedout')
        this.removeUid()
        router.replace( '/collection' );
      },(error) => {
        alert(error)
      });
    }

    //generating an error
    checkLoginStatus(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          this.setUid();
          this.getUserInfo()
          router.replace( '/profile' );
        }else{
          // No user is signed in.
          this.removeUid()
          router.replace( '/collection' );
        }
      });
    }

    static userInfo = {};
    getUserInfo() {
      if (Autentication.instance().getToken === undefined) {
        this.checkLoginStatus()
      }
      db.collection("users").doc(Autentication.instance().getToken).get().then((doc) => {
      if (doc.exists === true) {
          Account.userInfo = doc.data()
      } else {
        // doc.data() will be undefined in this case
        alert("Could not find user");
      }
    }).catch((error) => {
        alert("Error getting user:", error);
    });
    }

    setUid() {
      Autentication.instance().getToken = firebase.auth().currentUser.uid
    }
    removeUid() {
      Autentication.instance().removeToken
    }

  }
export {Account};
