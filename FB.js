import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc  } from "firebase/firestore";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
const auth = getAuth(app);
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

  if (docSnap.exists()) {
    docSnap.data()['end'].forEach((end_point) => {
      all += `<li><a class="dropdown-item" href="#">${end_point.name}</a></li>`
    })
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return all
}
// 3 chuyen pho bien
export let getPopularTrip = async (start_point="Thành phố Hồ Chí Minh") => {
  let all = `<h2 class="title">Một số tuyến phổ biến</h2>`;

  const docRef = doc(db, "Trip-info", start_point);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    docSnap.data()['end'].forEach((end_point) => {
      all += `<div class="popu_box">
        <img src="${end_point['vehicle-image']}" alt="" class="popu_image">
        <div class="popu_info">
          <p class="popu-label">Điểm đi: ${start_point}</p>
          <p class="popu-label">Điểm đến: ${end_point.name}</p>
          <p class="popu-label">Giá tiền: ${end_point.price}</p>
          <p class="popu-label">Thời gian di chuyển: ${end_point.time}</p>
        </div>
      </div>`;
    });
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  return all;
};

const log = false;
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    const user = userCredential.user;
    console.log("User signed up successfully:", user.uid);
    // Additional actions after successful sign up
  } catch (error) {
    console.error("Sign up failed:", error.message);
  }
}
export let Log_out = () => {
  signOut(auth).then(() => {
    console.log("Sign Out success");
    document.querySelector("#navRight").innerHTML = `
      <button id="B_signInUp" class="navText">Đăng kí / Đăng Nhập</button>
      <button id="B_aboutUs" class="navText">Về chúng tôi</button>`
    log = false;
  }).catch((error) => {
    console.log("Sign Out failed", error.message);
  });
}
export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in successfully:", user.uid);
    document.querySelector("#navRight").innerHTML = `        
      <img scr="./blank_logo.png" alt="user">
      <div class="text-box">
        <button title="Log_out" id="logOut">Log Out</button>
      </div>
      <button id="B_aboutUs" class="navText">Về chúng tôi</button>`
      log = true;
    document.querySelector("logOut").addEventListener("click", () => {
      signOut()
    })
  } catch (error) {
    console.error("Sign in failed:", error.message);
  }
}

export let fetchData = async (a, b) => {
  const tripInfoRef = doc(db, "Trip-info", a);
  const docSnap = await getDoc(tripInfoRef);
  let result = [];

  if (docSnap.exists()) {
    const endArray = docSnap.data().end || [];
    console.log(endArray);
    endArray.forEach((item) => {
      if (item.name === b) {
        result.push(item);
      }
    });
  }
  else{
    console.log("No such document!");
  }
  console.log(result);
  let retu =  ``
  result.forEach((item) => {
    retu += `<div class="popu_box">
    <img src="${item['vehicle-image']}" alt="" class="popu_image">
    <div class="popu_info">
    <p class="popu-label">Điểm đi: ${a}</p>
    <p class="popu-label">Điểm đến: ${item.name}</p>
    <p class="popu-label">Giá tiền: ${item.price}</p>
    <p class="popu-label">Thời gian di chuyển: ${item.time}</p>
    </div>
    </div>`;
  })
  return retu;
};