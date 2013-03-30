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
		TitleColor : 'color_default',
		Frame : null,
		FrameStyle : 'style_default',
	},params);
	maxIdSlide++;

	var slide = $('<div class="slide slide-'+maxIdSlide+'"></div>').appendTo(move);
	var goto_left = $('<div class="goto goto_left"><img class="previous" src="plugin/img/previous_light.png"></div>').appendTo(slide).click(gotoPreviousSlide);
	if(maxIdSlide ==1){
		goto_left.css('visibility','hidden');
	}

	var goto_right = $('<div class="goto goto_right"><img class="next" src="plugin/img/next_light.png"></div>').appendTo(slide).click(gotoNextSlide);

	last_goto = goto_right;
	var container = $('<div class="slide-container"></div>').appendTo(slide);
	

	// Title
	if(typeof params.Title == "string"){
		var title = $('<h2 class="'+params.TitleColor+'"></h2>').appendTo(container);
		title.html(params.Title);
	}

	// Frames
	if(params.Frame != null){
		if(typeof params.Frame == "string"){
			var frame = $('<div class="frame"></div>');
			frame.html(params.Frame).appendTo(container);
			if(typeof params.FrameStyle =="string"){
				frame.addClass(params.FrameStyle);
			}
		} else {
			var lastClassNames = "";
			for(var i = 0 ; i < params.Frame.length ; i++){
				var frame = $('<div class="frame"></div>');
				frame.html(params.Frame[i]).appendTo(container);
				if(typeof params.FrameStyle =="string"){
					frame.addClass(FrameStyle);
				} else if(typeof params.FrameStyle[i] == "string"){
					frame.addClass(params.FrameStyle[i]);
				} else {
					frame.addClass('style_default');
				}

			}
		}
	}

	resize_slides();
	resize_move_w();
};

var configure = function(params){
	var params = $.extend({
		Title : "Slides",
		TitlesColor : 'none', 
		Resolution : "auto", // auto or AxB
		FontColor : 'auto' // auto or light or dark
	},params);
	
	if(params.Resolution != "auto"){
		var sizes = params.Resolution.split('x');
		body.width(sizes[0]);
		body.height(sizes[1]);
	}

	$('h2.color_default').addClass(params.TitlesColor);

	last_goto.css('visibility','hidden');
	placement_goto();
	resize_slides();
	resize_move_w();
	resize_move_h();

	//body = $('body');
	$(window).resize(placement_goto);
	$(window).resize(resize_slides);
	$(window).resize(resize_move_h);
	$(window).resize(resize_move_w);


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
	
	body.addClass('font_'+params.FontColor); 
	
	$('title').html(params.Title);
};
(function($) {
})(jQuery);
