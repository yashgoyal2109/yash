const img = document.querySelector(".btn1");
const sidebar = document.querySelector(".sidebar")
const date = document.querySelector(".dateandtime")
const wish = document.querySelector(".wish")
const logo = document.querySelector(".logo")
const moon = document.querySelector(".moon")
const main = document.querySelector(".main")
const create = document.querySelector(".create")
const drop = document.querySelector(".dropdown")
const username = document.querySelector(".username")
const logout = document.querySelector("#log-out")
const uptext=document.querySelector("#ongoing")


uptext.innerHTML=localStorage.getItem("totaled");

username.textContent = localStorage.getItem("user")

logout.addEventListener("click", () => {
  localStorage.clear();
})



img.addEventListener("click", () => {
  main.classList.toggle("main-full")
  sidebar.classList.toggle("close")
});


create.addEventListener("click", (e) => {
  e.preventDefault();
  drop.classList.toggle("drops").style.display = "flex";
})



moon.onclick = function () {
  document.body.classList.toggle("change")
  if (document.body.classList.contains("change")) {
    moon.src = "assets pro/moon.svg"
    logo.src = "assets pro/taskopia-high-resolution-logo (2).png"
  }
  else {
    moon.src = "assets pro/sun.svg"
    logo.src = "assets pro/taskopia-high-resolution-logo (1).png"
  }
}



const currentDate = new Date();
console.log(currentDate)

const hour = currentDate.getHours()

console.log(hour)

if (hour > 0 && hour < 12) {
  wish.innerText = "Good morning"
}
if (hour > 12 && hour < 19) {
  wish.innerText = "Good afternoon"
}
else {
  wish.innerText = "Good evening"
}


const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);


date.textContent = formattedDate;



const swiper = new Swiper(".swiper-slider", {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: false,
  loop: true,
  mousewheel: false,
  keyboard: {
    enabled: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },



  breakpoints: {
    940: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
