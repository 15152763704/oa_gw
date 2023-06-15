$(function(){
	/*
	$(".col-cen").hover(function(){
		
		$(this).find("div.col-title").find("h2").addClass("animate_top");
		$(this).find("div.col-title").find("p").addClass("animate_top");
		$(this).find("div.col-about").find("h2").addClass("animate_top");
		$(this).find("div.col-about").find("div").addClass("animate_top");
		$(this).find("div.col-about").find("p").addClass("animate_top");
	},function(){		
		$(this).find("div.col-title").find("h2").removeClass("animate_top");
		$(this).find("div.col-title").find("p").removeClass("animate_top");
		$(this).find("div.col-about").find("h2").removeClass("animate_top");
		$(this).find("div.col-about").find("div").removeClass("animate_top");
		$(this).find("div.col-about").find("p").removeClass("animate_top");
	});*/

	$(window).scroll(function(){
		console.log($(document).scrollTop())
		if($(document).scrollTop() > 90){
			
		}
		if($(document).scrollTop() > 700){
			$(".col1 .col-about").show();
		}
		if($(document).scrollTop() > 1200){
			$(".col2 .col-about").show();
		}
		if($(document).scrollTop() > 1600){
			$(".col3 .col-about").show();
		}
		if($(document).scrollTop() > 2100){
			$(".col4 .col-about").show();
		}
		if($(document).scrollTop() > 2600){
			$(".col5 .col-about").show();
		}
		if($(document).scrollTop() > 3100){
			$(".col6 .col-about").show();
		}
		if($(document).scrollTop() > 3700){
			$(".col7 .col-title h2,.col7 .col-title p").show();
		}
		if($(document).scrollTop() > 4300){
			$(".col8 .col-about").show();
		}
		if($(document).scrollTop() > 4800){
			$(".col9 .col-title h2,.col9 .col-title p").show();
		}
	})

	
	$(".btn_click").click(function(){
		$("#BgDiv").css({ display: "block", height: $(document).height() });		
		$("#ujzDialog").css("display", "block");
		var scrtop=$(document).scrollTop();
		$("#ujzDialog").css("top",scrtop+($(window).height()-458)/2+"px");
		$("#ujzDialog img").attr("src",$(this).find("span").text());
	});
	$(".ujzdia-close").click(function(){
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
