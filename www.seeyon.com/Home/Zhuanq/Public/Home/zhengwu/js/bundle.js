if($(".bdsharebuttonbox").size()){
window._bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "../css/style.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '../../../bdimg.share.baidu.com/static/api/js/shareb662.js?cdnversion=' + ~(-new Date() / 36e5)];
}

jQuery(document).ready(function($) {
	// header & header
	var val;
	$(document).on('click', '.footer .tab_t span', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.footer .child').eq($(this).index()).show().siblings().hide();
	})
	$('.nav_cont li.menu').hover(function(){
		$(this).addClass('open').removeClass('close').siblings().removeClass('open');
	}, function(){
		$(this).removeClass('open');
	})
	$('.nav_cont li').mouseenter(function(){
		if(!$(this).hasClass('menu')){
			$(this).siblings('.menu').addClass('close')
		}
	})

});
jQuery(document).ready(function($) {
	var PC = $(window).width() > 992,
        winWidth = $(window).width(),
        winHeight = $(window).height();


	function fixedHeader(){
		$(window).scroll(function(){
			if($(window).scrollTop() > $(".topEmpty").height()){
				$('.fixed_header').fadeIn();
			}else{
				$('.fixed_header').fadeOut();
			}
		})
	}
	$('.fixed_header').length && fixedHeader()

	function fixedRight(){
		$(window).load(function(){
			setTimeout(function(){
				$('.fixed_consultation .block').eq(0).find(".hide.hi").fadeIn();
			}, 5000)
			setTimeout(function(){
				$('.fixed_consultation .block').eq(0).find(".hide.hi").fadeOut();
			}, 15000)
		})
		$(window).load(function(){
			setTimeout(function(){
				$('.fixed_consultation .block').eq(2).find(".hide.hi").fadeIn();
			}, 15000)
		})
		$(window).scroll(function(){
			if($(window).scrollTop() > winHeight/2){
				$('.fixed_consultation .totop').fadeIn();
			}else{
				$('.fixed_consultation .totop').fadeOut();
			}
		})
		$('.fixed_consultation .hide_cont h3 i').click(function(){
			$('.fixed_consultation .hide.hi').fadeOut();
		})
		$('.fixed_consultation .totop').click(function(){
			$('html,body').animate({
	            scrollTop: 0
	        }, 300)
		})
	}
	$('.fixed_consultation').length && fixedRight()

})


