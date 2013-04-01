$(function(){
	addSlide({
		Title:"SmartSlider", 
		Frame : "C'est bien plus qu'un simple jquery et css.<br>La preuve : voilà ce que vous pouvez faire avec 40 petites lignes de jquery", 
		FrameStyle : 'none',
		TitleStyle:'red',
		SlideStyle : 'first'
	});
	addSlide({
		Title:"Frames",
		Frame : ["On peut ajouter des Frames comme on veut","On peut choisir la couleur de fond","Et l'alignement", "et même les deux à la fois"],
		FrameStyle : ["none","default_style","center", "right green"],
	});

	addSlide({
		Title:"Frames",
		Frame : ["On peut aussi diviser les frames verticalement",
		"Et y ajouter des puces{ligne1,ligne2} très facilement", "Ainsi qu'ajouter des frames horizontales après des verticales"],
		FrameStyle : ['purple',"default_style","clear purple center"],
		SlideStyle : 'vertical'
	});

	addSlide({
		Title:'Images',
		Frame : ["Les images sont faciles à intégrer","smiley.png" ],
		FrameStyle : ['right','left img'],
		SlideStyle : 'vertical'
	});

	addSlide({
		Title : 'Vidéos',
		Frame : ["http://www.youtube.com/watch?v=9bZkp7q19f0", "ainsi que les vidéos youtube"],
		FrameStyle : ['center youtube', 'center purple']

	});

	addSlide({
		Title : 'Personnalisation',
		TitleStyle : 'none',
		Frame : ["Et en plus, si vous connaissez l'html et le css, vous pourrez facilement faire vos propres thèmes","Cliquer <a href='export-bootstrap.html'>ici</a> pour découvrir le même slide avec un autre thème"],
		SlideStyle : 'classic'
	});

	
	/*addSlide({
		Frame : '<div class="row-fluid"><div class="span6">ok</div><div class="span6">ko</div></div>'
	});*/
	configure({
		Title:'slides',
		TitlesStyleDefault:'blue',
		FramesStyleDefault:'red center',
		FontSize : 'auto',
		Resolution : 'auto',
		Author : 'Thibault Friedrich',
		//Theme : 'theme-bootstrap'
	
	
	});
});
