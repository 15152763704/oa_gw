$(function(){
	var my=0,mx=0;
	$(document).mousemove(function(e){
		var x=e.pageX,y=e.pageY;
		if(mx==0) mx=x;
		if(my==0) my=y;
		ml = x-mx;
		ml = Math.ceil(ml/150);
		$('.float_bg').css('left',ml);
		mt = y-my;
		mt = Math.ceil(mt/100);
		$('.float_bg').css('top',mt);
	});
});