window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='../../../bdimg.share.baidu.com/static/api/js/share6e53.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

jQuery(document).ready(function($) {
	var PC = $(window).width() > 992,
        winWidth = $(window).width(),
        winHeight = $(window).height();

    function s7ItemHeight(obj) {
        var arrayHeight = new Array();
        for (var i = 0; i < obj.length; i++) {
            arrayHeight.push(obj.eq(i).height())
        }
        var max = Math.max.apply(null, arrayHeight);
        obj.height(max)
    }
    function itemHeight(obj) {
        var arrayHeight = new Array();
        for (var i = 0; i < obj.length; i++) {
            arrayHeight.push(obj.eq(i).find('p').height())
        }
        var max = Math.max.apply(null, arrayHeight);
        obj.find('p').height(max)
    }

	function fixedHeader(){
		$(window).scroll(function(){
			if($(window).scrollTop() > winHeight){
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

	function videoInit(){
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
	}
	$('.video_pop').length && videoInit();

	function CommContPop(){
		$('.comm_cont_pop .s_tabtit').slick({
			arrows: true,
			slidesToShow: 5,
			focusOnSelect: true,
			infinite: false,
			responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        // slidesToShow: 5,
                    }
                },
            ]
		})
		$('.comm_cont_pop').each(function(){
			var $b_tabtit = $(this).find('.b_tabtit .slick');
			if($b_tabtit.find('span').length > 8){
				$b_tabtit.slick({
					vertical: true,
					arrows: true,
					slidesToShow: 8,
					focusOnSelect: true,
					infinite: false,
				})
			}
			$b_tabtit.find('span').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				$(this).parents('.comm_cont_pop').find('.b_tabcont .b_child').eq($(this).index()).addClass('active').siblings().removeClass('active');
				// $(this).parents('.comm_cont_pop').find('.b_tabcont .b_child').eq($(this).index()).find('s_tabtit').unslick().slick({
				// 	arrows: false,
				// 	slidesToShow: 6,
				// 	focusOnSelect: true,
				// 	infinite: false,
				// })
			})
			$(this).find('.b_child').each(function(){
				var $m_tabtit = $(this).find('.m_tabtit .cell');
				if($m_tabtit.find('span').length > 8){
					$m_tabtit.slick({
						vertical: true,
						arrows: true,
						slidesToShow: 8,
						focusOnSelect: true,
						infinite: false,
					})
				}
			})
		})
		$('.js_show_pop').click(function(){
			var a = $(this).attr('data_pop_index');
			var b = $(this).attr('data_link_index');
			var c = $(this).attr('data_tab_index');
			$('body').addClass('hidden');
			$('.comm_cont_bg').addClass('active');
			$('.comm_cont_pop[data_pop_index="'+a+'"]').addClass('active');
			if($('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_tabtit').length>0){
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_tabtit span').eq(b).addClass('active').siblings().removeClass('active');
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_tabcont .b_child').eq(b).addClass('active').siblings().removeClass('active');
				if($('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_tabtit span').length > 8){
					$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_tabtit .slick').slick('slickGoTo',b-7,true);
				}
			}else{
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabtit span').eq(c).addClass('active').siblings().removeClass('active');
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabcont .s_child').eq(c).show().siblings().hide();
				if($('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabtit span').length > 5){
					$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabtit').slick('slickGoTo',c-4,true);
				}
			}
			
			if($('.comm_cont_pop[data_pop_index="'+a+'"]').find('.m_tabtit').length>0){
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.m_tabtit span').eq(c).addClass('active').siblings().removeClass('active');
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.m_tabcont .m_child').eq(c).addClass('active').siblings().removeClass('active');
				if($('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.m_tabtit span').length > 8){
					$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.m_tabtit .slick').slick('slickGoTo',c-7,true);
				}
			}else{
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabtit span').eq(c).addClass('active').siblings().removeClass('active');
				$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabcont .s_child').eq(c).show().siblings().hide();
				if($('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabtit span').length > 5){
					$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.b_child').eq(b).find('.s_tabtit').slick('slickGoTo',c-4,true);
				}
			}

				//$('.comm_cont_pop[data_pop_index="'+a+'"]').find('.s_tabtit').slick('slickGoTo',c,true);
		})
		$('.comm_cont_bg, .comm_cont_pop .icon').click(function(){
			$('body').removeClass('hidden');
			$('.comm_cont_bg').removeClass('active');
			$('.comm_cont_pop').removeClass('active');
		})
		$('.comm_cont_pop .m_tabtit span').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).parents('.m_tabtit').next().find('.m_child').eq($(this).index()).addClass('active').siblings().removeClass('active');
		})
		$('.comm_cont_pop .s_tabtit span').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).parents('.s_tabtit').next().find('.s_child').eq($(this).index()).show().siblings().hide();
		})
	}
	$('.comm_cont_pop').length && CommContPop()

	function commPosNav(){
		var a = $('.comm_pos_nav').offset().top,
			b = 72,
			c = $('.comm_pos_nav').outerHeight(),
			l = $('.sections').children().length,
			s = $('.sections .section2').offset().top;
	    $('.comm_pos_nav .item,.comm_fixed_nav .item').click(function(){
	        $('.comm_fixed_nav .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
	        if(l > 1){
		        var a = $('.sections .section'+($(this).index()+2)).offset().top - b;
		        $('html,body').animate({
		            scrollTop: a
		        }, 300)
	        }else{
	        	$('html,body').animate({
		            scrollTop: s - b
		        }, 300)
	        }
	    })
		$(window).scroll(function(){
			if($(window).scrollTop() > a){
				$('.comm_fixed_nav').addClass('active');
			}else{
				$('.comm_fixed_nav').removeClass('active');
			}
			if(l > 1){
				$('.sections .section').each(function(){
					if($(window).scrollTop() > $(this).offset().top - $(window).height()/2){
						console.log(1)
				        $('.comm_fixed_nav .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
					}
				})
			}
		})
	}
	$('.comm_pos_nav').length && commPosNav()

	function indexInit(){
		// section2
		$('.section2 .right .item').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.section2 .left .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
		})
		// section3
		$('.section3 .left .item').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).find('p').slideDown(300);
			$(this).siblings().find('p').slideUp(300);
			$('.section3 .right .imgs img').eq($(this).index()).addClass('active').siblings().removeClass('active');
		})
		// section4
		$('.section4 .tab_title span').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.section4 .tab_content .item').eq($(this).index()).show().siblings().hide();
		})
		// section5
		$('.section5 .tab_title span').click(function(){
			$(this).addClass('hover').siblings().removeClass('hover');
			$('.section5 .tab_content .item').eq($(this).index()).show().siblings().hide();
			$('.section5 .right .img_box .item').eq($(this).index()).fadeIn().siblings().hide();
		})
		// section6
		$('.section6 .items .item').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).find('.desc').slideDown(300);
			$(this).siblings().find('.desc').slideUp(300);
			var _index = $(this).index();
			if(_index == 0){
				$('.section6 .cards .card.fourth').addClass('active');
			}else{
				$('.section6 .cards .card.fourth').removeClass('active');
			}
			$('.section6 .cards .card.active').each(function(){
				$(this).find('.item').removeClass('active');
				$(this).find('.item').eq(_index).addClass('active').siblings().removeClass('active');
			})
			// $('.section6 .cards .card .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
		})
		// section7
	    $(window).load(function () {
	        s7ItemHeight($('.index_main .section7 .js_items .item'));
	    })
		var a = 0,
			b = $('.section7 .js_bg .item').length,
			c = b-1,
			d = 100 / b,
			aCan = true;
		$('.section7 .js_progress span.total').text('0'+b);
		$('.section7 .js_progress .pro').height(d*1+'%')
		$('.section7 .js_next').click(function(){
			a++;
			if(a>c){
				a=0;
			}
			s7(a);
		})
		$('.section7 .js_prev').click(function(){
			a--;
			if(a<0){
				a=c;
			}
			s7(a);
		})
		$('.section7 .js_label span').click(function(){
			a = $(this).index();
			s7(a);
		})
		function s7(i){
			e=i+1;
			$('.section7 .js_bg .item').eq(i).addClass('active').siblings().removeClass('active');
			$('.section7 .js_label span').eq(i).addClass('active').siblings().removeClass('active');
			$('.section7 .js_items .item').eq(i).show().siblings().hide();
			$('.section7 .js_progress span.curr').text('0'+e);
			$('.section7 .js_progress .pro').height(d*e+'%')
		}
		// section8
		$('.section8 .btns .box').mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	}
	$('.index_main').length && indexInit()

	function businessScene(){
		var a = $('.comm_pos_nav').offset().top,
			tip = true;
		$(window).scroll(function(){
			if($(window).scrollTop() > $('.section3 img.center_img').offset().top - winHeight){
				$('.section3 .cont').addClass('active');
			}
			if($(window).scrollTop() > a && tip){
				tip = false;
				$('.section2 .guide').addClass('active');
			}
		})
		$('.section2 .guide').click(function() {
			$(this).removeClass('active')
		});
		$('.section4 .tab_title .item').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.section4 .tab_content .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
			$('.section4 .piece').attr('class','piece piece_'+$(this).index());
		})
	}
	$('.business_scene').length && businessScene()

	function roleInit(){
	    $(window).load(function () {
	        s7ItemHeight($('.section2 .cont .item'));
	    })
		$('.js_txt span,.comm_pos_nav .item,.comm_fixed_nav .item').click(function(){
			roleChange($(this).index());
		})
		function roleChange(i){
			var a = -40 * i,
				b = -18 * i;
			$('.js_txt span').eq(i).addClass('active').siblings().removeClass('active');
			$('.comm_pos_nav .item').eq(i).addClass('active').siblings().removeClass('active');
			$('.js_txt').css('transform','translateY('+a+'px)');
			$('.js_circle').css('transform','rotate('+b+'deg)');
			$('.js_circle .dot').eq(i).addClass('active').siblings().removeClass('active');
			$('.js_dot span').eq(i).addClass('active').siblings().removeClass('active');
			$('.js_cont .item').eq(i).show().siblings().hide();
		}
	}
	$('.role_main').length && roleInit()

	function operatingInit(){
	    $('.comm_pos_nav .item,.comm_fixed_nav .item').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.section2 .cont').eq($(this).index()).show().siblings().hide();
	    })
	}
	$('.operating').length && operatingInit()

	function ideaInit(){
	    $('.comm_pos_nav .item,.comm_fixed_nav .item').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.section2 .tab_title span').eq($(this).index()).addClass('active').siblings().removeClass('active');
	        $('.section2 .tab_content .child').eq($(this).index()).show().siblings().hide();
	    })
	    $('.section2 .tab_title span').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.comm_pos_nav .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
	        $('.section2 .tab_content .child').eq($(this).index()).show().siblings().hide();
	    })
	}
	$('.idea_main').length && ideaInit()

	function caseInit(){
		$('.js_select ul li').click(function(){
			var text = $(this).text();
			$(this).parents('.box').find('input').attr('value',text);
		})
		var a = $('.section2 .left').offset().top - 100;
		$(window).scroll(function(){
			if($(window).scrollTop() + winHeight + $('.footer').outerHeight() >= $(document).height()){
				$('.case_main .section2 .left').addClass('visi');
			}else{
				$('.case_main .section2 .left').removeClass('visi');
			}
			if($(window).scrollTop() > a){
				$('.section2 .left').css({
					'position':'fixed',
					'top': 100,
				})
				$('.section2 .left .form').show();
			}else{
				$('.section2 .left').removeAttr('style');
				$('.section2 .left .form').hide();
			}
		})
		$('.section2 .right .box').each(function(){
			$(this).find('.item:gt(5)').hide();
		})
		$('.section2 .right .box h3 a').click(function(){
			$(this).text() == '查看全部'?$(this).text('收起'):$(this).text('查看全部');
			$(this).parents('.box').find('.item:gt(5)').toggle();
		})
		$('.section2 .left .a_block a').click(function(){
			var a = $(this).text();
			$('.section2 .right .box').each(function(){
				if($(this).find('h3 span').text() == a){
					$('html,body').animate({
			            scrollTop: $(this).offset().top - 100
			        }, 300)
				}
			})
		})
	}
	$('.case_main').length && caseInit()

	function productInit(){
		var a = $('.comm_pos_nav').offset().top;
		var b = 80;
	    $('.comm_pos_nav .item').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        var a = $('.sections .section'+($(this).index()+2)).offset().top - b + 5;
	        $('html,body').animate({
	            scrollTop: a
	        }, 500)
	    })
	    $('.section3 .tab_title span').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.section3 .link_box .link').eq($(this).index()).show().siblings().hide();
	        $('.section3 .img_box .img_block').eq($(this).index()).show().siblings().hide();
	    })
	    $('.section6 .slick').slick({
	    	arrows: false,
	    	infinite: false,
	    	slidesToShow: 6,
	    	// slidesToScroll: 6,
	    	dots: true,
	    })
	    $('.section6 .prev').click(function(){
	    	$('.section6 .slick').slick('slickPrev');
	    })
	    $('.section6 .next').click(function(){
	    	$('.section6 .slick').slick('slickNext');
	    })
	}
	$('.product_main').length && productInit()

	function aboutInit(){
		$('.timeline_slick').slick({
			slidesToShow: 5,
			arrows: false,
			infinite: false,
			centerMode: true,
			centerPadding: '0'
		})
		$('.section2 .img_slick').slick({
			arrows: false,
			infinite: false
		})
	    $('.section2 .prev').click(function(){
	    	$('.timeline_slick').slick('slickPrev');
	    	$('.section2 .img_slick').slick('slickPrev');
	    })
	    $('.section2 .next').click(function(){
	    	$('.timeline_slick').slick('slickNext');
	    	$('.section2 .img_slick').slick('slickNext');
	    })
	    $('.section4 .tab_title .item').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.section4 .tab_content .child').eq($(this).index()).show().siblings().hide();
	    })
	    // section3
		// ---logo box
		window.onload = function() {
			try {
				var i, et = document.getElementById('tags1').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas1', 'tags1', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer1').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags2').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas2', 'tags2', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer2').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags3').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas3', 'tags3', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer3').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags4').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas4', 'tags4', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer4').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags5').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas5', 'tags5', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer5').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags6').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas6', 'tags6', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer6').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags7').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas7', 'tags7', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer7').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags8').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas8', 'tags8', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer8').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags9').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas9', 'tags9', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer9').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags10').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas10', 'tags10', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer10').style.display = 'none';
			}
			try {
				var i, et = document.getElementById('tags11').childNodes;
				for(i in et) {
					et[i].nodeName == 'A' && et[i].addEventListener('click', function(e) {
						e.preventDefault();
					});
				}
				TagCanvas.Start('myCanvas11', 'tags11', {
					outlineColour: 'transparent',
					freezeActive: true,
					freezeDecel: true,
					reverse: true,
					zoomMin: 1,
					zoomMax: 1,
					depth: 0.8,
					dragControl: true,
					decel: 0.95,
					maxSpeed: 0.03,
					initial: [-0.2, 0]
				});
			} catch(e) {
				// something went wrong, hide the canvas container
				document.getElementById('myCanvasContainer11').style.display = 'none';
			}
		};
		var d = 0,
			l = $('.section3 .tab_content .child').length;
		$('.section3 .ope .prev').click(function(){
			d--;
			if(d<0){
				d=l-1;
			}
			s3ContChange(d);
		})
		$('.section3 .ope .next').click(function(){
			d++;
			if(d>l-1){
				d=0;
			}
			s3ContChange(d);
		})
		$('.section3 .ope ul li').click(function(){
			d = $(this).index();
			s3ContChange(d);
		})
		$('.section3 .ab_line .item').click(function(){
			d = $(this).index();
			s3ContChange(d);
		})
		function s3ContChange(d){
			$('.section3 .tab_content .child').eq(d).show().siblings().hide();
			$('.section3 .logo_box .item').eq(d).show().siblings().hide();
			$('.section3 .ope ul li').eq(d).addClass('active').siblings().removeClass('active');
			$('.section3 .ab_line .item').eq(d).addClass('active').siblings().removeClass('active');
		}
		// section3 end
	    $('.section4 .tab_title').slick({
	    	// arrows: false,
	    	infinite: false,
	    	slidesToShow: 6,
	    	focusOnSelect: true,
	    })
	    $('.section5 .slick').slick({
	    	// arrows: false,
	    	infinite: false,
	    	slidesToShow: 4,
	    	dots: true,
	    })
	    $('.section6 .tab_title .item').click(function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.section6 .tab_content .child').eq($(this).index()).show().siblings().hide();
	    })
	    $('#liMarquee').liMarquee({
            hoverstop: false,
            scrollamount: 50,
        });
	}
	$('.about_main').length && aboutInit()

	function mobileInit(){
		var a = $('.comm_pos_nav').offset().top,
			tip = true;
		$(window).scroll(function(){
			if($(window).scrollTop() > a && tip){
				tip = false;
				$('.section2 .guide').addClass('active');
			}
		})
		$('.section2 .guide').click(function() {
			$(this).removeClass('active')
		});
	    $(window).load(function () {
	        itemHeight($('.section4 .items .item'));
	    })
	    $('.section2 .tab_title span').click(function(){
	    	$(this).addClass('active').siblings().removeClass('active');
	    	$('.section2 .tab_content .child').eq($(this).index()).addClass('active').siblings().removeClass('active');
	    })
	    $('.section2 .items .item').click(function(){
	    	$(this).addClass('active').siblings().removeClass('active');
	    	$(this).parents('.child').find('.center_box .m_item').eq($(this).attr('data-index')).show().siblings().hide();
	    })
	    $('.section2 .tab_content .child').each(function(){
			var $box = $(this).find('.items .box');
			if($box.find('.item').length > 8){
				$box.slick({
					arrows: false,
					slidesToShow: 8,
					focusOnSelect: true,
					infinite: false,
					draggable: false,
				})
			}
	    })
	    var i = 0;
	    $('.section2 .btn.prev').click(function(){
	    	i = $(this).parents('.child').find('.items .item.active').index();
	    	i--;
	    	if(i<0){
	    		i=0
	    	}
	    	$(this).parents('.child').find('.items .item').eq(i).addClass('active').siblings().removeClass('active');
	    	$(this).parents('.child').find('.center_box .m_item').eq(i).show().siblings().hide();
	    	$(this).parents('.child').find('.items .box').slick('slickPrev')
	    })
	    $('.section2 .btn.next').click(function(){
	    	i = $(this).parents('.child').find('.items .item.active').index();
	    	i++;
	    	if(i>$(this).parents('.child').find('.items .item').length-1){
	    		i=$(this).parents('.child').find('.items .item').length-1
	    	}
	    	$(this).parents('.child').find('.items .item').eq(i).addClass('active').siblings().removeClass('active');
	    	$(this).parents('.child').find('.center_box .m_item').eq(i).show().siblings().hide();
	    	$(this).parents('.child').find('.items .box').slick('slickNext')
	    })
	}
	$('.mobile_main').length && mobileInit()

	function intelligentInit(){
		var a = $('.comm_pos_nav').offset().top,
			tip = true;
		$(window).scroll(function(){
			if($(window).scrollTop() > a && tip){
				tip = false;
				$('.section2 .guide').addClass('active');
			}
		})
		$('.section2 .guide').click(function() {
			$(this).removeClass('active')
		});
		$('.section2 .main .tab_title .dot').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.comm_pos_nav .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
			$('.section2 .main .tab_content .child').eq($(this).index()).show().siblings().hide();
		})
		$('.comm_pos_nav .item,.comm_fixed_nav .item').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.section2 .main .tab_title .dot').eq($(this).index()).addClass('active').siblings().removeClass('active');
			$('.section2 .main .tab_content .child').eq($(this).index()).show().siblings().hide();
		})
	}
	$('.intelligent_main').length && intelligentInit()

	function digitizingInit(){
		var a = $('.comm_pos_nav').offset().top,
			tip = true;
		$(window).scroll(function(){
			if($(window).scrollTop() > a && tip){
				tip = false;
				$('.section2 .guide').addClass('active');
			}
		})
		$('.section2 .guide').click(function() {
			$(this).removeClass('active')
		});
	}
	$('.digitizing_main').length && digitizingInit()

})





