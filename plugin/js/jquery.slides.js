var addSlide = function(){
	if(maxIdSlide == 0){
		idSlide = 1;
	}
	maxIdSlide++;
	
	var slide = $('<div class="slide slide-'+maxIdSlide+'"></div>').appendTo(move);
	var container = $('<div class="slide-container"></div>').appendTo(slide);

	//var container =
	
	container.html('Slide'+maxIdSlide);

	resize_move_w();
	resize_slides();

};
(function($) {
})(jQuery);
