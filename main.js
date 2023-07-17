/// Other constiable
import { getData, getData2, getPopularTrip, signIn, signUp, fetchData, setData} from "./FB";
localStorage.setItem('page', "home");
if(localStorage.getItem('log') == undefined){
  localStorage.setItem('log','false')
}
export let render_home = async () => {
  document.querySelector("#content").innerHTML = `
    <div id="E_bookingAndCarousel">
      <div id="carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="carousel_1.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
              <img src="carousel_2.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
              <img src="carousel_3.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="carousel_4.png" class="d-block w-100" alt="...">
          </div>
          </div>
      </div>
      <div id="booking" class="overlay">
        <h2 class="title">Hãy tìm chuyến của bạn</h2>
        <div id="search">
          <div id="S_departure" class="box">
            <p id="L_departure" class="label">Điểm đi</p>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-toggle-1">
                  Vui lòng chọn điểm đi
                </button>
                <ul class="dropdown-menu" id="dropdown-menu-1">
                  ${await getData()}
                </ul>
              </div>
          </div>
          <div id="S_arrival" class="box">
              <p id="L_arrival" class="label">Điểm đến</p>
              <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-toggle-2">
                    Vui lòng chọn điểm đến
                  </button>
                  <ul class="dropdown-menu" id="dropdown-menu-2">
                  </ul>
                </div>
          </div>
          <img src="./img_sreach.png" alt="" id="img_sreach">
        </div>
      </div>
    </div>
    <div id="E_popular">
      ${await getPopularTrip()}
    </div>
  `;
  set_btnbooking()
  localStorage.setItem('page', "home");
  /// Setup dropdown
  // Get dropdown toggle buttons and dropdown menus
    const dropdownToggle1 = document.querySelector('#dropdown-toggle-1');
    const dropdownToggle2 = document.querySelector('#dropdown-toggle-2');
    const dropdownMenu1 = document.querySelector('#dropdown-menu-1');
    const dropdownMenu2 = document.querySelector('#dropdown-menu-2');


    dropdownMenu1.innerHTML = await getData();

  // constiables to store selected values
    const selectedOption1 = '';
    const selectedOption2 = '';
  // Toggle visibility of dropdown menu 1
    dropdownToggle1.addEventListener('click', function() {
        dropdownMenu1.classList.toggle('show');
        });

    // Toggle visibility of dropdown menu 2
    dropdownToggle2.addEventListener('click', function() {
        dropdownMenu2.classList.toggle('show');
        });

    // Close dropdown menus when clicking outside of them
    document.addEventListener('click', function(event) {
        let target = event.target;
        if (target !== dropdownToggle1 && !dropdownToggle1.contains(target)) {
            dropdownMenu1.classList.remove('show');
        }
        if (target !== dropdownToggle2 && !dropdownToggle2.contains(target)) {
            dropdownMenu2.classList.remove('show');
        }
        });

    // Handle click on dropdown menu 1 items
    dropdownMenu1.addEventListener('click', async function(event) {
        let target = event.target;
        if (target.classList.contains('dropdown-item')) {
            let selectedOption1 = target.textContent;
            localStorage.setItem("departure",selectedOption1);
            document.querySelector("#dropdown-toggle-1").textContent = selectedOption1;
            dropdownMenu2.innerHTML = await getData2(selectedOption1);
        }
        });

    // Handle click on dropdown menu 2 items
    dropdownMenu2.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('dropdown-item')) {
            let selectedOption2 = target.textContent;
            localStorage.setItem("arrival",selectedOption2);
            document.querySelector("#dropdown-toggle-2").textContent = selectedOption2;
        }
        });
    /// Bắt đầu tìm
    document.querySelector("#img_sreach").addEventListener('click',async () => {
      const result = await fetchData(document.querySelector("#dropdown-toggle-1").textContent, document.querySelector("#dropdown-toggle-2").textContent);
      document.querySelector("#E_popular").innerHTML = result;
      set_btnbooking()
    })
}
let set_btnbooking = () => {
  const parentElement  = document.querySelector("#E_popular");
  parentElement.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      // Get the closest div element relative to the clicked button
      const divElement = event.target.closest("div");
      // Check if a div element was found
      if (divElement) {
        // ... do something with the div element
        let gm = localStorage.getItem("gmail")
        let usern = divElement.querySelector(".name").textContent;
        let dep = divElement.querySelector(".dep").textContent;
        let arr = divElement.querySelector(".arr").textContent;
        let pri = divElement.querySelector(".pri").textContent;
        setData(gm,usern,dep,arr,pri)
        console.log(divElement);
      }
    }
  });
};
export let render_sign = async () => {
  document.querySelector("#content").innerHTML = `
  <div id="E_signIn">
      <div id="Option">
        <button type="button" id="UpOption" class="control" title="Đăng Kí">Đăng Kí</button>
        <button type="button" id="InOption" class="control" title="Đăng Nhập">Đăng Nhập</button>
      </div>
      <div id="Input">
        <p class="popu-label indi">Email</p>
        <input type="text" title="Email" id="Inp-email" class="Inp" placeholder="Email thật">
        <p class="popu-label indi">Số điện thoại</p>
        <input type="text" title="phoneNum" id="Inp-phoneNum" class="Inp" placeholder="Số điện thoại">
        <p class="popu-label indi">Mật khẩu</p>
        <input type="password" title="pass" id="Inp-password" class="Inp" placeholder="Password">
        <p class="popu-label indi">Xác nhận mật khẩu</p>
        <input type="password" title="passconf" id="Inp-passwordConf" class="Inp" placeholder="Xác nhận mật khẩu">
        <button title="conf" class="B_search btn btn-success" type="button" id="B_confirm" onclick="confirm">Xác nhận</button>
      </div>
    </div>`;
    document.querySelector("#B_confirm").addEventListener("click",()=>{
      let passconf = document.querySelector("#Inp-passwordConf").value;
      let pass = document.querySelector("#Inp-password").value;
      let email = document.querySelector("#Inp-email").value;
      if (passconf == pass){
        signUp(email,pass);
      }
    })
    localStorage.setItem('page', "Sign");
  /// Set up sign in và sign up
  document.querySelector("#InOption").addEventListener("click",() => {
    document.querySelector("#Input").innerHTML = `
    <p class="popu-label indi">Email</p>
    <input type="text" title="Email" id="Inp-email" class="Inp" placeholder="Email thật">
    <p class="popu-label indi">Số điện thoại</p>
    <input type="text" title="phoneNum" id="Inp-phoneNum" class="Inp" placeholder="Số điện thoại">
    <p class="popu-label indi">Mật khẩu</p>
    <input type="password" title="pass" id="Inp-password" class="Inp" placeholder="Password">
    <span id="error"></span>
    <button title="conf" class="B_search btn btn-success" type="button" id="B_confirm">Xác nhận</button>`
    document.querySelector("#InOption").style.color ="#702929";
    document.querySelector("#UpOption").style.color = "#008080";
    document.querySelector("#B_confirm").addEventListener("click",()=>{
      let pass = document.querySelector("#Inp-password").value;
      let email = document.querySelector("#Inp-email").value;
      signIn(email,pass);
    })
  })
  
    document.querySelector("#UpOption").addEventListener("click",() => {
      document.querySelector("#Input").innerHTML =`
      <p class="popu-label indi">Email</p>
      <input type="text" title="Email" id="Inp-email" class="Inp" placeholder="Email thật">
      <p class="popu-label indi">Số điện thoại</p>
      <input type="text" title="phoneNum" id="Inp-phoneNum" class="Inp" placeholder="Số điện thoại">
      <p class="popu-label indi">Mật khẩu</p>
      <input type="password" title="pass" id="Inp-password" class="Inp" placeholder="Password">
      <p class="popu-label indi">Xác nhận mật khẩu</p>
      <input type="password" title="passconf" id="Inp-passwordConf" class="Inp" placeholder="Xác nhận mật khẩu">
      <span id="error"></span>
      <button title="conf" class="B_search btn btn-success" type="button" id="B_confirm">Xác nhận</button>`
      document.querySelector("#UpOption").style.color ="#702929";
      document.querySelector("#InOption").style.color ="#008080";
      document.querySelector("#B_confirm").addEventListener("click",()=>{
        let passconf = document.querySelector("#Inp-passwordConf").value;
        let pass = document.querySelector("#Inp-password").value;
        let email = document.querySelector("#Inp-email").value;
        if (passconf == pass){
          signUp(email,pass);
        }
      })
    })
}

