import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
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

export let getData2 = async () => {
  let all = ``
  const snap = await getDoc(doc(db, "Trip-info","An Giang"))
  console.log(snap);
  // const querySnapshot = await getDocs(collection(db, "Trip-info","An Giang"));
  // console.log(querySnapshot);
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  //   doc.data()['end'].forEach((d) => {
    
  //     all += `<li><a class="dropdown-item" href="#">${d.name}</a></li>`
      
  //   })
  // })
  // return all
     
}



const querySnapshot = await getDocs(collection(db, "Trip-info"));
querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    // let dropdownMenu1 = document.getElementById('dropdown-menu-1');

    // doc.data()['end'].forEach((d) => {
      
      
    // })
});
