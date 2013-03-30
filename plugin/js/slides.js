var placement_goto = function(){
	$('.goto img').css('top',body.height()/2 - $('.goto img').height()/2);
};
var resize_slides = function(){
	$('.slide').width(body.width());
	$('.slide').height(body.height());
};

var resize_move_h = function(){
	move.height($('.slide').height());
};

var resize_move_w = function(){
	var slides = $('.slide');
	move.width(slides.length*slides.width());
	//alert($('.slide').length);
};

var idSlide = 0 ;
var maxIdSlide = 0;

var animate_move = function(){
		move.animate({'margin-left':-100*(idSlide-1)+'%'},200);
};

var gotoNextSlide = function(){
	if(idSlide < maxIdSlide){
		idSlide++;
		animate_move();
	}
};

var gotoPreviousSlide = function(){
	if(idSlide > 1){
		idSlide--;
		animate_move();
	}
};


$(function(){
	placement_goto();
	resize_move_h();

	//body = $('body');
	$(window).resize(placement_goto);
	$(window).resize(resize_slides);
	$(window).resize(resize_move_h);
	$(window).resize(resize_move_w);


	$('.goto_left').click(function(){
		gotoPreviousSlide();

	});
	$('.goto_right').click(function(){
		gotoNextSlide();	
	});
	$(document).keydown(function(e){
		if (e.keyCode == 37) { 
			gotoPreviousSlide();
			return false;
		} else if(e.keyCode == 39){
			gotoNextSlide()
		}
	});

});
