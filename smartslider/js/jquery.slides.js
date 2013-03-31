var last_goto;

var formateClassName = function(className){
	var classNames = className.split(" ");
	var r = "";
	for(var i = 0 ; i < classNames.length ; i++){
		r += " ." ;
		r += classNames[i];
	}
	return r;
};

var addSlide = function(params){
	if(maxIdSlide == 0){
		idSlide = 1;
	}

	var params = $.extend({
		Title : null,
		TitleStyle : 'title_default_style',
		Frame : null,
		FrameStyle : 'default_style', 
		SlideStyle : 'classic',
	},params);
	maxIdSlide++;

	var slide = $('<div class="slide slide-'+maxIdSlide+'"></div>').appendTo(move);
	//var goto_left = $('<div class="goto goto_left"><img class="previous" src="plugin/img/previous_light.png"></div>').appendTo(slide).click(gotoPreviousSlide);
	if(maxIdSlide ==1){
		//goto_left.css('visibility','hidden');
	}

	//var goto_right = $('<div class="goto goto_right"><img class="next" src="plugin/img/next_light.png"></div>').appendTo(slide).click(gotoNextSlide);

	//last_goto = goto_right;
	var container = $('<div class="slide-container"></div>').appendTo(slide);


	// Title
	if(typeof params.Title == "string"){
		var title = $('<h2></h2>').appendTo(container);
		title.addClass(params.TitleStyle).html(params.Title);
	}

	var frame_container = container;
	if(params.SlideStyle == 'vertical'){
		frame_container = $('<div class="sub_container row-fluid"></div>').appendTo(container);
	} else if(params.SlideStyle == 'first'){
		title.css('margin-top','15%');
	}

	// Frames
	if(params.Frame != null){
		if(typeof params.Frame == "string"){
			var frame = $('<div class="frame"></div>');
			if(typeof params.FrameStyle =="string"){
				frame.addClass(params.FrameStyle);
			} else {
				frame.addClass('default_style');
			}
			if(frame.hasClass('img')){
				frame.html('<img src="'+params.Frame+'">');
			} else if(frame.hasClass('youtube')) {
					frame.html('<object width="50%" height="50%"><param name="movie" value="'+params.Frame+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/9bZkp7q19f0?hl=fr_FR&amp;version=3" type="application/x-shockwave-flash" width="50%" height="50%" allowscriptaccess="always" allowfullscreen="true"></embed></object>');
			} else {
				frame.html(listParser(params.Frame));
			}

			if(frame.hasClass('clear')){
				frame_container = container;
			}

			frame.appendTo(frame_container);
		} else {
			var lastClassNames = "";
			for(var i = 0 ; i < params.Frame.length ; i++){
				var frame = $('<div class="frame"></div>');
				if(typeof params.FrameStyle =="string"){
					frame.addClass(params.FrameStyle);
				} else if(typeof params.FrameStyle[i] == "string"){
					frame.addClass(params.FrameStyle[i]);
				} else {
					frame.addClass('default_style');
				}

				if(frame.hasClass('img')){
					frame.html('<img src="'+params.Frame[i]+'">');
				} else if(frame.hasClass('youtube')) {
					frame.html('<object width="560" height="315"><param name="movie" value="'+params.Frame[i]+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/9bZkp7q19f0?hl=fr_FR&amp;version=3" type="application/x-shockwave-flash" width="560" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>');
				} else {
					frame.html(listParser(params.Frame[i]));
				}
				if(frame.hasClass('clear')){
					frame_container = container;
				}
				frame.appendTo(frame_container);
			}
		}
	}

	resize_slides();
	resize_move_w();
};

var configure = function(params){
	var params = $.extend({
		Title : "Slides",
		Resolution : "auto", // auto or AxB
		FontColor : 'auto', // auto or light or dark
		FontSize : 'auto',
		FramesStyleDefault : 'none',
		TitlesStyleDefault : 'none',
		Author : '',
		Progression : true
	},params);

	if(params.Resolution != "auto"){
		var sizes = params.Resolution.split('x');
		if(params.FontSize == 'auto' && sizes[0] == "800"){
			$('.all').addClass('small');
		}
		all.width(sizes[0]);
		all.height(sizes[1]);
	}

	if(params.FontSize != 'auto'){
		$('.frame').css('font-size',params.FontSize)
			.css('line-height',params.FontSize);
	}

	$('h2.title_default_style').addClass(params.TitlesStyleDefault);
	$('.frame.default_style').addClass(params.FramesStyleDefault);

	//last_goto.css('visibility','hidden');

	$('.goto').css('opacity','0');

	$('.goto_left').mouseover(function(){
		if(idSlide != 1){
			$('.goto_left').css('opacity','0.65').css('cursor','pointer');

		} else {
			$('.goto_left').css('opacity','0').css('cursor','auto');

		}
	});

	$('.goto_right').mouseover(function(){
		if(idSlide != maxIdSlide){
			$('.goto_right').css('opacity','0.65').css('cursor','pointer');
		} else {
			$('.goto_right').css('opacity','0').css('cursor','auto');
			//alert('ko');
		}
	});

	$('.goto_left').mouseleave(function(){
		$('.goto_left').css('opacity','0').css('cursor','auto');
	});

	$('.goto_right').mouseleave(function(){
		$('.goto_right').css('opacity','0').css('cursor','auto');
	});

	$('.goto_right').click(gotoNextSlide);

	$('.goto_left').click(gotoPreviousSlide);

	placement_goto();
	resize_slides();
	resize_move_w();
	resize_move_h();


	//body = $('body');
	$(window).resize(placement_goto);
	$(window).resize(resize_slides);
	$(window).resize(resize_move_h);
	$(window).resize(resize_move_w);

	$('.sub_container.row-fluid').each(function(){
		var frames = $(this).children();
		var nb = frames.length;
		frames.each(function(){
			$(this).addClass('span'+12/nb);
		});
	});


	$('img').load(updateSpanHeight)

	$(window).resize(updateSpanHeight);


	$(window).resize();
	all.addClass('font_'+params.FontColor); 

	if(typeof params.Title == "string"){
		$('title').html(params.Title);
	}

	if(typeof params.Author == "string"){
		$('.author').html(params.Author);
	}

	if(typeof params.Progression == "boolean"){
		if(params.Progression){
			$('.progression').css('visibility','visible');
		} else {
			$('.progression').css('visibility','hidden');
		}
	}

	$(document).keydown(function(e){
		if (e.keyCode == 37) { 
			gotoPreviousSlide();
			return false;
		} else if(e.keyCode == 39){
			gotoNextSlide()
		} else if(e.keyCode == 32){
			gotoNextSlide();
		}
	});

	$('.progression').html(idSlide+'/'+maxIdSlide);


};
(function($) {
})(jQuery);
