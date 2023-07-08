import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc  } from "firebase/firestore";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiB1iKs4ICUFH3_yNcdxfK4ZBXh0N9e4g",
  authDomain: "jsi-final.firebaseapp.com",
  projectId: "jsi-final",
  storageBucket: "jsi-final.appspot.com",
  messagingSenderId: "554687380894",
  appId: "1:554687380894:web:0e1abca91730d6df1c6a8f",
  measurementId: "G-JG1P2S1M5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
const analytics = getAnalytics(app);

export let getData = async () => {
  let all = ``
  const querySnapshot = await getDocs(collection(db, "Trip-info"));
  querySnapshot.forEach((doc) => {
    all += `<li><a class="dropdown-item" href="#">${doc.id}</a></li>`

  });
  return all
}

export let getData2 = async (start_point) => {
  let all = ``
  const docRef = doc(db, "Trip-info", start_point);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data())

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    docSnap.data()['end'].forEach((end_point) => {
      all += `<li><a class="dropdown-item" href="#">${end_point.name}</a></li>`
    })
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return all
}
