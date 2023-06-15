$(function(){
	$(window).scroll(function(){
		console.log($(document).scrollTop())
		if($(document).scrollTop() > 90){
			
		}
		if($(document).scrollTop() > 820){
			$(".col1 .col-about").show();
		}
		if($(document).scrollTop() > 1320){
			$(".col2 .col-about").show();
		}
		if($(document).scrollTop() > 1700){
			$(".col3 .col-about").show();
		}
		if($(document).scrollTop() > 2300){
			$(".col4 .col-about").show();
		}
		if($(document).scrollTop() > 2800){
			$(".col5 .col-title h2,.col5 .col-title p").show();
		}
		if($(document).scrollTop() > 3160){
			$(".col6 .col-about").show();
		}
		if($(document).scrollTop() > 3560){
			$(".col7 .col-title h2,.col7 .col-title p").show();
		}
		if($(document).scrollTop() > 3800){
			$(".col8 .col-title h2,.col8 .col-title p").show();
		}
		if($(document).scrollTop() > 4300){
			$(".col9 .col-title h2,.col9 .col-title p").show();
		}
		if($(document).scrollTop() > 4500){
			$(".col11 .col-title h2,.col11 .col-title p").show();
		}
		if($(document).scrollTop() > 5000){
			$(".col12 .col-title h2,.col12 .col-title p").show();
		}
		if($(document).scrollTop() > 5400){
			$(".col13 .col-title h2").show();
		}
	})
	$(".case-tab li").click(function(){
		$(".case-tab li").removeClass("curr");
		$(this).addClass("curr");
		$(".case-list li").removeClass("curr").eq($(".case-tab li").index(this)).addClass("curr");
	});
	$(".totop").click(function() {

		$("html,body").animate({ scrollTop: 0 }, "fast");

	});
	
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
