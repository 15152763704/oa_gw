if(typeof(Worker) == "undefined"){
	$("body").addClass("ieBody");
}else{
	$("body").wrapInner("<div class='wrapper'></div>");
	var wow = new WOW({
		mobile: false,
		live: true
	});
	wow.init();
}

/*$(window).resize(function(){
	window.location.href=window.location.href
	});*/


//导航
function webHeader(){
	if($(window).width() < 1199){
        $(".mMmenuLay dl").each(function(i) {
			var _this = $(this);
            if(_this.find("dd").size()>0){
				_this.find(".mToggle").show();
				}
        });
		$(".mToggle").click(function(e){
		if($(this).parents("dl").hasClass("on")){
			$(this).parents("dl").removeClass("on");
			$(this).removeClass("mToggle2");
			}else{
				$(".mMmenuLay dl").removeClass("on");
				$(".mToggle").removeClass("mToggle2");
				$(this).addClass("mToggle2");
				$(this).parents("dl").addClass("on");
				}
		});
		$(".mOpenBtn").click(function(e){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").addClass("on");
			$("body").css("overflow","hidden");
			});
		$(".mCloseBtn,.mMenuLayBg").click(function(){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").removeClass("on");
			$("body").css("overflow","inherit");
			});
	}
}
webHeader();
$(window).scroll(function(){
	if($(document).scrollTop()>10){
		$(".backWpr").addClass("on");
		}else{
			$(".backWpr").removeClass("on");
			}
		if($(document).scrollTop()>10){
			$(".header").addClass("headerFixed");
			}else{
			$(".header").removeClass("headerFixed");
		}
});
//$(window).resize(function(){webHeader();});

