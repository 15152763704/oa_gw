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
		// if($(document).scrollTop() > 10){
		// 	$(".col12 .col-about").show();
		// }
		if($(document).scrollTop() > 540){
			$(".col1 .col-about").show();
		}
		if($(document).scrollTop() > 902){
			$(".col2 .col-about").show();
		}
		if($(document).scrollTop() > 1400){
			$(".col3 .col-about").show();
		}
		if($(document).scrollTop() > 1882){
			$(".col4 .col-about").show();
		}
		if($(document).scrollTop() > 2500){
			$(".col21 .col-title h2").show();
		}
		if($(document).scrollTop() > 2700){
			$(".col20 .col-about").show();
		}
		if($(document).scrollTop() > 3535){
			$(".col10 .col-title h2,.col10 .col-title p").show();
		}
		if($(document).scrollTop() > 4250){
			$(".col5 .col-about").show();
		}
		if($(document).scrollTop() > 4732){
			$(".col15 .col-about").show();
		}
		if($(document).scrollTop() > 5232){
			$(".col16 .col-about").show();
		}
		if($(document).scrollTop() > 5714){
			$(".col17 .col-about").show();
		}







		if($(document).scrollTop() > 1250){
			$(".col7 .col-title h2,.col7 .col-title p").show();
		}
		
		if($(document).scrollTop() > 1750){
			$(".col9 .col-title h2,.col9 .col-title p").show();
		}
		
		
		if($(document).scrollTop() > 3450){
			$(".col6 .col-about").show();
		}
		if($(document).scrollTop() > 3550){
			$(".col8 .col-about").show();
		}
		
		if($(document).scrollTop() > 4050){
			$(".col11 .col-title h2,.col11 .col-title p").show();
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
