$(function(){
	addSlide({
		Title:"SmartSlider", 
		Frame : 'Ce plugin jquery et css va vous permettre de faire des présentations très rapidement', 
		FrameStyle : 'none',
		TitleStyle:'red'
	});
	addSlide({
		Title:"Frames",
		Frame : ["On peut ajouter des Frames comme on veut","On peut choisir la couleur","Et l'alignement", "et même les deux à la fois"],
		FrameStyle : ["none","default_style","center", "right green"],
	});

	addSlide({
		Title:"Frames",
		Frame : ["On peut aussi diviser les frames verticalement",
		"Et y ajouter des puces","ok","ko"],
		FrameStyle : ['purple'],
		SlideStyle : 'vertical'
	});
	configure({Title:'slides', TitlesStyleDefault:'blue', FramesStyleDefault:'red center'});
});
