$(function(){
	//一次横向滚动一个
	$('#marquee1').kxbdSuperMarquee({
		distance:960,
		time:3,
		btnGo:{left:'#goL',right:'#goR'},
		direction:'left'
	});
	//解决方案
	$(".abs_bt li").each(function(index){
		$(this).mouseover(function(){
			$(".abs_tab").removeClass("block")//清除样式
			$(".abs_tab:eq("+index+")").addClass("block")//添加样式
			$(".abs_bt li").removeClass("cur")//清除样式
			$(this).addClass("cur")//添加样式
		})
	})
	//产品体系
	$(".tixi_bt li").each(function(index){
		$(this).mouseover(function(){
			$(".tixi_cont").removeClass("block")//清除样式
			$(".tixi_cont:eq("+index+")").addClass("block")//添加样式
			$(".tixi_bt li").removeClass("cur")//清除样式
			$(this).addClass("cur")//添加样式
		})
	})
})