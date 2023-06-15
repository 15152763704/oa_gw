$(function(){
	//一次横向滚动一个
	/*$('#marquee1').kxbdSuperMarquee({
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
	})*/
	$(".forms-input:odd").css("float","right");
	
	$(".btn_click").click(function(){
		$("#BgDiv").css({ display: "block", height: $(document).height() });		
		$("#ujzDialog").css("display", "block");
		//var scrtop=document.documentElement.scrollTop;
		var scrtop=$(document).scrollTop();
		//alert(scrtop);
		$("#ujzDialog").css("top",scrtop+($(window).height()-458)/2+"px");
		$("#ujzDialog img").attr("src",$(this).find("span").text());
	});
	$(".ujzdia-close").click(function(){
		//alert("close");
		$("#BgDiv").css("display", "none");
		$("#ujzDialog").css("display", "none");
	});
})
function clearDefault(el)
{
  if (el.defaultValue==el.value) el.value = "";
}
function resetDefault(el)
{
  if (isEmpty(el.value)) el.value=el.defaultValue;
}

function isEmpty(s) 
{
  if (s == null || s=="undefined" || s.length == 0)
    return true;
  return !/\S/.test(s);
}
