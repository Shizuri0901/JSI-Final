/// Other constiable
import { getData } from "./FB";
const In = false;
localStorage.setItem('page', "home");
/// Handle SPA
document.querySelector("#B_home").addEventListener('click', async () => { // Nút trang chủ
  document.querySelector(".all").innerHTML = `
  <div id="P_home" class="copy">
    <div id="E_navBar">
        <div id="navLeft">
            <img src="./Logo.png" alt="" id="img_logo">
            <button id="B_home" class="navText">Trang Chủ</button>
        </div>
        <div id="navRight">
            <button id="B_signIn/Up" class="navText">Đăng kí / Đăng Nhập</button>
            <button id="B_aboutUs" class="navText">Về chúng tôi</button>
        </div>
    </div>
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
            <img src="./img_sreach.png" alt="" id="img_sreach">
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
      <h2 id="footerTitle">Thông Tin Liên Hệ</h2>
      <div id="footerDown">
        <div id="footerLeft">
          <p class="popu-label contact">Số điện thoại: 0916134916</p>
          <p class="popu-label contact">Email liên hệ : vumhuy0901@gmail.com</p>
          <p class="popu-label contact">Facebook <a href="https://www.facebook.com/profile.php?id=100034575303112">Huy Vũ</a></p>
        </div>
        <div id="footerRight">
          <p class="popu-label credit">Nhóm:</p>
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
<script type="module" src="./FB.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>`;
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
    dropdownMenu1.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('dropdown-item')) {
            selectedOption1 = target.textContent;
            localStorage.setItem("departure",selectedOption1);
            console.log('Selected option 1:', selectedOption1);
        }
        });

    // Handle click on dropdown menu 2 items
    dropdownMenu2.addEventListener('click', function(event) {
        let target = event.target;
        if (target.classList.contains('dropdown-item')) {
            selectedOption2 = target.textContent;
            localStorage.setItem("arrival",selectedOption2);
            console.log('Selected option 2:', selectedOption2);
        }
        });
    /// Bắt đầu tìm
    document.querySelector("#img_sreach").addEventListener('click',() => {

    })
})

document.querySelector("#B_signInUp").addEventListener('click',() => { // Nút đăng kí / đăng nhập
  document.querySelector(".all").innerHTML = `
  <div id="P_signIn" class="copy">
    <div id="E_navBar">
        <div id="navLeft">
            <img src="./Logo.png" alt="" id="img_logo">
            <button id="B_home" class="navText">Trang Chủ</button>
        </div>
        <div id="navRight">
            <button id="B_signIn/Up" class="navText">Đăng kí / Đăng Nhập</button>
            <button id="B_aboutUs" class="navText">Về chúng tôi</button>
        </div>
    </div>
    <div id="E_signIn">
      <div id="Option">
        <button type="button" id="UpOption" class="control" title="Up">Đăng Kí</button>
        <button type="button" id="InOption" class="control" title="In">Đăng Nhập</button>
      </div>
      <div id="Input">
        <p class="popu-label indi">Email</p>
        <input type="text" title="Email" id="Inp-email" class="Inp" placeholder="Email">
        <p class="popu-label indi">Số điện thoại</p>
        <input type="text" title="phoneNum" id="Inp-phoneNum" class="Inp" placeholder="Số điện thoại">
        <p class="popu-label indi">Mật khẩu</p>
        <input type="text" title="pass" id="Inp-password" class="Inp" placeholder="Password">
        <p class="popu-label indi">Xác nhận mật khẩu</p>
        <input type="text" title="passconf" id="Inp-passwordConf" class="Inp" placeholder="Xác nhận mật khẩu">
        <button title="conf" class="B_search" type="button" id="B_confirm" onclick="confirm">Xác nhận</button>
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
  <script src="./FB.js" type="module"></script>
  <script type="module" src="/main.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>`;
  localStorage.setItem('page', "Sign");
  /// Set up sign in và sign up
  if(In == false){
    document.querySelector("#InOption").addEventListener("click",() => {
      document.querySelector("#Input").replace(`<p class="popu-label indi">Xác nhận mật khẩu</p>
        <input type="text" title="passconf" id="Inp-passwordConf" class="Inp" placeholder="Xác nhận mật khẩu">`,``)})
      In = true;
      document.querySelector("#InOption").setAttribute("color","#FF6F61")
    }
  else if(In == true){
    document.querySelector("OnOption").addEventListener("click",() => {
      document.querySelector("#Input").replace(`<p class="popu-label indi">Email</p>
      <input type="text" title="Email" id="Inp-email" class="Inp" placeholder="Email">
      <p class="popu-label indi">Số điện thoại</p>
      <input type="text" title="phoneNum" id="Inp-phoneNum" class="Inp" placeholder="Số điện thoại">
      <p class="popu-label indi">Mật khẩu</p>
      <input type="text" title="pass" id="Inp-password" class="Inp" placeholder="Password">`,
      `<p class="popu-label indi">Email</p>
      <input type="text" title="Email" id="Inp-email" class="Inp" placeholder="Email">
      <p class="popu-label indi">Số điện thoại</p>
      <input type="text" title="phoneNum" id="Inp-phoneNum" class="Inp" placeholder="Số điện thoại">
      <p class="popu-label indi">Mật khẩu</p>
      <input type="text" title="pass" id="Inp-password" class="Inp" placeholder="Password">
      <p class="popu-label indi">Xác nhận mật khẩu</p>
      <input type="text" title="passconf" id="Inp-passwordConf" class="Inp" placeholder="Xác nhận mật khẩu">
      `)
    })
  }
})

document.querySelector("#B_aboutUs").addEventListener('click',() => { // Nút about us
  document.querySelector(".all").innerHTML = `
  <div id="P_signIn" class="copy">
    <div id="E_navBar">
      <div id="navLeft">
          <img src="./Logo.png" alt="" id="img_logo">
          <button id="B_home" class="navText">Trang Chủ</button>
      </div>
      <div id="navRight">
          <button id="B_signIn/Up" class="navText">Đăng kí / Đăng Nhập</button>
          <button id="B_aboutUs" class="navText">Về chúng tôi</button>
      </div>
    </div>
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
  </div>
  <div id="E_footer">
    <h2 id="footerTitle">Thông Tin Liên Hệ</h2>
    <div id="footerDown">
      <div id="footerLeft">
        <p class="popu-label contact">Số điện thoại: 0916134916</p>
        <p class="popu-label contact">Email liên hệ : vumhuy0901@gmail.com</p>
        <p class="popu-label contact">Facebook <a href="https://www.facebook.com/profile.php?id=100034575303112">Huy Vũ</a></p>
      </div>
      <div id="footerRight">
        <p class="popu-label credit">Nhóm:</p>
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
  <script src="./FB.js" type="module"></script>
  <script type="module" src="/main.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>`;
  localStorage.setItem('page', "aboutUs" )
})