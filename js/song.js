		var ms = new Array();
		var gc = new Array();
		var html = "";
		var song = document.getElementById("song-src")
		
		window.onload =function test(){
			var text = "[00:00.00]最好 [00:00.00]歌手：薛之谦  [00:00.00]作曲：郭顶 作词：小寒  [00:01.30]最好就这样能把你忘掉 [00:07.55]最好能不想还有多困扰 [00:13.60]这复杂的情绪向我奔跑 [00:19.10]由来已经太少 或者已经无药 [00:26.53]最好的都已经送你不要 [00:33.04]最好的朋友说我太无聊 [00:40.32]最好的方式也只能这样 [00:45.43]反正你不要了 都好 [00:53.06]说不清他比我适合 适合这种时刻 [00:57.39]还是他比我懂得更让你快乐 [01:04.72]也许没资格 也只能怀念了 [01:06.46]我懂 没有意外了 [01:07.86]或许他比较适合 适合这种值得 [01:09.89]他说他比我懂得更让你快乐 [01:14.38]他说他比我懂得更让你快乐 [01:17.99]最好 不要记得我 [01:23.73]最好的都已经送你不要 [01:26.12]最好的朋友说我太无聊 [01:28.26]最好的方式也只能这样 [01:32.93]反正你不要了 都好 [01:36.28]说不清他比我适合 适合这种时刻 [02:02.08]还是他比我懂得更让你快乐 [02:06.32]也许没资格 也只能怀念了 [02:11.55]我懂 没有意外了 [02:15.67]或许他比较适合 适合这种值得 [02:19.89]他说他比我懂得更让你快乐  [02:25.03]最好 不要记得 [02:28.82]最好 不要记得 [02:31.82]最好 不要记得我 "
			var textArr = text.split("[");			
			var html_ = "" ;
			for(var i=1;i<textArr.length;i++){
				var timeAndgc = textArr[i].split("]");
				var time = timeAndgc[0];
				var s = time.split(".") 
				var hs = s[1];
				var f = s[0].split(":")
				ms[i-1] = f[0]*60+f[1]*1;
				gc[i-1] = timeAndgc[1];			
				html_= html_ +"<li id="+"a"+ms[i-1]+">"+gc[i-1]+"</p>"
					}	
			document.getElementById("test3").innerHTML = html_;
				}
		
		setInterval(show,500)
		function show(){								
			var song = document.getElementById("song-src");
			var curtime = song.currentTime;				
			if(song.paused);else{
			for(var i=0 ; i<ms.length ;i++){
			 var num = curtime - ms[i];				 
			if( num>3 && num <3.5 )
			{	
				var li = document.getElementById("a"+ms[i])
				li.style.color = "#0066CC";
				li.style.fontSize = "20px"
				if(i>3)document.getElementById("test3").style.marginTop = -((i-3)*50)+"px";
				if(i>0) {document.getElementById("a"+ms[i-1]).style.color ="white";
				document.getElementById("a"+ms[i-1]).style.fontSize = "16px";}
					}
				}
			}
		}
		
		function btm(){	
				var song = document.getElementById("song-src")
				var a = document.getElementById('div-cd');
				
// 				if(song.paused){
// 					song.play();
// 					a.style.animationPlayState = "running"
// 					document.getElementById("control-play").src = "img/button/ac4.png"
// 					}
// 				else{
// 					song.pause();
// 					a.style.animationPlayState = "paused";
// 					document.getElementById("control-play").src = "img/button/ac5.png"
// 					}
				
		
				/*var obj = document.getElementById("bt")
				if(obj.className=="play")
				{obj.className="pause"}
				else
				{obj.className="play"};*/
			}
// 		setInterval(progress,1000)
// 		function progress(){
// 			var song = document.getElementById("song-src");
// 			var curtime = song.currentTime;
// 			var length = curtime/song.duration*100
// 			document.getElementById("control-progress").style.width=length+'%'
// 			}
// 		function love(){
// 			document.getElementById("control-love").src = "img/button/ade.png"
// 		}
// 		function unlove(){
// 			document.getElementById("control-love").src = "img/button/add.png"
// 		}
// 		
// 		function hid(){
// 			document.getElementById("fun").style.display = "none";
// 		}
// 		function showp(){
// 			document.getElementById("fun").style.display = "block";
// 		}
// 		function download(){
// 			
// 		}
// 