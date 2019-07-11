$(function(){
				// 轮播图左侧的导航栏隐藏内容
				var show=document.getElementsByClassName("show");
				var prev_a=document.getElementById("prev");
				var next_a=document.getElementById("next");
				for(var show1 of show){
					show1.onmouseover=function(){
						var show1=this;
						var children=show1.children[1];
						children.style.display="block";
						prev_a.style.display="none";
					}
					show1.onmouseout=function(){
						var show1=this;
						var children=show1.children[1];
						children.style.display="none";
						prev_a.style.display="block";
					}
				}
	
				// 定时器自定义播放轮播图
				var f_b=document.getElementById("first_banner");
				var R_chart=document.getElementsByClassName("R_chart")[0];
				var left_item=document.getElementById("left_item");
				var pic_list=document.querySelectorAll(".picture_list>ul>li>a");
				// 让按钮跟随图片移动
				function leave(){
					if(Math.abs(moved)==0){
						pic_list[0].className="active";
					}else{
						pic_list[0].className="";
					}
					if(Math.abs(moved)==1){
						pic_list[1].className="active";
					}else{
						pic_list[1].className="";
					}
					if(Math.abs(moved)==2){
						pic_list[2].className="active";
					}else{
						pic_list[2].className="";
					}
					if(Math.abs(moved)==3||Math.abs(moved==4)){
						pic_list[3].className="active";
					}else{
						pic_list[3].className="";
					}
				}
				var moved=0;
				// 点击下一张按钮时判断函数
				function Isleave(){
					if(moved<=0&&moved>-4){
						moved--;
						f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
						f_b.className="transitionS";
					}else if(moved>0&&moved<4){
						moved++;
						f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
						f_b.className="transitionS";
					}
					if(moved==4 || moved==-4){
						moved=0;
						setTimeout(function(){
							f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
							f_b.className="";
						},330);		
					}
				}
				// 设置定时器让图片自动切换
				var timer1=setInterval(function(){
					Isleave();
					leave();
				},1500);
				// 鼠标移入清除定时器
				R_chart.onmouseover=left_item.onmouseover=function(){
					clearInterval(timer1);
				};
	
				// 鼠标移出启动定时器
				R_chart.onmouseout=left_item.onmouseout=function(){
					timer1=setInterval(function(){
						Isleave();
						leave();
					},1500);
				};
				// 轮播图点击左右切换图片	
				// 点击上一张按钮时判断函数
				function Isleft(){				
					if(moved==0){
						moved=4;					
						f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
						f_b.className="";
						setTimeout(function(){
							moved=3;
							f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
							f_b.className="transitionS";
						},10)
					}
					if(moved>0 && moved<=3){
						moved--;
						f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
						f_b.className="transitionS";
					}else if(moved<0 && moved>=-3){
						moved++;
						f_b.style.marginLeft=-Math.abs(1226*moved)+"px";
						f_b.className="transitionS";
					}
				}
				// 上一张点击触发
				// 定义一个布尔型变量，判断用户本次点击是否有效，防止用户出现连续的多次点击
				var canclick=true;
				prev_a.onclick=function(){
					// 设置上一次点击上一张图片后，要一秒钟后才能点击出现效果，防止用户连续多次点击
					if(canclick==true){
						Isleft();
						leave();
						canclick=false;
						setTimeout(function(){
							canclick=true;
						},1000)
					}	
				}
				// 下一张点击触发
				next_a.onclick=function(){
					// 设置上一次点击下一张图片后，要一秒钟后才能点击出现效果，防止用户连续多次点击
					if(canclick==true){
						Isleave();
						leave();
						canclick=false;
						setTimeout(function(){
							canclick=true;
						},1000)
					}
				}
				// 点击按钮移动图片
				for(var pic of pic_list){
					pic.onclick=function(){
						for(var pic of pic_list){
							pic.className="";
						}
						var pic=this;
						var number=pic.getAttribute("data-num");
						f_b.style.marginLeft=-Math.abs(1226*number)+"px";
						f_b.className="transitionS";
						pic.className="active";
						moved=number;
					}
				}
				
	
				// 推荐产品里的显示或隐藏效果
				var showP=document.querySelectorAll(".home_list3_item1>.item1_bottom>.item1_bottom_right>ul>li");
				for(var showP1 of showP){
					showP1.onmouseover=function(){
						var showP=this;
						var children=showP.querySelector(".list2_bottom>.p_hidden");
						children.style.cssText="height:80px;bottom:0px;";
						showP.style.cssText="position:relative;top:-5px;transition:top,box-shadow 0.2s linear;box-shadow:10px 8px 5px rgba(10,10,0,0.18)";
					}
					showP1.onmouseout=function(){
						var showP=this;
						var children=showP.querySelector(".list2_bottom>.p_hidden");
						children.style.cssText="height:0px;bottom:0px;";
						showP.style.cssText="position:relative;top:0px;transition:top 0.2s linear;";
					}
				}
	
				// 浏览器上的网络时间
				(function(){
					var timer=setInterval(function(){
						var timeNow=new Date();
						var timeHour=timeNow.getHours();
						var timeMinute=timeNow.getMinutes();
						var timesecond=timeNow.getSeconds();
						var spantimes=document.querySelectorAll(".content_list1>.content_list1_bottom>ul>li>.sp_li1_style");
						if(timeHour<10){
							spantimes[0].innerHTML="0"+timeHour;
						}else{
							spantimes[0].innerHTML=timeHour;
						}
						if(timeMinute<10){
							spantimes[1].innerHTML="0"+timeMinute;
						}else{
							spantimes[1].innerHTML=timeMinute;
						}
						if(timesecond<10){
							spantimes[2].innerHTML="0"+timesecond;
						}else{
							spantimes[2].innerHTML=timesecond;
						}	
					},1000);
				})();
	
				// 顶部的隐藏导航栏
				var lists=document.querySelectorAll(".site_header>.header_content_nav>ul>li");
				for(var list of lists){
					list.onmouseover=function(){
						var list=this;
						var list_hidden=list.children[1];
						list_hidden.style.cssText="height:220px;left:0px;border-top:1px solid rgba(0,0,0,0.2);";
						prev_a.style.display="none";
						next_a.style.display="none";
					}
					list.onmouseout=function(){
						var list=this;
						var list_hidden=list.children[1];
						list_hidden.style.cssText="left:0px;transition:all 0.1s linear";
						prev_a.style.display="block";
						next_a.style.display="block";
					}
				}
	
				// 通过滚动条判断是否显示页面固定的导航栏
				var hidden_nav=document.getElementsByClassName("fixed_nav")[0];
				var istop=true;
				window.onscroll=function(){
					var topBar=document.documentElement.scrollTop;
					if(topBar>=860){
						hidden_nav.style.cssText="width:68px;left:5%";
					}else{
						hidden_nav.style.cssText="";
					}
	
					if(!istop){
						clearInterval(timer);
					}
					istop=false;
				}
					
				// 点击回到顶部按钮，缓慢回到顶部效果
				var top=document.getElementById("top");
				var timer=null;
				top.onclick=function(){
					timer=setInterval(function(){
						var topBar=document.documentElement.scrollTop || document.body.scrollTop;
						var ispeed=Math.floor(-topBar/8);
						istop=true;
					document.documentElement.scrollTop=document.body.scrollTop=topBar+ispeed;
					if(topBar==0){
						clearInterval(timer);
					}
					},30);	
				}
				
				// 新品速递栏右边点击图片移动效果
				var l_prev=document.getElementsByClassName("list1_prev")[0];
				var l_next=document.getElementsByClassName("list1_next")[0];
				var l_move=document.getElementsByClassName("MV")[0];
				var count=0;
				// 点击左移动
				l_prev.onclick=function(){
					if(count>0 && count<=3){
						count--;
						l_move.style.marginLeft=-249*count+"px";
						l_next.style.cursor="pointer";
						l_prev.style.cursor="pointer";
						l_next.style.opacity=1;
					}else if(count==0){
						l_prev.disabled=true;
						l_next.disabled=false;
						l_prev.style.opacity=0.3;
						l_prev.style.cursor="default";
						l_move.style.marginLeft=-249*count+"px";
					}
				}
				// 点击右移动
				l_next.onclick=function(){				
						if(count>=0 && count<=2){
							count++;
							l_move.style.marginLeft=-249*count+"px";
							l_next.style.cursor="pointer";
							l_prev.style.cursor="pointer";
							l_prev.style.opacity=1;
						}else{
							l_next.disabled=true;
							l_prev.disabled=false;
							l_next.style.opacity=0.3;
							l_next.style.cursor="default";
							l_move.style.marginLeft=-249*count+"px";
						}
				}
	
				// 视频模块中的效果
				var l5_playicons=document.getElementsByClassName("playicon");
				var l5_icons=document.getElementsByClassName("icon-pause");
				var l5_lis=document.getElementsByClassName("list5_icon");
				for(var l5_li of l5_lis){
					l5_li.onmouseover=function(e){
						e.stopPropagation();
						var l5_li=this;
						var num=l5_li.getAttribute("data-icon");
						l5_playicons[num].classList.add("playiconM");
						l5_icons[num].classList.add("playicon_i");
					}
					l5_li.onmouseout=function(e){					
						e.stopPropagation();
						var l5_li=this;
						var num=l5_li.getAttribute("data-icon");
						l5_playicons[num].classList.remove("playiconM");
					}
				}
				// 点击播放按钮弹出视频窗口
				var l5_videos=document.getElementsByClassName("list5_video");
				var l5_bg=document.getElementsByClassName("video_bg")[0];
				for(var l5_icon of l5_icons){
					l5_icon.onclick=function(){
						var l5_icon=this;
						var number=l5_icon.getAttribute("data-inum");
						l5_bg.style.display="block";
						l5_videos[number].classList.add("list5_videoM");
					}
				}
				// 点击关闭按钮，关掉视频窗口和窗口背景
				// 记录当前按钮播放的状态
				var video_paused=false;
				var clo_videos=document.getElementsByClassName("close_video");
				var mydeos=document.getElementsByClassName("myvideo");
				// 当用户通过自带的控件暂停或播放时，该变按钮的播放状态
				for(var mydeo of mydeos){
					mydeo.onclick=function(e){
						e.stopPropagation();
						var mydeo=this;
						if(video_paused){
							video_paused=false;
						}else{
							video_paused=true;
						}
					}
				}
				for(var clo_video of clo_videos){
					clo_video.onclick=function(){
						var clo_video=this;
						var Cnum=clo_video.getAttribute("data-vnum");
						l5_videos[Cnum].classList.remove("list5_videoM");
						mydeos[Cnum].pause();
						video_paused=false;
						setTimeout(function(){
							l5_bg.style.display="none";
						},333.33)
					}				
				}
				// 根据视频的状态切换显示的状态按钮
				var con_videos=document.getElementsByClassName("content_video");
				var video_play=document.getElementsByClassName("video_state_play");
				var video_pause=document.getElementsByClassName("video_state_pause");
				var my_play=document.getElementsByClassName("myplay");
				var my_pause=document.getElementsByClassName("mypause");
				for(var con_video of con_videos){
					con_video.onmouseover=function(e){
						e.stopPropagation();
						var con_video=this;
						var num=con_video.getAttribute("data-num")
						if(video_paused){
							video_pause[num].style.display="block";
							my_pause[num].style.cursor="pointer";
						}else{
							video_play[num].style.display="block";
							my_play[num].style.cursor="pointer";
						}
					}
					con_video.onmouseout=function(e){
						e.stopPropagation();
						var con_video=this;
						var num=con_video.getAttribute("data-num");
						video_play[num].style.display="none";
						video_pause[num].style.display="none";
					}
				}
				// 点击播放按钮播放视频
				for(var m_play of my_play){
					m_play.onclick=function(){
						var m_play=this;
						var num=m_play.getAttribute("data-num");
						mydeos[num].play();
						video_paused=true;
					}
				}
				// 点击暂停按钮停止播放按钮
				for(var m_pause of my_pause){
					m_pause.onclick=function(){
						var m_pause=this;
						var num=m_pause.getAttribute("data-num");
						mydeos[num].pause();
						video_paused=false;
					}
				}
	$.ajax({
		url:"http://127.0.0.1:8080/index",
		type:"get",
		datatype:"json",
		success:function(result){
			console.log(result);
			var indexRes=result;
			console.log(indexRes[0]);

			
			
		}
	});
});