
let body = document.getElementById("body");
let barreNavigation = document.getElementById("nav");
let lienNav = document.getElementsByClassName("lienNav");
let header = document.getElementById("header");
let divNavHeight = nav.clientHeight;
let divHeaderHeight =  header.clientHeight;

let coordonnees = document.getElementById('coordonnees')
let liens = coordonnees.getElementsByClassName('lien')
let arrayLien = Object.values(liens) ;
let arraylienNav = Object.values(lienNav) ;




document.addEventListener('scroll', function (e) {

   let scrollHeight = window.scrollY;
   let scrollPourcent = (divNavHeight - scrollHeight) / divNavHeight;

  // body.style.backgroundColor = "rgba(30, 30, 30)"
  // header.style.backgroundColor = "rgba(30, 30, 30)"
   // if (scrollHeight < divHeaderHeight - 500) {
   //    header.style.backgroundColor = "rgba(30, 30, 30)"
   // }

   // if (scrollHeight > divHeaderHeight - 500) {
   //    body.style.backgroundColor = "#fff"
   // }
})

arrayLien.forEach(lien => {
   
   lien.addEventListener('mouseover', function (e){

      lien.style.backgroundColor="#1e1e1e";
      a =  lien.childNodes[2].childNodes[0]
      a.style.color="white";
      lien.childNodes[0].childNodes[0].style.color="#f26522"
   })

   lien.addEventListener('mouseleave', function (e){

      lien.style.backgroundColor="white";
      a =  lien.childNodes[2].childNodes[0]
      a.style.color="#1e1e1e";
      lien.childNodes[0].childNodes[0].style.color="#fff"

   })
});

// arraylienNav.forEach(nav => {
//    nav.addEventListener('mouseover', function (e){
//       nav.parentNode.style.backgroundColor="#f26522"
//    })
// });
   





