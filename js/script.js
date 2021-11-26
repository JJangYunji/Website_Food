let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle(
    "fa-times"
  ); /*toggle은 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가함*/
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove(
    "fa-times"
  ); /*toggle은 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가함*/
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
