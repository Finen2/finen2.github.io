import firebase from 'firebase'
import 'firebase/firestore'
import FirebaseConfig from './FirebaseConfig'

const firebaseInit = firebase.initializeApp(FirebaseConfig)
const db = firebaseInit.firestore()
export default db
