//from ling

$(document).ready(function(){

    //计算轮播图的高度
    //var imgH = document.querySelector('.banner');
    //var page1Bg = document.querySelector(".page1Bg");
    //if(imgH && page1Bg){
    //    var newImg = new Image();
    //    newImg.src = "/pc/newimg/banner01.png";
    //    newImg.onload = function(){
    //        page1Bg.style.height = imgH.offsetHeight+"px";
    //    };
    //}


    var adv = {
        canAuto:true,  //设置是否可以自动轮播
        IE8:navigator.userAgent.indexOf("MSIE 8.0")>-1,
        init:function() {
            var self=this;
            $(".imgs").on("mouseover",function(){
                self.canAuto=false;
            });
            $(".imgs").on("mouseout",function(){
                self.canAuto=true;
            });
            self.automove();

            $(".indexs").on("click",function(){
                var e=window.event||arguments[0];
                var target=e.srcElement||e.target;
                if(target.nodeName=="LI"){
                    $(".indexs>li").each(function(){
                       $(this).attr("class","");
                    });
                    target.className="page1_hover";
                    var n=parseInt(target.getAttribute("data-t"));
                    self.move(n);
                }
            });
        },
        automove:function(){
            var self=this;
            self.timer=setTimeout(function(){
                if(self.canAuto){ //如果启用了自动轮播
                    self.moveStep(1); //才移动一次
                }else{ //如果禁用了自动轮播
                    self.automove(); //就反复等待
                }
            },self.WAIT);
        },
        move:function(n){  // n表示要移动的li个数,左移为正，右移为负
            clearTimeout(this.timer);
            this.timer=null;
            $(".imgs>li").each(function(){
                $(this).attr("class","none");
            });
            $(".imgs>li[data-i='"+n+"']").attr("class","block");
            this.automove();
        },
        moveStep:function(n) {  //既能支持自动移动，也能支持手动移动，n为li移动的个数，向左为正，向右为负
            var self=this;
            var $li = $(".imgs>li.block");
            if($li[0]){
                var data_i = parseInt($li.attr("data-i"));
                $(".imgs>li[data-i='"+((data_i+n)>4?1:data_i+n)+"']").attr("class","block");
                $li.attr("class","none");
                //点击切换图片的小圆点的显示效果
                var index = parseInt($(".imgs>li.block").attr("data-i"));
                $(".indexs>li").attr("class","");
                $(".indexs>li[data-t='"+(index-n)+"']").attr("class","page1_hover");
            }else{
                $(".imgs>li").first().attr("class","block");
            }
            self.timer=setTimeout(function(){self.moveStep(1);},4000);
        }
    }
    adv.init();
    // page1图片自动轮播
    // 模拟后台数据以备适应之后可能采取的分布式布局
    // var imgs = [
    //     {"i":0,"img":"img/page1_na1.png","bg":"transparent url(img/pageBg01.jpg) no-repeat center center"},
    //     {"i":1,"img":"img/page1_na2.png","bg":"transparent url(img/pageBg02.jpg) no-repeat center center"},
    //     {"i":2,"img":"img/page1_na3.png","bg":"transparent url(img/pageBg03.jpg) no-repeat center center"},
    //     {"i":3,"img":"img/page1_na4.png","bg":"transparent url(img/pageBg04.jpg) no-repeat center center"}
    // ];
    // var adv = {
    //     LIWIDTH:1366,
    //     DURATION:500,  // 移动 ul 的动画总时长
    //     WAIT:1500,     //自动轮播之间等待的时长
    //     STEPS:150,     //动画移动的总步数
    //     timer:null,    //保存当前正在播放的定时器序号
    //     canAuto:true,  //设置是否可以自动轮播
	 //    IE8:navigator.userAgent.indexOf("MSIE 8.0")>-1,
	 //    IE8STEPS:5,
    //     // 初始化方法
    //     init:function(){
    //         //每个广告图片的宽度
    //         var self=this;
    //         self.updateView();
    //         //当鼠标进出广告区域时，启用或禁用自动轮播
    //         $(".imgs").on("mouseover",function(){
    //             self.canAuto=false;
    //         });
    //         $(".imgs").on("mouseout",function(){
    //             self.canAuto=true;
    //         });
    //         self.automove();//初始化就启动自动轮播
    //
    //         $(".indexs").on("click",function(){
    //             var e=window.event||arguments[0];
    //             var target=e.srcElement||e.target;
    //             if(target.nodeName=="LI"){
    //                 // $(".pageBg").attr("src","img/pageBg"+(target.getAttribute("data-t"))+".jpg");
    //                 $(".indexs>.hover").className="";
    //                 target.className="page1_hover";
    //                 var n=target.getAttribute("data-t")-1-imgs[0].i;
    //                 self.move(n);
    //             }
    //         });
    //     },
    //     // 在移动前后，将imgs数组的内容刷新到页面
    //     updateView:function(){
    //         for(var i=0,lis=[],idxs=[];i<imgs.length;i++){
    //             lis[i]="<li class='none' data-i='"+imgs[i].i+"' style='background:"+imgs[i].bg+"'><img src='"+imgs[i].img+"'></li>";
    //             idxs[i]="<li data-t='"+(i+1)+"'></li>";
    //         }
    //         $(".imgs").html(lis.join(""));
    //         $(".indexs").html(idxs.join(""));
    //         //找到.indexs下的class为hover的li，清除class
    //         $(".indexs>.hover").className="";
    //         $(".indexs>li")[imgs[0].i].className="page1_hover";
    //         var $li = $(".imgs").children("li");
    //         !$li.hasClass("block")&&$li.first().attr("class","block");
    //         // var width=$(".imgs>li").width();
    //         // $(".imgs").css("width",width*imgs.length+"px"); //计算ul的总宽度
    //     },
    //     //自动移动的方法
    //     automove:function(){
    //         var self=this;
    //         self.timer=setTimeout(function(){
    //             if(self.canAuto){ //如果启用了自动轮播
    //                 self.moveStep(1); //才移动一次
    //             }else{ //如果禁用了自动轮播
    //                 self.automove(); //就反复等待
    //             }
    //         },self.WAIT);
    //     },
    //     // //移动任意个li的方法——手动轮播
    //     move:function(n){  // n表示要移动的li个数,左移为正，右移为负
    //         clearTimeout(this.timer);
    //         this.timer=null;
    //         alert(1);
    //         // if(n<0){
    //         //     imgs=imgs.splice(imgs.length-Math.abs(n),Math.abs(n)).concat(imgs);
    //         //     this.updateView();
    //         //     // $(".imgs").css("left",n*this.LIWIDTH+"px");
    //         // }
    //         // this.moveStep(n);
    //
    //     },
        // // 将ul移动一步
        // moveStep:function(n){  //既能支持自动移动，也能支持手动移动，n为li移动的个数，向左为正，向右为负
        //     var self=this;
        //     var $li = $(".imgs").children("li.block");
        //     var i = $(".imgs").children("li.block").attr("data-i");
        //     if($li.attr("data-i")!=3){
        //         $li.attr("class","none");
        //         $li.next().attr("class","block");
        //     }else{
        //         $li.attr("class","none");
        //         $(".imgs").children("li").first().attr("class","block");
        //     }
            // var step=self.LIWIDTH*n/self.STEPS;
            // var IE8step=self.LIWIDTH*n/self.IE8STEPS;
            // var left=parseFloat($(".imgs").css("left"))-step;
            // var IE8left=parseFloat($(".imgs").css("left"))-IE8step;
            // if(this.IE8){
            //     $(".imgs").css("left",IE8left+"px");
            // }else{
            //     $(".imgs").css("left",left+"px");
            // }
            // if(n>0&&left>-self.LIWIDTH*n||n<0&&left<0){
            //     self.timer=setTimeout(function(){self.moveStep(n);},2000);
            // }else{
            //     $(".imgs").css("left","0px");
            //     self.automove();
            //     if(n>0){
            //         imgs=imgs.concat(imgs.splice(0,n));
            //         self.updateView();
            //     }
            // }
        // }
    // }
    // adv.init();

    // page2页面手机屏幕图片自动轮换
    // 模拟后台数据以备适应之后可能采取的分布式布局
    var show = [
        {"i":0,"img":"/pc/img/page2_phone01.jpg"},
        {"i":1,"img":"/pc/img/page2_phone02.jpg"},
        {"i":2,"img":"/pc/img/page2_phone03.jpg"},
        {"i":3,"img":"/pc/img/page2_phone04.jpg"},
        {"i":4,"img":"/pc/img/page2_phone05.jpg"},
        {"i":5,"img":"/pc/img/page2_phone06.jpg"},
        {"i":6,"img":"/pc/img/page2_phone07.jpg"},
        {"i":7,"img":"/pc/img/page2_phone08.jpg"},
        {"i":8,"img":"/pc/img/page2_phone09.jpg"}
    ];
    var page2Show = {
        // 在移动前后，将imgs数组的内容刷新到页面
        updateView:function(){
            for(var i=0,lis=[];i<show.length;i++){
                i != 0 ? (lis[i]="<li data-i='"+show[i].i+"'><img class='none' src='"+show[i].img+"'></li>") : (lis[i]="<li data-i='"+show[i].i+"'><img class='block' src='"+show[i].img+"'></li>");
                
            }
            $(".page2_phone_show").html(lis.join(""));
        },
        init:function(){
            this.updateView();
            $(".page2_index_ul").on("click","div",function(){
                var e=window.event||arguments[0];
                var target=e.srcElement||e.target;
                if(target.nodeName=="DIV"){
                    var i = target.getAttribute("data-i");
                    var img = $(".page2_phone_show").find("img")[i];
                    $(".page2_phone_show").find(".block").attr("class","none");
                    img.getAttribute("class") == "none" && img.setAttribute("class","block");
                }
            });
        }
    }
    page2Show.init();
    // var page2Show = {
    //     LIWIDTH:306,
    //     DURATION:500,  // 移动 ul 的动画总时长
    //     WAIT:1500,     //自动轮播之间等待的时长
    //     STEPS:150,     //动画移动的总步数
    //     timer:null,    //保存当前正在播放的定时器序号
    //     canAuto:true,  //设置是否可以自动轮播
    //     IE8:navigator.userAgent.indexOf("MSIE 8.0")>-1,
    //     IE8STEPS:40,
    //     // 初始化方法
    //     init:function(){
    //         //每个广告图片的宽度
    //         var self=this;
    //         self.updateView();
    //         //当鼠标进出广告区域时，启用或禁用自动轮播
    //         $(".page2_phone_show").on("mouseover",function(){
    //             self.canAuto=false;
    //         });
    //         $(".page2_phone_show").on("mouseout",function(){
    //             self.canAuto=true;
    //         });
    //         self.automove();//初始化就启动自动轮播

    //         $(".page2_index_ul>li>div").on("click",function(){
    //             var e=window.event||arguments[0];
    //             var target=e.srcElement||e.target;
    //             if(target.nodeName=="DIV"){
    //                 $(".indexs>.hover").className="";
    //                 target.className="hover";
    //                 var n=target.getAttribute("data-i")-1-show[0].i;
    //                 self.move(n);
    //             }
    //         });
    //     },
    //     // 在移动前后，将imgs数组的内容刷新到页面
    //     updateView:function(){
    //         $(".page2_phone_show").css("width",this.LIWIDTH*show.length+"px"); //计算ul的总宽度

    //         for(var i=0,lis=[];i<show.length;i++){
    //             lis[i]="<li data-i='"+show[i].i+"'><img src='"+show[i].img+"'></li>";
    //         }
    //         $(".page2_phone_show").html(lis.join(""));
    //     },
    //     //自动移动的方法
    //     automove:function(){
    //         var self=this;
    //         self.timer=setTimeout(function(){
    //             if(self.canAuto){ //如果启用了自动轮播
    //                 self.moveStep(1); //才移动一次
    //             }else{ //如果禁用了自动轮播
    //                 self.automove(); //就反复等待
    //             }
    //         },self.WAIT);
    //     },
    //     //移动任意个li的方法——手动轮播
    //     move:function(n){  // n表示要移动的li个数,左移为正，右移为负
    //         clearTimeout(this.timer);
    //         this.timer=null;
    //         if(n<0){
    //             show=show.splice(show.length-Math.abs(n),Math.abs(n)).concat(show);
    //             this.updateView();
    //             $(".page2_phone_show").css("left",n*this.LIWIDTH+"px");
    //         }
    //         this.moveStep(n);
    //     },
    //     // 将ul移动一步
    //     moveStep:function(n){  //既能支持自动移动，也能支持手动移动，n为li移动的个数，向左为正，向右为负
    //         var self=this;
    //         var step=self.LIWIDTH*n/self.STEPS;
    //         var IE8step=self.LIWIDTH*n/self.IE8STEPS;
    //         var left=parseFloat($(".page2_phone_show").css("left"))-step;
    //         var IE8left=parseFloat($(".page2_phone_show").css("left"))-IE8step;
    //         if(this.IE8){
    //             $(".page2_phone_show").css("left",IE8left+"px");
    //         }else{
    //             $(".page2_phone_show").css("left",left+"px");
    //         }
    //         if(n>0&&left>-self.LIWIDTH*n||n<0&&left<0){
    //             self.timer=setTimeout(function(){self.moveStep(n);},self.DURATION/self.STEPS);
    //         }else{
    //             $(".page2_phone_show").css("left","0px");
    //             self.automove();
    //             if(n>0) {
    //                 show = show.concat(show.splice(0, n));
    //                 self.updateView();
    //             }
    //         }
    //     }
    // }
    // page2Show.init();

    // page3上半部分交互功能——依次显示并有放大后还原效果
    var page3Top = {
        ua : null,
        scroll : function(){
            this.ua = navigator.userAgent;
            var IE9 = this.ua.indexOf("MSIE 9.0")>-1?true:false;
            var IE8 = this.ua.indexOf("MSIE 8.0")>-1?true:false;
            var $li = $(".page3_ul1>li");
            var n;
            $(window).scroll(function () {
                if($(window).scrollTop()>1400&&$(window).scrollTop()<2475){
                    n = 0.1;
                    $li.each(function(){
                        n+=0.1;
                        $(this).css({
                            "animation":"change 0.3s linear "+n+"s 1 normal forwards",
                            "-webkit-animation":"change 0.3s linear "+n+"s 1 normal forwards",
                            "-moz-animation":"change 0.3s linear "+n+"s 1 normal forwards",
                            "-o-animation":"change 0.3s linear "+n+"s 1 normal forwards",
                            "-ms-animation":"change 0.3s linear "+n+"s 1 normal forwards"
                        });
                    });
                }else{
                    $li.css({
                        "animation":"back 0.1s linear 0s 1 normal forwards",
                        "-webkit-animation":"back 0.1s linear 0s 1 normal forwards",
                        "-moz-animation":"back 0.1s linear 0s 1 normal forwards",
                        "-o-animation":"back 0.1s linear 0s 1 normal forwards",
                        "-ms-animation":"back 0.1s linear 0s 1 normal forwards"
                    });
                };
                //下拉显示的导航条
                if($(window).scrollTop()>560){
                    $(".navScroll").css("display","block");
                }else{
                    $(".navScroll").css("display","none");
                }
            });
            // IE9下实现动画效果
            //自定义animate动画方法
            function animate(className,delay,steps,sped){
                var num = 0; //控制scrollTop在1600到2750范围内只触发一次动画效果
                $(window).scroll(function () {
                    var timer = null;
                    if ($(window).scrollTop() > 1400 && $(window).scrollTop() < 2475) {
                        num++; //每次触发都+1，这样在num==1的条件下执行的动画就只启动一次
                        var STEPS = steps; //动画执行总步数
                        var LONG = 10; //总距离
                        var OPACITY = 1; //透明度初始值
                        var $img = $li.find("img");//获取img
                        var img_width = parseInt($img.width());//获取img宽
                        var img_height = parseInt($img.height());//获取img高
                        var li_width = parseInt($li.width());//获取li宽
                        var li_height = parseInt($li.height());//获取li高
                        var img_width_aft = parseInt($img.width()) + 10;//运动结束后img宽度
                        var img_height_aft = parseInt($img.height()) + 10;//运动结束后img高度
                        var li_width_aft = parseInt($li.width()) + 10;//运动结束后li宽度
                        var li_height_aft = parseInt($li.height()) + 10;//运动结束后li宽度
                        if(IE9)var opacity = parseInt($li.css("opacity"));//获取li透明度
                        var flag = true;//控制元素放大和缩小的开关
                        if (num == 1) {
                            if(IE9)$li.css("opacity", "0");//每次开启定时器前先隐藏图片
                            var timestamp=new Date().getTime();//为延时执行动画而制作时间戳
                            timer = setInterval(function () {
                                if((new Date().getTime()-timestamp)>=delay){//动画执行前的等待时间
                                    if (flag) {
                                        //img和li的宽度高度逐渐增大，li的透明度逐渐加大
                                        img_width = img_width + LONG / STEPS;
                                        img_height = img_height + LONG / STEPS;
                                        li_width = li_width + LONG / STEPS;
                                        li_height = li_height + LONG / STEPS;
                                        opacity = opacity + OPACITY / STEPS;
                                        if (img_width <= 225) {
                                            $("."+className).css("width", img_width);
                                            $("."+className).css("height", img_height);
                                            $("."+className).parent("li").css("width", li_width);
                                            $("."+className).parent("li").css("height", li_height);
                                            if(IE9)$("."+className).parent("li").css("opacity", opacity);
                                        } else {
                                            flag = false;//增大到临界值时关闭增大动画的开关
                                        }
                                    } else {
                                        //img和li的宽度高度逐渐还原
                                        img_width_aft = img_width_aft - LONG / STEPS;
                                        img_height_aft = img_height_aft - LONG / STEPS;
                                        li_width_aft = li_width_aft - LONG / STEPS;
                                        li_height_aft = li_height_aft - LONG / STEPS;
                                        if (img_width_aft >= 215) {
                                            $("."+className).css("width", img_width_aft);
                                            $("."+className).css("height", img_height_aft);
                                            $("."+className).parent("li").css("width", li_width_aft);
                                            $("."+className).parent("li").css("height", li_height_aft);
                                        } else{
                                            //完全还原后关闭定时器
                                            clearInterval(timer);
                                            timer = null;
                                        }
                                    }
                                }
                            },sped);
                        }
                    }else{
                        //非图片显示的可视区域时关闭定时器并重置控制动画执行次数的开关num
                        clearInterval(timer);
                        timer = null;
                        num = 0;
                    };
                });
            }
            if(IE9){
                animate("yun",500,30,0);
                animate("che",600,30,0);
                animate("xie",700,30,0);
                animate("fan",800,30,0);
                animate("shi",900,30,0);
            }
            //IE8下显示和隐藏
            if(IE8){
                animate("yun",500,15,5);
                animate("che",700,15,5);
                animate("xie",900,15,5);
                animate("fan",1100,15,5);
                animate("shi",1300,15,5);
            }
        }
    }
    page3Top.scroll();

    // page3下半部分交互功能——自动轮播效果
    var images = [
        {"i":0,"img":"/pc/img/building.jpg","text":"房地产","style":'width:30px; height:33px; background:url("/pc/img/page_sprinte.png") no-repeat -80px -53px;top:30px;'},
        {"i":1,"img":"/pc/img/securities.jpg","text":"证券业","style":'width:30px;height:25px;background:url("/pc/img/page_sprinte.png") no-repeat -39px -56px;top:34px;'},
        {"i":2,"img":"/pc/img/medicine.jpg","text":"医药业","style":'width:30px;height:31px;background:url("/pc/img/page_sprinte.png") no-repeat 0px -53px;top:33px;'},
        {"i":3,"img":"/pc/img/finance.jpg","text":"金融业","style":'width:29px;height:27px;background:url("/pc/img/page_sprinte.png") no-repeat -123px -56px;top:32px;'},
        {"i":4,"img":"/pc/img/bank.jpg","text":"银行业","style":'width:30px;height:23px;background:url("/pc/img/page_sprinte.png") no-repeat -164px -61px;top:35px;'},
        {"i":5,"img":"/pc/img/manufacture.jpg","text":"制造业","style":'width:30px;height:29px;background:url("/pc/img/page_sprinte.png") no-repeat -205px -57px;top:32px;'}
        ];
    var page3Bottom = {
        init:function(){
            var self=this;
            self.updateView();
            self.automove();//初始化就启动自动轮播
        },
        // 在移动前后，将images数组的内容刷新到页面
        updateView:function(){
            var self=this;
            for(var i=0,lis=[];i<images.length;i++){
                lis[i]="<li class='page3_ul2_li"+i+"' data-i='"+images[i].i+"' data-t='"+(i+1)+"'><img src='"+images[i].img+"'><span style='"+images[i].style+"'></span><p>"+images[i].text+"</p></li>";
            }
            $(".page3_ul2").html(lis.join(""));
        },
        automove:function(){
            setInterval(function(){
                $(".page3_ul2>li").each(function(){
                    var self = this;
                    switch($(self).attr("data-i")){
                        case "0" :
                            $(self).attr("class","page3_ul2_li"+5+"");
                            $(self).attr("data-i","5");
                            break;
                        case "1" :
                            $(self).attr("class","page3_ul2_li"+0+"");
                            $(self).attr("data-i","0");
                            break;
                        case "2" :
                            $(self).attr("class","page3_ul2_li"+1+"");
                            $(self).attr("data-i","1");
                            break;
                        case "3" :
                            $(self).attr("class","page3_ul2_li"+2+"");
                            $(self).attr("data-i","2");
                            break;
                        case "4" :
                            $(self).attr("class","page3_ul2_li"+3+"");
                            $(self).attr("data-i","3");
                            break;
                        case "5" :
                            $(self).attr("class","page3_ul2_li"+4+"");
                            $(self).attr("data-i","4");
                            break;
                    }
                });
            },3000);
        },
    }
    // page3下半部分交互功能——点击切换效果
    // var images = [
    //     {"i":0,"img":"img/building.png","text":"房地产","style":'width:30px; height:33px; background:url("img/page_sprinte.jpg") no-repeat -164px -56px;top:30px;'},
    //     {"i":1,"img":"img/securities.png","text":"证券业","style":'width:30px;height:25px;background:url("img/page_sprinte.jpg") no-repeat -128px -59px;top:34px;'},
    //     {"i":2,"img":"img/medicine.png","text":"医药业","style":'width:30px;height:31px;background:url("img/page_sprinte.jpg") no-repeat -93px -56px;top:33px;'},
    //     {"i":3,"img":"img/finance.png","text":"金融业","style":'width:29px;height:27px;background:url("img/page_sprinte.jpg") no-repeat -201px -60px;top:32px;'},
    //     {"i":4,"img":"img/bank.png","text":"银行业","style":'width:30px;height:23px;background:url("img/page_sprinte.jpg") no-repeat 0 -97px;top:35px;'},
    //     {"i":5,"img":"img/manufacture.png","text":"制造业","style":'width:30px;height:29px;background:url("img/page_sprinte.jpg") no-repeat -39px -97px;top:32px;'}
    // ];
    // var page3Bottom = {
    //     init:function(){
    //         var self=this;
    //         self.updateView();
    //     },
    //     // 在移动前后，将images数组的内容刷新到页面
    //     updateView:function(){
    //         var self=this;
    //         for(var i=0,lis=[];i<images.length;i++){
    //             lis[i]="<li class='page3_ul2_li"+i+"' data-i='"+images[i].i+"' data-t='"+(i+1)+"'><img src='"+images[i].img+"'><span style='"+images[i].style+"'></span><p>"+images[i].text+"</p></li>";
    //         }
    //         $(".page3_ul2").html(lis.join(""));
    //         $(".page3_ul2>li").on("click",function(){
    //             var n=$(this).attr("data-t")-3;
    //             self.move(n);
    //         });
    //     },
    //     //移动任意个li的方法——手动轮播
    //     move:function(n){  // n表示要移动的li个数,左移为正，右移为负
    //         if(n<0) {
    //             images = images.splice(images.length - Math.abs(n), Math.abs(n)).concat(images);
    //             this.updateView();
    //         }else{
    //             images=images.concat(images.splice(0,n));
    //             this.updateView();
    //         }
    //     },
    // }
    page3Bottom.init();

    //IE8下页面底部文字居中问题
    var IE8 = navigator.userAgent.indexOf("MSIE 8.0")>-1;
    if(IE8){
        var $ul = $(".footer_ul");
        var $li1 = $(".footer_ul_li1");
        var $li2 = $(".footer_ul_li2");
        $ul.css("padding-left",($ul.width()-$li1.width()-parseInt($li1.css("padding-right"))-$li2.width())/2 + "px");
    };
});
