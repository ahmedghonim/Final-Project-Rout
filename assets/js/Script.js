let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let overlayClick = document.querySelector(".overlay-click");
let newBtn = document.querySelector(".new-btn");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    overlayClick.classList.toggle("active");
    newBtn.classList.toggle("active");
    // badget.classList.toggle("active");

    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-x");
    } else {
        btn.classList.replace("bx-x", "bx-menu");
    }
}

// Closing sidebar by click in body
function closeNav() {
    sidebar.classList.toggle("active");
    overlayClick.classList.toggle("active");
    newBtn.classList.toggle("active");
    // badget.classList.toggle("active");


    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-x");
    } else {
        btn.classList.replace("bx-x", "bx-menu");
    }
}
function openSearsh(){
 
    $(".menu-right").html(`
           
  <div class="d-flex x  w-100 search">
  <div class="searchInput">
     <input  class="w-100 pl-3" placeholder="SEARCH FOR INSPIRATION (HTML5, VR, RED, MINIMAL...)">
  </div>
  <div class="l-width">
     <a href="#" class="font-weight-lighte   text-dark ">SHOW FILTERS</a>
  </div>
  <div class=" bg-dark d-flex align-items-center justify-content-around">
     <i onclick="closeSearsh()" class="fas fa-times "></i>
  </div>
  </div>
    `
    )  
  
  $(".logo-header").css("display","none")
  
  }
  function closeSearsh(){
     
  $(".logo-header").css("display","flex")
  $(".menu-right ").html(`     
  <div class="menu-right  ">
     <div class="item bt-search pd-item">
         <i onclick="openSearsh()" class="fas fa-search"></i>
     </div>
     <div class="item login pd-item">
         <span>Are you a member?</span>
         <strong><a class="text-black login-text" href="/login">Register / log in</a></strong>
     </div>
     <div class="item has-tablet pd-item" id="bt-submit">
         <a href="/submit/" class="button">
             <span>SUBMIT YOUR SITE!</span>
         </a>
     </div>
  </div>
  `)
  
  }
   
  