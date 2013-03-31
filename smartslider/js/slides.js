var placement_goto = function(){
	$('.goto img').css('top',all.height()/2 - $('.goto img').height()/2);
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
		animate_move();
	}
};

var gotoPreviousSlide = function(){
	if(idSlide > 1){
		idSlide--;
		animate_move();
	}
};

var list_parser = function(string){
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

	/*//string.replace('\n','<br/>');
	var un = string.split('\\');
	if(!string.match('\\\\')){
		return string;
	} else {
		var items = un[0].split('->');
		var html_result = items[0] + '<ul>'; 
		for(var i = 1 ; i < items.length ; i++){
			html_result += '<li>' + items[i] + '</li>'; 
		}
		html_result += '</ul>' ;
		if(un[1]){
			html_result += un[1];
		}
		return html_result;
	}*/
};


$(function(){

});