//new site JS
if(typeof(Worker) == "undefined"){
$("body").addClass("ieBody");
}else{
new WOW().init();	
}
$(function(){
setTimeout(function(){$("body").addClass("bodyIn")},100);

if($(".hmFocus").size()){
	var a = $('.hmFocus_item').length,
			b = 0,
			timer;
$('.hmFocus').slick({
    autoplay: false, 
    arrows: true,
    dots:false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    fade: true,
	draggable: false,
});	
$('.hmFocus').init(function(slick){
    $('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
})
$('.hmFocus').on('afterChange',function(slick,currentSlide){
	$('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on')
})
	for(var i=0; i<a; i++){
		$('.hmFocusWpr .ope ul').append('<li><span></span></li>')
		}
		$('.hmFocusWpr .ope li').eq(0).find('span').animate({
			width: '100%'
		}, 4900)
		timer = setInterval(bChange, 5000);
		function bChange(cutnum,flag){
			if(flag){
				b=cutnum-1;
				}
			b++;
			//console.log(b);
			if(b > a-1){
				b = 0;
			}
			$('.hmFocusWpr .ope li span').stop();
			$('.hmFocusWpr .ope li span').width(0)
			$('.hmFocusWpr .ope li').eq(b).addClass('active').siblings().removeClass('active');
			$('.hmFocusWpr .ope li').eq(b).find('span').animate({
				width: '100%'
			}, 4900)
			$('.hmFocus').slick('slickGoTo',b);
		}
		$('.hmFocusWpr .ope li').click(function(){
			bChange($(this).index(),true);
			clearInterval(timer);
			timer = setInterval(bChange, 5000);
			});
		$('.hmFocusWpr .ope a').click(function(){
			$(this).hasClass('play')?timer = setInterval(bChange, 5000):clearInterval(timer)
			$(this).hasClass('play')?$(this).removeClass('play'):$(this).addClass('play')
			$(this).hasClass('play')?$('.hmFocusWpr .ope li').eq(b).find('span').stop():$('.hmFocusWpr .ope li').eq(b).find('span').animate({width: '100%'}, 4900)
	})

}


if($(".hmc3slick").size()){
	$('.hmc3slick').slick({
		autoplay: false, 
		arrows: true,
		dots:false,
		infinite: true,
		speed: 500,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		fade: true,
	});
	
	$('.hmc3slick').init(function(slick){
		$("#hmc3_s2").text($('.hmc3slick').slick('slickCurrentSlide')+1);
		$('.hmc3btn_a').removeClass("on");
		$('.hmc3btn_a').eq($('.hmc3slick').slick('slickCurrentSlide')).addClass("on");
	})
	$('.hmc3slick').on('afterChange',function(slick,currentSlide){
		$("#hmc3_s2").text($('.hmc3slick').slick('slickCurrentSlide')+1);
		$('.hmc3btn_a').removeClass("on");
		$('.hmc3btn_a').eq($('.hmc3slick').slick('slickCurrentSlide')).addClass("on");
	})
	$('.hmc3btn_a').click(function(){
		$('.hmc3slick').slick('slickGoTo',$(this).index());
		$(this).addClass("on").siblings().removeClass("on")
	});
	
}

if($(".hmRxCon").size()){
	$(".hmc2Items li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		});
	var deg = 0, cinx = 1;
	$(".hmc2Line .next,.hmRxCon .next").click(function(){
		deg+=60;
		cinx ++;
		if(cinx>2){
			cinx=0
			}
			changeItem(deg,cinx);
		});
	$(".hmc2Line .prev,.hmRxCon .prev").click(function(){
		deg-=60;
		cinx --;
		if(cinx<0){
			cinx=2
			}
			changeItem(deg,cinx);
		});
	function changeItem(deg,cinx){
		$(".hmc2Rx").css("transform","rotate("+deg+"deg)");
		$(".hmc2_stiem").css("transform","rotate("+-deg+"deg)");
		$(".hmc2RxLayer").removeClass("on");
		$(".hmc2RxLayer").eq(cinx).addClass("on");
		$(".hmc2Items ul li").removeClass("on");
		$(".hmc2Items ul li").eq(cinx).addClass("on");
		$(".hmc2Line i").css("top",cinx*33.33+"%");
		}
	$(".hmc2Items ul li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		});
	$(".hmc2Items ul li").eq(0).click(function(){
		deg = -60,cinx=0;
		changeItem(deg,cinx);
		});
	$(".hmc2Items ul li").eq(1).click(function(){
		deg = 0,cinx=1;
		changeItem(deg,cinx);
		});
	$(".hmc2Items ul li").eq(2).click(function(){
		deg = 60,cinx=2;
		changeItem(deg,cinx);
		});
}


//img as background
if($(".bgImg").size()>0){
$(".bgImg").each(function(i){$(".bgImg").eq(i).css("background-image","url("+$(this).find("img").attr("src")+")")});
}



/*二级*/
if($(".m2banner").size()){setTimeout(function(){$(".hmFocus_item").addClass("on")},300);}


//if($(".m2proc1_aBox p").size()){autoH(".m2proc1_aBox p");}
//if($(".m2proc1_aBox").size()){autoH(".m2proc1_aBox");}

if($(".m2proSwiper").size()){
    $('.m2proSwiper').slick({
        autoplay: false, 
        arrows: true,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
}

if($(".m2stc3Swiper").size()){
    $('.m2stc3Swiper').slick({
        autoplay: false, 
        arrows: true,
        dots:false,
        infinite: true,
        asNavFor: '.m2stc3Ss',
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        fade: true,
    });
	
    $('.m2stc3Swiper').on('afterChange',function(slick,currentSlide){
        $('.m2stc3Pimgs a').eq($('.m2stc3Swiper').slick('slickCurrentSlide')).addClass('on').siblings().removeClass('on')
    })
    $('.m2stc3Pimgs a').click(function(){
        $('.m2stc3Swiper').slick('slickGoTo',$(this).index());
        $(this).addClass("on").siblings().removeClass("on")
    });
	
    $('.m2stc3Ss').slick({
        autoplay: false, 
        arrows: false,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.m2stc3Swiper',
        focusOnSelect: true, 
    });
	
}

//产品试用
$(".webBm_a2").attr("href","javascript:show_fk();");
$(".testProBtn,.webBm_a2").click(function(){
	$(".tsLayerBg,.tsLayer").fadeIn(300);
	});
$(".tsClose").click(function(){
	$(".tsLayerBg,.tsLayer").fadeOut(300);
	});

$(".m2tab2_a").hover(function(){
	$(this).parents(".m2tab2Wpr").find(".m2tab2_a").removeClass("on");
	$(this).addClass("on");
	$(this).parents(".m2tab2Wpr").find(".m2tab3Wpr").removeClass("on");
	$(this).parents(".m2tab2Wpr").find(".m2tab3Wpr").eq($(this).parents(".m2tab2Wpr").find(".m2tab2_a").index(this)).addClass("on");
	});
$(".m2tab3_a").hover(function(){
	$(this).parents(".m2tab3Wpr").find(".m2tab3_a").removeClass("on");
	$(this).addClass("on");
	$(this).parents(".m2tab3Wpr").find(".m2tab3Con_item").removeClass("on");
	$(this).parents(".m2tab3Wpr").find(".m2tab3Con_item").eq($(this).parents(".m2tab3Wpr").find(".m2tab3_a").index(this)).addClass("on");
	});
$(".m2tabFirst_a").hover(function(){
	$(".m2tabFirst_a").removeClass("on");
	$(this).addClass("on");
	$(".m2tab2Wpr").hide();
	$(".m2tab2Wpr").eq($(".m2tabFirst_a").index(this)).show();
	});	
	
	

if($(".m2proc3Rx").size()){
	$(".m2pro_num2").text(addPreZero($(".m2proc3Limgs img").size()));
    $('.m2proc3Rx').slick({
        autoplay: false, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 0,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		fade: true,
    });
    $('.m2proc3Rx').on('afterChange',function(slick,currentSlide){
        $(".m2pro_num1").text(addPreZero($('.m2proc3Rx').slick('slickCurrentSlide')+1));
		$(".m2proc3Limgs img").removeClass("on");
		$(".m2proc3Limgs img").eq($('.m2proc3Rx').slick('slickCurrentSlide')).addClass("on");
		$(".m2proc3Rx_item:first").find("dl").removeClass("on");
		$(".m2proc3Rx_item:first").find("dl").eq($('.m2proc3Rx').slick('slickCurrentSlide')).addClass("on");
    })
	
	$(".m2proc3Rx_item dt").click(function(){
		$('.m2proc3Rx').slick('slickGoTo',$(".m2proc3Rx_item dt").index(this));
		});
}	


if($(".m2pro2Con5").size()){
    $('.m2pro2Con5').slick({
        autoplay: true, 
        arrows: true,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
}

if($(".m2tabSwiper").size()){
    $('.m2tabSwiper').slick({
        autoplay: false, 
        arrows: true,
        dots:false,
        infinite: false,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
	
}

if($(".m2stSwiper").size()){
    $('.m2stSwiper').slick({
        autoplay: true, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 0,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
		centerMode: true,
		centerPadding: '0px',
    });
    $('.m2stSwiper').on('afterChange',function(slick,currentSlide){
		$('.m2stSwiper .m2stSitem').removeClass("m2stSitem_p1 m2stSitem_p2 m2stSitem_n1 m2stSitem_n2");
        $('.m2stSwiper .slick-current').prev(".m2stSitem").addClass("m2stSitem_p1");
		$('.m2stSwiper .slick-current').prev(".m2stSitem").prev(".m2stSitem").addClass("m2stSitem_p2");
		$('.m2stSwiper .slick-current').next(".m2stSitem").addClass("m2stSitem_n1");
		$('.m2stSwiper .slick-current').next(".m2stSitem").next(".m2stSitem").addClass("m2stSitem_n2");
    })
}

if($(".m2abtc5Swiper").size()){
    $('.m2abtc5Swiper').slick({
        autoplay: false, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 200,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
}

if($(".m2abtc5Swiper").size()){
    $('.m2abtc5Swiper').slick({
        autoplay: false, 
        arrows: true,
        dots:false,
        infinite: true,
        speed: 200,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
}
if($(".m2khSlider").size()){
    $('.m2khSlider').slick({
        autoplay: false, 
        arrows: true,
        dots:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true
            }
          }
        ]
    });
}

$(".hmc1aBox").attr("href","javascript:;");
$(".hmc5_a").attr("href","javascript:;");

function addPreZero(num){
	 if(num<10){
	 var t = (num+'').length , s = '';
	 for(var i=0; i<2-t; i++){
	  s += '0';
	 }
	 return s+num;
	 }else{
		 return num;
	 }
}
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

})





