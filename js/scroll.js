const sr = ScrollReveal();
let loader = document.getElementById("loader-wrapper");
let loaderChild = loader.getElementsByClassName('loader-section')

// const sr = ScrollReveal();


var myFunc = function() {
//    loader.style.display="none";
   body.classList.add('loaded');
   sr.reveal('h1', {
      origin : 'top',
      distance:'100px',
      duration : 2000,
      reset:false,
     // delay : 3100,
      
   })
 }

window.onload = function() {
   setTimeout(myFunc, 3000);
 }

sr.reveal('header p', {
	origin : 'bottom',
	distance:'30px',
	duration : 2000,
	scale: 0.5,
	reset:false,
	delay : 500,
})

sr.reveal('#photo', {
	origin : 'right',
	distance:'60px',
	duration : 2000,
	delay : 500,
	reset:false,
});
sr.reveal('#coordonnees', {
	origin : 'left',
	distance:'40px',
	duration : 2000,
	delay : 500,
	reset:false,
});

sr.reveal('#aboutMe', {
	origin : 'left',
	distance:'40px',
	duration : 2000,
	delay : 500,
	reset:false,
});


sr.reveal('.coordonnee p', {
	origin : 'left',
	distance:'30px',
	duration : 2000,
	delay : 500,
	reset:false,
});




sr.reveal('#titrePortfolio', {
	origin : 'top',
	distance:'40px',
	duration : 1000,
	
	reset:false,
	delay:500,
});



sr.reveal('.projet', {
	origin : 'top',
	distance:'2px',
	duration : 1000,
	scale: 0.5,
	reset:false,
	
},500);




sr.reveal('#competences ', {
	origin : 'top',
	distance:'30px',
	duration : 1000,
	
	reset:false,
	delay:600,
});




