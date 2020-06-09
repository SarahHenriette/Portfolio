let nav = document.getElementById("nav");
let li = nav.getElementsByClassName("li");
let a = nav.getElementsByClassName("a");
let body = document.getElementById("body");
let bc = body.getElementsByClassName("bc");
let headerHeight = nav.clientHeight;
let divHeader = bc[0].clientHeight;
let divInfos = bc[1].clientHeight;
let divPortfolio = bc[2].clientHeight;
let divPortfolioGrafikart = bc[3].clientHeight;

let coordonnees = document.getElementById("coordonnees");
let contenuQualites = coordonnees.getElementsByClassName("contenuQualites");
let reseau = coordonnees.getElementsByClassName("reseau");

console.log(reseau)
let qualites = document.getElementById("qualites");
let competences = document.getElementById("competences");
// let buttonInfos = document.getElementById("buttonInfos");
// let buttonCompetences = document.getElementById("buttonCompétences");
let infosCoordonnees = document.getElementById("infosCoordonnees");



let photo = document.getElementById("photo");




var lien = document.querySelectorAll(".lienCoordonnee")

for(var i =0; i< lien.length; i++){
 lien[i].addEventListener('click', function(e){
    e.preventDefault()

       var liInfos = this.parentNode
    var div = this.parentNode.parentNode.parentNode

    if(liInfos.classList.contains('active')){
        return false
    }

    div.querySelector('.buttonInfosCompetences .active').classList.remove('active')


    liInfos.classList.add('active')



    div.querySelector('.contentInfos.active').classList.remove('active')


    div.querySelector(this.getAttribute('href')).classList.add('active')



 })



}




document.addEventListener('scroll', function(e){

    let scrollHeight = window.scrollY;
    let scrollPourcent = (headerHeight-scrollHeight)/headerHeight;
 
nav.style.backgroundColor= " #1e1e1e";
body.style.backgroundColor= "rgba(30, 30, 30)"



  if(scrollHeight > divHeader-600){
     body.style.backgroundColor= "#fff"

     for(i=0 ; i<contenuQualites.length; i++){
     
}
  
     // qualites.style.animationName="colorQualites"
     // qualites.style.animationDuration="3s"
     // qualites.style.fontSize="18px"
     // qualites.style.marginLeft="10px"


  }
  

 if(scrollHeight > (divHeader + divInfos)-600){
   //   body.style.backgroundColor= "#ee9446";
   
   // body.style.backgroundColor= "rgb(236, 236, 236)";

  }


 if(scrollHeight > (divHeader + divInfos )+200){
    // body.style.backgroundColor= "rgb(236, 236, 236)";
   // body.style.backgroundColor= "rgb(236, 236, 236)";
    

  }

  
 
     if(scrollHeight > 10 && scrollHeight < divHeader ){
    	nav.style.backgroundColor= "rgba(30, 30, 30, 0.4)";
    	  a[0].style.color="#ffffffc2";
		    a[1].style.color="#ffffffc2";

    }


   
})


