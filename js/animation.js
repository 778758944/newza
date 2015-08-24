/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-08-21 11:56:39
 * @version $Id$
 */
var newzAni=angular.module("newzAni",["ngAnimate"]);
newzAni.animation(".view-content",function(){
	return {
		enter:function(element,done){
			$(element).css({
				opacity:0
			});
			$(element).animate({
				opacity:1
			},500);
		},

		leave:function(element,done){
			$(element).animate({opacity:0},500);
		}
	}
});
