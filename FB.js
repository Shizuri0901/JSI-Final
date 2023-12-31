import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc, setDoc, where, query, collectionGroup } from "firebase/firestore";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { render_sign, render_home, render_about } from "/main";
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

export let setData = async (gmail,dep,arr,pri,vehicle_image,tm,st_en) => {
  let prev = []
  prev.push({
    departure: dep,
    arrival: arr,
    price: pri,
    time:tm,
    vehicle_image: vehicle_image,
    start: st_en
  })
  const docRef = doc(db, "user", gmail);
  const docSnap = await getDoc(docRef);
  console.log(prev);
  if (docSnap.exists()) {
    docSnap.data()['history'].forEach((item) => {
      prev.push(item)
      console.log(prev);
    })
  } 
  await setDoc(doc(db, "user", gmail), {
    history: prev
  });
  }
;

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
    let i = 0;
    docSnap.data()['end'].forEach((end_point) => {
      if(localStorage.getItem('log') == 'false'){
        all += `<div class="popu_box">
        <img src="${end_point['vehicle-image']}" alt="" class="popu_image">
        <div class="popu_info">
          <p class="popu-label dep">Điểm đi: ${start_point}</p>
          <p class="popu-label arr">Điểm đến: ${end_point.name}</p>
          <p class="popu-label pri">Giá tiền: ${end_point.price}</p>
          <p class="popu-label time">Thời gian di chuyển: ${end_point.time}</p>
          <p class="popu-label start">Thời gian bắt đầu và kết thúc: ${end_point.start_end}</p>
        </div>
      </div>`
      }
      else {
        i += 1;
        all += `<div class="popu_box">
          <img src="${end_point['vehicle-image']}" alt="" class="popu_image">
          <div class="popu_info">
            <p class="popu-label dep">Điểm đi: ${start_point}</p>
            <p class="popu-label arr">Điểm đến: ${end_point.name}</p>
            <p class="popu-label pri">Giá tiền: ${end_point.price}</p>
            <p class="popu-label time">Thời gian di chuyển: ${end_point.time}</p>
            <p class="popu-label start">Thời gian bắt đầu và kết thúc: ${end_point.start_end}</p>
          </div>
          <button id="btn_${i}" class="btn btn-info" type="button">Đặt xe</button>
        </div>`;   
    }
    });
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return all;
};

export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email, password);
    const user = userCredential.user;
    console.log("User signed up successfully:", user.uid);
    localStorage.setItem("gmail", email);
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
      localStorage.setItem("log",'false')
    render_sign()
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
      <img src="./blank_logo.png" alt="user" id="us">
      <div class="text-box">
        <button title="Log_out" id="logOut" type="button" class="btn btn-danger nav-b">Đăng xuất</button>
        <button title="history" id="history" type="button" class="btn btn-success nav-b">Lịch sử đặt xe</button>
        <button id="B_aboutUs" class="navText">Về chúng tôi</button>
      </div>`
      localStorage.setItem("log",'true')
      localStorage.setItem("gmail",email)
      render_home()
    document.querySelector("#history").addEventListener("click",() => {
      find_history(email)
    })
    document.querySelector("#B_aboutUs").addEventListener("click", () => {
      render_about()
    })
    document.querySelector("#logOut").addEventListener("click", () => {
      Log_out()
      localStorage.setItem('log','false')
      document.querySelector("#navRight").innerHTML =  `
        <button id="B_signInUp" class="navText">Đăng kí / Đăng Nhập</button>
        <button id="B_aboutUs" class="navText">Về chúng tôi</button>
      `
      render_sign();
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
    endArray.forEach((item) => {
      if (item.name === b) {
        result.push(item);
      }
    });
  }
  else{
    console.log("No such document!");
  }
  let retu =  ``
  let i = 0;
  result.forEach((item) => {
    i += 1
    if(localStorage.getItem("log") == 'false'){
      retu += `<div class="popu_box">
      <img src="${item['vehicle-image']}" alt="" class="popu_image">
      <div class="popu_info">
      <p class="popu-label dep">Điểm đi: ${a}</p>
      <p class="popu-label arr">Điểm đến: ${item.name}</p>
      <p class="popu-label pri">Giá tiền: ${item.price}</p>
      <p class="popu-label time">Thời gian di chuyển: ${item.time}</p>
      <p class="popu-label start">Thời gian bắt đầu và kết thúc: ${item.start_end}</p>
      </div>
      </div>`}
    else{
      retu += `<div class="popu_box">
      <img src="${item['vehicle-image']}" alt="" class="popu_image">
      <div class="popu_info">
        <p class="popu-label dep">Điểm đi: ${a}</p>
        <p class="popu-label arr">Điểm đến: ${item.name}</p>
        <p class="popu-label pri">Giá tiền: ${item.price}</p>
        <p class="popu-label time">Thời gian di chuyển: ${item.time}</p>
        <p class="popu-label start">Thời gian bắt đầu và kết thúc: ${item.start_end}</p>
      </div>
      <button id="btn_${i}" class="btn btn-info" type="button">Đặt xe</button>
      </div>`;
    }
  })
  return retu;
};
export let find_history = async (email) => {
  const querySnapshot = await getDocs(collection(db, "user"));
  querySnapshot.forEach(async (doc) => {
    if(doc.id == email){
      render_history(doc.id)
    }
  });
}
export let render_history = async (gmail) => {
  let all = `<h2 class="title">Lịch sử đặt xe</h2>`;
  const userDocRef = doc(db, "user", gmail);
  const userDocSnap = await getDoc(userDocRef);
  if (userDocSnap.exists()) {
    const historyArray = userDocSnap.data().history || [];
    historyArray.forEach((x) => {
      all += `<div class="popu_box" style="margin-left: 125px;">
        <img src="${x.vehicle_image}" alt="" class="popu_image">
        <div class="popu_info">
          <div id="important">
            <p class="popu-label dep">${x.departure}</p>
            <p class="popu-label arr">${x.arrival}</p>
          </div>
          <div id="addition">
            <p class="popu-label pri">${x.price}</p>
            <p class="popu-label time">${x.time}</p>
            <p class="popu-label start">${x.start}</p>
          </div>
        </div>
      </div>`;
    });

    document.querySelector("#content").innerHTML = all;
  } else {
    console.log("No such account or history!");
  }
};
