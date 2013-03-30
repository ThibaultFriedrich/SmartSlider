$(function(){
	addSlide({
		Title:"SmartSlider", 
		Frame : 'Ce plugin jquery et css va vous permettre de faire des présentations très rapidement', 
		TitleColor:'red'
	});
	addSlide({
		Title:"Frames",
		Frame : ["On peut ajouter des Frames comme on veut","On peut choisir la couleur","Et l'alignement", "et même les deux à la fois"],
		FrameStyle : ["style_default","purple","center", "right green"]
	
	
	});
	addSlide({Title:"okk", TitleColor:'green'});
	configure({Title:'slides', TitlesColor:'blue'});
});
