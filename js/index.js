$(function(){
	
	//top
	$(".top a").hover(function(){
		$(this).css("color","#ff6f6f");                                                                                                                                                                                                                                                                                                                                                                                                                          
	},function(){
		$(this).css("color","#666666");
	});
	
	
	
	
	//top_img
	$(".top_dis").click(function(){
		$(".top_img").remove();
	});	
	
	
	
	//搜索框默认提示
	var inp = $(".search_input #inp");
	var timer = null;
	var notice = ["美心月饼","nova3","洗发水","巴黎水","华为","ipad","电风扇"];
	//显示默认值
	var index = 0;
	inp.val(notice[index]);
	//搜索框里的提示自动切换
	autoMove();
	function autoMove(){
		if(inp.val()===""||inp.val()===notice[index]){
			timer = setInterval(function(){
				index++
				if(index>=notice.length){
					index=0;
				}
				inp.val(notice[index]);
			},2000)
		}
	}
	//聚焦时停止提示,并清空
	inp.focus(function(){
		clearInterval(timer);
		if($(this).val()==notice[index]){
			$(this).val("");
		}
	});
	//失去焦点时继续提示
	inp.blur(function(){
		autoMove();
		if($(this).val()==""){
			$(this).val()=notice[index];
		};
		$("#data_list").css("display","none");
	});
	
	
	
	
	
	//点击列表，出现对应的内容
	$(".big_title").mouseover(function(){
		$(this).next().css("display","block");
//		$(this).css("background","#888888");
	});
	$(".big_list").mouseover(function(){
		$(this).css("display","block");
//		$(this).prev().css("background","url(../img/list_bg_1.jpg)  #888888 no-repeat 16px center");
	})
	$(".big_list").mouseout(function(){
		$(".big_list").css("display","none");
//		$(this).prev().css("background","url(../img/list_bg_1.jpg) no-repeat 16px center");
	})
	$(".dis_wrap").mouseout(function(){
		$(".big_list").css("display","none");
	});
	
	
	
	
	
	
	
	//content_one滚动内容（切换）
	//右边按钮
	$(".content_one_btn_right").click(function(){
		$(".content_one_list").animate({
			left:-960,
			top:0
		},1000,"linear",function(){
			$(".content_one_btn_right").css("display","none");
			$(".content_one_btn_left").css("display","block");
		});
		
	});
	//左边按钮
	$(".content_one_btn_left").click(function(){
		$(".content_one_list").animate({
			left:0,
			top:0
		},1000,"linear",function(){
			$(".content_one_btn_left").css("display","none");
			$(".content_one_btn_right").css("display","block");
		});
	});
	
	
	
	
	
	
	//点击缩放图片
	$(".content_two img").hover(function(){
		$(this).addClass("scale");
	},function(){
		$(this).removeClass("scale");
	});
	
	
	
	
		//按进度条轮播
		var content_two_img_index = 0;  //图片下标
		var content_two_pro_index = 0;  //进度条下标
		var content_two_lits = $(".content_two .content_two_banner").children(); //图片的个数
		const content_two_imgWidth= parseFloat($(".content_two .content_two_banner li img").css("width")); //图片的宽度
		//外层滚动条的的宽度
		var outerProWidth = parseFloat($(".content_two .content_two_carouse_btn .outer_pro").css("width"));
		var content_two_timer = null;
		//图片轮播函数
		function content_two_autoMove(){
			content_two_img_index++;
			if(content_two_img_index >= content_two_lits.length){
				content_two_img_index = 0;
			}
			//$(".content_two_banner").css("left",content_two_img_index*content_two_imgWidth*(-1));
			$(".content_two .content_two_banner").animate({
				left:content_two_img_index*content_two_imgWidth*(-1)
			},200,"linear")
		}
	
		//总体播放
		function carousel_autoMove(){
			//定时器
			 content_two_timer = setInterval(function(){		
					//当前里层滚动条的宽度
					var innerProWidth = parseFloat($(".content_two .inner_pro").eq(content_two_pro_index).css("width"));
					innerProWidth+=2;
					if(innerProWidth >= outerProWidth){
						innerProWidth = outerProWidth;
						content_two_autoMove();
						$(".content_two .inner_pro").eq(content_two_pro_index).css("width",0)
						content_two_pro_index++;
						if(content_two_pro_index >= $(".content_two .content_two_carouse_btn").children().length){
							content_two_pro_index = 0;
						}
						return;	
					}
					$(".content_two .inner_pro").eq(content_two_pro_index).css("width",innerProWidth);
			},200);
		}
		carousel_autoMove();
		//鼠标放上去和移开
		$(".content_two_left").hover(function(){
			clearInterval(content_two_timer);
			$(".content_two .inner_pro").eq(content_two_pro_index).css("width",outerProWidth);
		},function(){
			carousel_autoMove();
		});
		
		
		
		
	
	
	
	
	
	
	
	
		//按进度条轮播
		var content_two_img_index_2 = 0;  //图片下标
		var content_two_pro_index_2 = 0;  //进度条下标
		var content_two_lits_2= $(".content_type .content_two_banner").children(); //图片的个数
		const content_two_imgWidth_2= parseFloat($(".content_type .content_two_banner li img").css("width")); //图片的宽度
		//外层滚动条的的宽度
		var outerProWidth_2 = parseFloat($(".content_type .content_two_carouse_btn .outer_pro").css("width"));
		var content_two_timer_2 = null;
		//图片轮播函数
		function content_two_autoMove_2(){
			content_two_img_index_2++;
			// if(content_two_img_index_2 >= content_two_lits_2.length){
			// 	content_two_img_index_2 = 0;
			// }
			if(content_two_img_index_2 >=3){
				content_two_img_index_2 = 0;
			}
			//$(".content_two_banner").css("left",content_two_img_index*content_two_imgWidth*(-1));
			$(".content_type .content_two_banner").animate({
				left:content_two_img_index_2*content_two_imgWidth_2*(-1)
			},200,"linear")
		}
	
		//总体播放
		function carousel_autoMove_2(){
			//定时器
			 content_two_timer_2 = setInterval(function(){		
					//当前里层滚动条的宽度
					var innerProWidth_2 = parseFloat($(".content_type .inner_pro").eq(content_two_pro_index_2).css("width"));
					innerProWidth_2+=2;
					if(innerProWidth_2 >= outerProWidth_2){
						innerProWidth_2 = outerProWidth_2;
						content_two_autoMove_2();
						$(".content_type .inner_pro").eq(content_two_pro_index_2).css("width",0)
						content_two_pro_index_2++;
						// if(content_two_pro_index_2 >= $(".content_type .content_two_carouse_btn").children().length){
						// 	content_two_pro_index_2 = 0;
						// }
						if(content_two_pro_index_2 >=3){
							content_two_pro_index_2 = 0;
						}
						return;	
					}
					$(".content_type .inner_pro").eq(content_two_pro_index_2).css("width",innerProWidth_2);
			},300);
		}
		carousel_autoMove_2();
		//鼠标放上去和移开
		$(".content_two_left").hover(function(){
			clearInterval(content_two_timer_2);
			$(".content_type .inner_pro").eq(content_two_pro_index_2).css("width",outerProWidth_2);
		},function(){
			carousel_autoMove_2();
		});
	
	
	
	
	
	
	
	
	
	
		//鼠标放上去，图片变模糊
		$(".content_type_right_three img").hover(function(){
			$(this).animate({
				opacity:0.6
			},300,"linear")
		},function(){
			$(this).animate({
				opacity:1
			},300,"linear")
		});
	
	
	
	
	//楼层效果
	//滚动
	var flag = true;
	$(window).scroll(function(){
		if(flag){
			var scrollTop = $(this).scrollTop();		
			if(scrollTop>1200){
				$(".floor").fadeIn();
			}else{
				$(".floor").fadeOut();
			};
			//当主界面被某类商品占据时，导航发生改变
			$(".content_type_wrap").find(".content_type_one").each(function(index){
				var _top = $(this).offset().top;
				if(scrollTop >= _top-$(this).height()/2){
					$(".floor").find("a").eq(index).addClass("floorFocus").siblings().removeClass("floorFocus");
				}
			});
		}
		
	});
	//点击导航是切换到对应的内容
	$(".floor").find("a:not(:last)").click(function(){
		flag = false;
		$(this).addClass("floorFocus").siblings().removeClass("floorFocus");
		var index = $(this).index();
		var _top = $(".content_type_wrap").find(".content_type_one").eq(index).offset().top;
		$("html,body").animate({"scrollTop":_top},500,function(){
			flag = true;
		})
	})
	
	//回到顶部
	$(".floor").find("a:last").click(function(){
		flag = flag;
		$("html,body").animate({"scrollTop":0},500,function(){
			flag = true;
		})
	})
	

	

	//吸顶菜单
	var menu = document.getElementsByClassName("top_menu")[0];
	window.onscroll = function(){
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		if(top >=500){
			menu.style.display = "block";
		}else{
			menu.style.display = "none";
		}
	}
	
	
	
	
	
	
	
	
	
})

