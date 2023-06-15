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
			$(".col7 .col-title h2,.col7  .col-list h3,.col7  .col-list p").show();
		}
		if($(document).scrollTop() > 690){
			$(".col13 h2").show();
		}
		if($(document).scrollTop() > 1340){
			$(".col12 .col-about").show();
		}
		if($(document).scrollTop() > 1788){
			$(".col1 .col-about").show();
		}
		if($(document).scrollTop() > 2238){
			$(".col2 .col-about").show();
		}
		if($(document).scrollTop() > 2938){
			$(".col3 .col-about").show();
		}
		if($(document).scrollTop() > 3438){
			$(".col4 .col-about").show();
		}
		if($(document).scrollTop() > 4138){
			$(".col5 .col-about").show();
		}
		if($(document).scrollTop() > 5020){
			$(".col15 .col-about").show();
		}
		if($(document).scrollTop() > 5520){
			$(".col16 .col-about").show();
		}		
		if($(document).scrollTop() > 6200){
			$(".col21 .col-about").show();
		}
		if($(document).scrollTop() > 6700){
			$(".col22 .col-about").show();
		}
		if($(document).scrollTop() > 7182){
			$(".col23 .col-about").show();
		}
		if($(document).scrollTop() > 7882){
			$(".col24 .col-about").show();
		}
		if($(document).scrollTop() > 8582){
			$(".col10 .col-about,.col10 .col-title h2").show();
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
