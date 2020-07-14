const sr = ScrollReveal();

sr.reveal('h1', {
	origin : 'top',
	distance:'100px',
	duration : 2000,
	reset:true,
})

sr.reveal('header p', {
	origin : 'bottom',
	distance:'30px',
	duration : 2000,
	scale: 0.5,
	reset:true,
	delay : 500,
})

sr.reveal('#photo', {
	origin : 'right',
	distance:'60px',
	duration : 2000,
	delay : 500,
	reset:true,
});
sr.reveal('#coordonnees', {
	origin : 'left',
	distance:'40px',
	duration : 2000,
	delay : 500,
	reset:true,
});

sr.reveal('#aboutMe', {
	origin : 'left',
	distance:'40px',
	duration : 2000,
	delay : 500,
	reset:true,
});


sr.reveal('.coordonnee p', {
	origin : 'left',
	distance:'30px',
	duration : 2000,
	delay : 500,
	reset:true,
});




sr.reveal('#titrePortfolio', {
	origin : 'top',
	distance:'40px',
	duration : 1000,
	
	reset:true,
	delay:500,
});



sr.reveal('.projet', {
	origin : 'top',
	distance:'2px',
	duration : 1000,
	scale: 0.5,
	reset:true,
	
},500);




sr.reveal('#competences ', {
	origin : 'top',
	distance:'30px',
	duration : 1000,
	
	reset:true,
	delay:600,
});




