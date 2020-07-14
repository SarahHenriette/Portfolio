
let body = document.getElementById("body");
let barreNavigation = document.getElementById("nav");
let header = document.getElementById("header");
let divNavHeight = nav.clientHeight;
let divHeaderHeight =  header.clientHeight;


document.addEventListener('scroll', function (e) {

   let scrollHeight = window.scrollY;
   let scrollPourcent = (divNavHeight - scrollHeight) / divNavHeight;

   body.style.backgroundColor = "rgba(30, 30, 30)"

   if (scrollHeight < divHeaderHeight - 600) {
      body.style.backgroundColor = "rgba(30, 30, 30)"
   }

   if (scrollHeight > divHeaderHeight - 600) {
      body.style.backgroundColor = "#fff"
   }

})


