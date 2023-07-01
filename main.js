import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


/// Setup dropdown

// Get dropdown toggle buttons and dropdown menus
var dropdownToggle1 = document.querySelector('#dropdown-toggle-1');
var dropdownToggle2 = document.querySelector('#dropdown-toggle-2');
var dropdownMenu1 = document.querySelector('#dropdown-menu-1');
var dropdownMenu2 = document.querySelector('#dropdown-menu-2');

// Variables to store selected values
var selectedOption1 = '';
var selectedOption2 = '';
if(dropdownToggle1 != null){
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
    var target = event.target;
    if (target !== dropdownToggle1 && !dropdownToggle1.contains(target)) {
      dropdownMenu1.classList.remove('show');
    }
    if (target !== dropdownToggle2 && !dropdownToggle2.contains(target)) {
      dropdownMenu2.classList.remove('show');
    }
  });

  // Handle click on dropdown menu 1 items
  dropdownMenu1.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('dropdown-item')) {
      selectedOption1 = target.textContent;
      localStorage.setItem("departure",selectedOption1);
      console.log('Selected option 1:', selectedOption1);
    }
  });

  // Handle click on dropdown menu 2 items
  dropdownMenu2.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('dropdown-item')) {
      selectedOption2 = target.textContent;
      localStorage.setItem("arrival",selectedOption2);
      console.log('Selected option 2:', selectedOption2);
    }
  });}

export let Home = () => {
  document.querySelector(".all").value = `<div id="E_navBar">
  <div id="P_home" class="all">
      <div id="E_navBar">
          <div id="navLeft">
              <img src="" alt="" id="img_logo">
              <button id="B_home" class="navText" onclick="Home()">Trang Chủ</button>
          </div>
          <div id="navRight">
              <button id="B_signIn/Up" class="navText" onclick="Sign()">Đăng kí / Đăng Nhập</button>
              <button id="B_aboutUs" class="navText" onclick="AboutUs()">Về chúng tôi</button>
          </div>
      </div>
      <div id="E_bookingAndCarousel">
          <div id="carousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="carousel_1.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="carousel_2.jpeg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="carousel_3.jpeg" class="d-block w-100" alt="...">
              </div>
              </div>
              <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Trang trước</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Trang tiếp</span> -->
              </button>
          </div>
          <div id="booking" class="overlay">
            <h2 class="title">Hãy tìm chuyến của bạn</h2>
            <div id="search">
              <div id="S_departure" class="box">
                <p id="L_departure" class="label">Điểm đi</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-toggle-1">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu" id="dropdown-menu-1">
                      <li><a class="dropdown-item" href="#">Action1</a></li>
                      <li><a class="dropdown-item" href="#">Action2</a></li>
                    </ul>
                  </div>
              </div>
              <div id="S_arrival" class="box">
                  <p id="L_arrival" class="label">Điểm đến</p>
                  <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown-toggle-2">
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu" id="dropdown-menu-2">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                      </ul>
                    </div>
              </div>
              <button id="B_search" onclick="">TÌM NGAY</button>
              </div>
        </div>
      </div>
      <div id="E_popular">
        <h2 class="title">Một số tuyến phổ biến</h2>
        <div class="popu_box">
          <img src="" alt="" class="popu_image">
          <div class="popu_info">
            <p class="popu-label"></p>
            <p class="popu-label"></p>
            <p class="popu-label"></p>
            <p class="popu-label"></p>
          </div>
        </div>
      </div>
      <div id="E_footer">
        <h2 id="footerTitle">THÔNG TIN LIÊN HỆ</h2>
        <div id="footerDown">
          <div id="footerLeft">
            <p class="popu-label contact">Số điện thoại: 0916134916</p>
            <p class="popu-label contact">Email liên hệ : vumhuy0901@gmail.com</p>
            <p class="popu-label contact">Facebook <a href="https://www.facebook.com/profile.php?id=100034575303112">Huy Vũ</a></p>
          </div>
          <div id="footerRight">
            <p class="popu-label credit">Nhóm: Mid travel</p>
            <p class="popu-label credit">Thành viên:</p>
            <ul id="members">
              <li class="popu-label credit">Vũ Mạnh Huy</li>
              <li class="popu-label credit">Nguyễn Lư Đức Nghĩa</li>
              <li class="popu-label credit">Nguyễn Long</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
  <script type="module" src="/main.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>`
}
export let Sign = () => {
  document.querySelector(".all").value = ``
}