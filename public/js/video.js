
	
	var myVideo;
		
    $(document).ready(function (){
	  
	$("#cadre-video").hide();
	


	  
	setTimeout(initVideo, 2000);
	  
	});
	  


		
	function initVideo() { 
		

		myVideo=$($('#notre_frame').contents()).find("video")[0];
		
		
		$($('#notre_frame').contents()).find("video").hover(function () {
				 
			$("#cadre-video").show(300);
				
				
		});
		
		//$($('#notre_frame').contents()).find("video").parent().append("<button onClik='$(\"#cadre-video\").show(300);'>Control</button>" );
		
		if(myVideo)
		{
		
			$("#lectureVideo").button({ text: true, icons: {primary: "ui-icon-play"} });
				
			$(myVideo).bind('timeupdate',function(){
				
				TimeNow=myVideo.currentTime;
				
				$("#lectureVideo").button( "option", "label", TimeNow.toFixed(1));
				
				$('#barre').slider('value', TimeNow);

				
			});
				 
				 
			$(myVideo).bind("pause", function () {
				 
				$("#lectureVideo").button({ text: true, icons: {primary: "ui-icon-play"} });
				
				if (master==true)
				{	
					socket.emit('envoiControlVideo',JSON.stringify(
					{
						pause: 'pause'
				
					}));
				}
				
			});

			$(myVideo).bind("playing", function () {
			
					
				$("#lectureVideo").button({ text: true, icons: {primary: "ui-icon-pause"} });
				
				 if (master==true)
				{	
					socket.emit('envoiControlVideo',JSON.stringify(
					{
						play: 'play'
				
					}));
				}
				
			});
				
							
			var video_duration = myVideo.duration;
							
			$('#barre').slider({
				value: 0,
				step: 0.1,
				orientation: "horizontal",
				range: "min",
				max: video_duration,
				animate: true,					
				slide: function(){							
					
				},
				stop:function(e,ui){

					myVideo.currentTime=ui.value;
				}
			});	
			
			$("#lectureVideo").click(function(){
			
				
				if (myVideo.paused) 
					myVideo.play(); 
				else if (myVideo.played)
					myVideo.pause(); 
		
				//myVideo.currentTime=120
				//alert (myVideo.currentTime);
				//myVideo.width=560;
		  
			}) ;
								
					
			$(myVideo).bind("seeked", function () {
			
			
				if (master==true)
					{	
						socket.emit('envoiControlVideo',JSON.stringify(
						{
							toPlay: myVideo.currentTime
					
						}));
					}		
					
					// alert("COUOCOU");
			});
			
			
		
		}
		
		
		
		socket.on('emettreControlVideo', function (video) {
		var obj_video = jQuery.parseJSON(video);
			if(obj_video.play)
				myVideo.play();
			
			if(obj_video.pause)
				myVideo.pause(); 
				
			if(obj_video.toPlay)
				myVideo.currentTime=obj_video.toPlay;
				
	 
		});
	
	}

	  