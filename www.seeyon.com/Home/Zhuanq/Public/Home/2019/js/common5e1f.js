window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='../../../bdimg.share.baidu.com/static/api/js/share6e53.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

jQuery(document).ready(function($) {

	//2019-09-29
	//img as background
	if($(".bgImg").size()>0){
	$(".bgImg").each(function(i){$(".bgImg").eq(i).css("background-image","url("+$(this).find("img").attr("src")+")")});
	}
	// header & header
	var val;
	$(document).on('click', '.footer .tab_t span', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.footer .child').eq($(this).index()).show().siblings().hide();
	})
	$(document).on('click', '.header .but01', function(){
        var _this = $('.header input[type="text"]'),
        	_par = $(this).parent(),
        	_val = _this.val();
        val = $.trim(_val);
        if( val=='' ){
        	_this.focus();
    		alert("关键字不能为空");
    		return false;
        }else{
            window.location.href="https://www.seeyon.com/Index/search.html"
            return false;
        }
	})
	$('.header form').mouseenter(function(){
    	$('.header input[type="text"]').focus();
    	$('.header form').addClass('focus');
	})
	
	$('.header .search').mouseenter(function(){
    	$('.header input[type="text"]').focus();
    	$('.header form').addClass('focus');
	})
	
	
	$('.header form').mouseleave(function(){
		var _this = $('.header input[type="text"]'),
        	_val = _this.val();
        val = $.trim(_val);
        if( val=='' ){
			setTimeout(function(){
				$('.header input[type="text"]').blur();
		    	$('.header form').removeClass('focus');
			}, 1000)
        }
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
	// fixed right
	$(window).scroll(function(){
		if($(window).scrollTop() > $('.section1').height() + $('.section2').outerHeight() + 72){
			$('.fixed_right').fadeIn();
		}else{
			$('.fixed_right').fadeOut();
		}
	})
	$('.fixed_right .js_show').click(function(){
		$('.fixed_bg').toggle();
		$(this).parent().toggleClass('open').siblings().removeClass('open')
	})
	$('.fixed_bg').click(function(){
		$(this).hide();
		$('.fixed_right .block').removeClass('open')
	})
	$('#totop').click(function(){
		$('html,body').animate({
			scrollTop: 0
		}, 500)
	})
	$('.fixed_right .block').each(function(){
		var _icon = $(this).find('i');
		var _height = _icon.attr('bg_height')*0.4-80;
		_icon.css('backgroundPositionY',-_height);
	})
	var i = 0;
	var timer = setInterval(addNum, 3000);
	function addNum(){
		i++;
		if(i>3){
			i=1
		}
		$('.fixed_right .block').eq(i-1).addClass('active').siblings().removeClass('active');
		$('.fixed_right .block').each(function(){
			var _icon = $(this).find('i');
			var _height = _icon.attr('bg_height')*0.4-80;
			if($(this).hasClass('active')){
				var that =$(this);
				var s=0;
				var _h = that.find('i').attr('bg_height')*0.4-80;
				var bgChange = setInterval(function (){
					s+=-40
					that.find('i').css('backgroundPositionY',s);
					if(s<=-_h){
						clearInterval(bgChange);
					}
				},30)
			}else{
				clearInterval(bgChange);
				_icon.css('backgroundPositionY',-_height);
			}
		})
	}
			// 2020-03-20 banner地标
		var c = 0,
			landmark = setInterval(changeMark, 3000);
		function changeMark(){
			c++;
			if(c>3){
				c=0
			}
			$('.section1 .partner_ani img').eq(c).addClass('active').siblings().removeClass('active');
		}
		// 2020-03-20 banner地标 end
	
	     //头部导航滚动
         var p=0,
             t=0;
         $(window).scroll(function(){
            p=$(this).scrollTop();
			if(p<72){
			 $(".header").removeClass("scroll01"); 	
			}else if(t<p){
			   $(".header").removeClass("scroll01"); //下滚	
			}else{
				 $(".header").addClass("scroll01");        //上滚  
			}
             setTimeout(function(){ t = p ; },0)

           })
	
	
	
});

function indexInit(){
	// section1
	$(window).load(function(){
		$('.parallax1').scrolly1({bgParallax: true});
        // $('#Plaxbox .img_block').plaxify({
        //     "xRange":50,
        //     "yRange":50
        // });
        $.plax.enable();
	})
	$('.section1 .slick').slick({
		arrows: false,
		dots: true,
		draggable: false,
		speed: 800,
		fade: true,
	})
	$('.section1 .prev').click(function(){
		$('.section1 .slick').slick('slickPrev');
	})
	$('.section1 .next').click(function(){
		$('.section1 .slick').slick('slickNext');
	})
	$('.section1').init(function(slick){
		// $('.section1 video')[0].play();  banenr背景视频
		$('.section1 .item.slick-current').addClass('active').siblings().removeClass('active');
	})
	$('.section1').on('afterChange',function(slick,currentSlide){
		$('.section1 .item.slick-current').addClass('active').siblings().removeClass('active');
	})
	$('.section1').on('beforeChange',function(slick,currentSlide){
		$('.section1 .item.slick-current').addClass('remove').siblings().removeClass('remove');
		setTimeout(function(){
			$('.section1 .item').removeClass('remove')
		},500)
	})
	var i = 0;
	var logo_timer = setInterval(addNum, 5000);
	function addNum(){
		i++;
		if(i>3){
			i=1
		}
		$('.section1 .img_block1 .logos').eq(i-1).addClass('active').siblings().removeClass('active');
	}

	// section2
	$('.section2 .item').each(function(){
		var _icon = $(this).find('.icon i');
		var _height = _icon.attr('bg_height')*0.4-80;
		_icon.css('backgroundPositionY',-_height);
		$(this).hover(function(){
			var that =$(this);
			var i=0;
			var _h = that.find('.icon i').attr('bg_height')*0.4-80;
			bgChange = setInterval(function (){
				i+=-40
				that.find('.icon i').css('backgroundPositionY',i);
				if(i<=-_h){
					clearInterval(bgChange);
				}
			},30)
		}, function(){
			clearInterval(bgChange);
			_icon.css('backgroundPositionY',-_height);
		})
	})

	// section3
	$('.section3 .tab_title .item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.section3 .child').eq($(this).index()).show().siblings().hide();
	})

	// section4
	$('.section4 .slick').each(function(){
		var $itemLength = $(this).find('.item').length;
		if($itemLength%3==1){
			$(this).append('<div class="item"></div><div class="item"></div>');
		}else if($itemLength%3==2){
			$(this).append('<div class="item"></div>');
		}
	})
	$('.section4 .slick').slick({
		arrows: false,
		dots: true,
		draggable: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
	})
	$('.section4 .left .item').click(function(){
		var _bg = $(this).attr('data_bg');
		$('.section4 .bg').css('background-image', 'url('+_bg+')');
		$(this).addClass('active').siblings().removeClass('active');
		$('.section4 .child').eq($(this).index()).addClass('active').siblings().removeClass('active');
	})
	$('.section4 .prev').click(function(){
		var _slick = $(this).parents('.child').find('.slick');
		_slick.slick('slickPrev');
	})
	$('.section4 .next').click(function(){
		var _slick = $(this).parents('.child').find('.slick');
		_slick.slick('slickNext');
	})
	$('.section4 .child').each(function(){
		var _len = $(this).find('.item').length;
		if(_len < 4){
			$(this).find('.btns').hide();
		}
	})

	// section5
	var bgChange;
	$('.section5 .tab_title span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.section5 .child').eq($(this).index()).show().siblings().hide();
	})
	$('.section5 .item').each(function(){
		var _icon = $(this).find('.icon');
		var _height = _icon.attr('bg_height')*0.8-160;
		_icon.css('backgroundPositionY',-_height);
		$(this).hover(function(){
			var that =$(this);
			var i=0;
			var _h = that.find('.icon').attr('bg_height')*0.8-160;
			bgChange = setInterval(function (){
				i+=-80
				that.find('.icon').css('backgroundPositionY',i);
				if(i<=-_h){
					clearInterval(bgChange);
				}
			},30)
		}, function(){
			clearInterval(bgChange);
			_icon.css('backgroundPositionY',-_height);
		})
	})

	// section6
    $('.video_btn').click(function(){
    	var _url = $(this).attr('video_url')
    	$('.video_pop video').attr('src',_url)
        $('.video_pop video')[0].play();
        $('.video_pop').fadeIn(400);
        $('body').addClass('hidden');
    })
    $('.video_pop .close,.video_pop .bg').click(function(){
        $('.video_pop video')[0].pause();
        $('.video_pop').fadeOut(400);
        $('body').removeClass('hidden');
    })

	// section7
	$('.section7 .dot').hover(function(){
		$(this).addClass('active').siblings().removeClass('active')
	}, function(){
		$(this).removeClass('active')
	})

	// section8
	$('.section8 .slick').slick({
		arrows: false,
		dots: true,
		draggable: false,
		speed: 800,
		slidesToShow: 6,
		slidesToScroll: 6
	})
	var winWidth = $(window).width()
	$('.section8').mousemove(function(e){
		var x = e.pageX;
		if(x < winWidth / 2){
			$('.section8 .prev').addClass('show').siblings().removeClass('show');
		}else{
			$('.section8 .next').addClass('show').siblings().removeClass('show');
		}
	}).mouseleave(function(){
		$('.section8 .btn').removeClass('show');
	})
	$('.section8 .prev').click(function(){
		$('.section8 .slick').slick('slickPrev')
	})
	$('.section8 .next').click(function(){
		$('.section8 .slick').slick('slickNext')
	})
}