jQuery(document).ready(function($) {
	
setTimeout(function(){$("body").addClass("bodyIn")},100);


$(".lan_rbtn").click(function(){
	$(".mbrFm_tab a").removeClass("on");
	$(".mbrFm_tab a").eq(0).addClass("on");
	$(".mbrLayer_bg,.mbrFm").fadeIn(300);
	$(".mbrFm_item").hide();
	$(".mbrFm_item").eq(0).show();
	});
$(".lan_lbtn").click(function(){
	$(".mbrFm_tab a").removeClass("on");
	$(".mbrFm_tab a").eq(1).addClass("on");
	$(".mbrFm_item").hide();
	$(".mbrFm_item").eq(1).show();
	$(".mbrLayer_bg,.mbrFm").fadeIn(300);
	});
$(".mbrFm_tab a").click(function(){
	$(this).addClass("on").siblings("a").removeClass("on");
	$(".mbrFm_item").hide();
	$(".mbrFm_item").eq($(".mbrFm_tab a").index(this)).show();
	});
$(".mbrLayer_bg").click(function(){
	$(".mbrLayer_bg,.mbrFm").fadeOut(300);
	});
$(".mbrLayer_bg,.mbrFm_close").click(function(){
 $(".mbrLayer_bg,.mbrFm").fadeOut(300);
 });

$(".backTop").click(function(){$("body,html").animate({"scrollTop":0},500);});

$(".top_tip_colose").click(function(){
	$(".top_tipBox").fadeOut(300);
	});
setTimeout(function(){$(".top_tipBox").fadeOut(300);},5000);

//banner
$('.hmFocus').slick({
    autoplay: true, 
    arrows: false,
    dots:true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
});
$('.hmFocus').init(function(slick){
	$('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
	$(".hmFocus .slick-dots li").removeClass("on");
	$(".hmFocus .slick-dots li.slick-active").addClass("on");
})
$('.hmFocus').on('afterChange',function(slick,currentSlide){
	$('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
	$(".hmFocus .slick-dots li").removeClass("on");
	$(".hmFocus .slick-dots li.slick-active").addClass("on");
})

$(".hmc2Tab a").click(function(){
	$(this).addClass("on").siblings("a").removeClass("on");
	$(".hmc1c_item").removeClass("on");
	$(".hmc1c_item").eq($(".hmc2Tab a").index(this)).addClass("on");
	});
$(".hmc1Rx").each(function(i) {
    $(this).find("a").hover(function(){
		$(this).addClass("on").siblings("a").removeClass("on");
		});
});

$(".hmc3menu_ul a").click(function(){
	$(".hmc3menu_ul a").removeClass("on");
	$(this).addClass("on");
	$(".hmc3Litem").removeClass("on");
	$(".hmc3Litem").eq($(".hmc3menu_ul a").index(this)).addClass("on");
	$(".hmc3bg").removeClass("on");
	$(".hmc3bg").eq($(".hmc3Litem").eq($(".hmc3menu_ul a").index(this)).find(".hmc3SlgBtns a:first").attr("data-index")).addClass("on");
	
	});
$(".hmc3SlgBtns a").hover(function(){
	$(this).parents(".hmc3Litem").find(".hmc3SlgBtns a").removeClass("on");
	$(this).parents(".hmc3Litem").find(".hmc3SlgBtns a").eq($(this).parents(".hmc3Litem").find(".hmc3SlgBtns a").index(this)).addClass("on");
	$(this).parents(".hmc3Litem").find(".hmc3sCitem").removeClass("on");
	$(this).parents(".hmc3Litem").find(".hmc3sCitem").eq($(this).parents(".hmc3Litem").find(".hmc3SlgBtns a").index(this)).addClass("on");
	
	$(".hmc3bg").removeClass("on");
	$(".hmc3bg").eq($(".hmc3SlgBtns a").index(this)).addClass("on");
	});
	
$(".hmc2tab_ul a").click(function(){
	if($(this).parents(".hmc2Tabs").next(".hmc2ChangeWpr").css("display")=="none"){
		$(".hmc2ChangeWpr").slideUp(300);
		$(this).parents(".hmc2Tabs").next(".hmc2ChangeWpr").slideDown(300);
		}
		$(".hmc2tab_ul a").removeClass("on");
		$(this).addClass("on");
		$(".hmc2Change_item").removeClass("on");
		$(".hmc2Change_item").eq($(".hmc2tab_ul a").index(this)).addClass("on");
	});

$(".hmc1swiper").each(function(i){
	$(".hmc1swiper").eq(i).slick({
			autoplay: true, 
			arrows: true,
			dots:true,
			infinite: true,
			speed: 500,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			slidesToShow: 4,
		    slidesToScroll: 1,
			responsive: [
			  {
				breakpoint: 1799,
				settings: {
				  slidesToShow: 3,
				}
			  }
			]
		});
	});


//搜素
$(".topSerBtn").click(function(){
	$(".serBg,.serLayer").fadeIn(500);
	$(".serClose").removeClass("on");
	});
$(".serClose").click(function(){
	$(".serBg,.serLayer").fadeOut(500);
	$(".serClose").addClass("on");
	});

});


//百度分享
if($(".bdsharebuttonbox").length){
window._bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "../css/style.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '../../../bdimg.share.baidu.com/static/api/js/shareb662.js?cdnversion=' + ~(-new Date() / 36e5)];
}


//自定义函数
function picTxtHeight() {
$(".picTxtBox").each(function(i){if($(this).find(".txtBox").height()>$(this).find(".picBox").height()){$(this).height($(this).find(".txtBox").height());}else{$(this).height($(this).find(".picBox").height());}$(this).find(".picBox-wp,.txtBox-wp").css("min-height",$(this).height())})}
if($(document).width()>993){
	picTxtHeight(); setTimeout(function(){picTxtHeight();},300);
}
$(window).resize(function(){
	if($(document).width()>993){
		picTxtHeight();
	}
})

function autoH(className){
	var maxH = 0;
	$(className).each(function() {
    var cutH = $(this).innerHeight();
	if(cutH>maxH){
		maxH = cutH;
		}
    });

    $(className).innerHeight(maxH);
}

function autoW(className){
	var maxW = 0;
	$(className).each(function() {
    var cutW = $(this).innerWidth();
	if(cutW>maxW){
		maxW = cutW;
		}
    });

    $(className).innerWidth(maxW);
}

function addPreZero(num){
	 if(num<10){
	 var t = (num+'').length,
	  s = '';
	 for(var i=0; i<2-t; i++){
	  s += '0';
	 }
	 return s+num;
	 }else{
		 return num;
		 }
}

//屏蔽页面错误
window.onerror = function(){
return true;
}