/*
 *This file is part of SmartSlider.
 *
 *SmartSlider is free software: you can redistribute it and/or modify it under
 *the terms of the GNU General Public License as published by the Free Software
 *Foundation, either version 3 of the License, or (at your option) any later
 *version.
 *
 *SmartSlider is distributed in the hope that it will be useful, but WITHOUT ANY
 *WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 *PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 *You should have received a copy of the GNU General Public License along
 *with SmartSlider (file LICENSE).  If not, see <http://www.gnu.org/licenses/>
 */
var placement_goto = function(){
	$('.goto img').css('top',body.height()/2 - $('.goto img').height()/2);
};
var resize_slides = function(){
	$('.slide').width(all.width());
	$('.slide').height(all.height());
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
		$('.progression').html(idSlide+'/'+maxIdSlide);
		animate_move();
	}
};

var gotoPreviousSlide = function(){
	if(idSlide > 1){
		idSlide--;
		$('.progression').html(idSlide+'/'+maxIdSlide);
		animate_move();
	}
};

var listParser = function(string){
	var open = string.indexOf('{');
	if(open != -1){
		var begin = string.substr(0,open);
		var close = string.lastIndexOf('}');
		var end = string.substr(close+1, string.length - close ); 
		var li = string.substr(open+1,close-open-1).split(',');

		var r = '<ul>';
		for(var i =0 ; i < li.length ; i++){
			r += '<li>';
			r += li[i];
			r += '</li>';
		}

		r += '</ul>';
		return begin + r + end;
	} else {
		return string;
	}

};

var updateSpanHeight = function(){
	$('.sub_container.row-fluid').each(function(){
		var max_height = 0;
		$(this).children().css('height','100%')
		.each(function(){
				//alert($(this).height());
			if(max_height < $(this).height()){
				max_height = $(this).height();
			}
		});
		$(this).children().height(max_height);
	});
};


$(function(){

});