export let render_about = async () => {
  document.querySelector("#content").innerHTML = `
  <div id="E_aboutUs">
      <div id="info">
        <div id="title" class="box label">About Us</div>
        <p id="About_text">Là những người yêu thích du lịch đi đây đi đó, chúng tôi cảm thấy rằng việc di chuyển giữa
        các địa điểm là khoảng thời gian dài nhất trong một chuyến đi đôi khi còn là nhàm chán. Vì vậy, ta càng phải giữ sức 
        cho những cuộc vui chơi. Trang web này sẽ giới thiệu cho bạn những chuyến đi thoải mái nhất vừa tầm giá giúp bạn bớt
        phân vân việc chọn một hãng xe uy tín
        </p>
      </div>
      <img src="./About_demo.png" alt="" id="About_demo">
  </div>`;
  localStorage.setItem('page', "aboutUs" )
}

if(localStorage.getItem('page') == "home"){
  render_home();
}
else if(localStorage.getItem('page') == "sign"){
  render_sign();
}
else if(localStorage.getItem('page') == "aboutUs"){
  render_about();
}
else{
  render_home();
}
/// Handle SPA
document.querySelector("#B_home").addEventListener('click', async () => { // Nút trang chủ
  render_home()
})
document.querySelector("#B_signInUp").addEventListener('click',() => { // Nút đăng kí / đăng nhập
  render_sign()
})
document.querySelector("#B_aboutUs").addEventListener('click',() => { // Nút about us
  render_about();
})
