
	
	var myVideo;
		

	 
		
	function initVideo() { 
		
		//---------- on récupère l'élément video  --------------	
		myVideo=$($('#notre_frame').contents()).find("video")[0];
		
		//---------- on affiche la barre de contrôle video lors du passage de la sourie sur a vidéo  --------------
		$($('#notre_frame').contents()).find("video").hover(function () {
			
				
			$("#cadre-video").show(300);
				
				
		});
		
		$('#fermeture_controle_video').click(function ()
        {
			$("#cadre-video").hide(200);
        
        });

		
		
		if(myVideo)
		{
		
			$("#lectureVideo").button({ text: true, icons: {primary: "ui-icon-play"} });
			
			//---------- capture le temp de la video et on l'affiche  -------		
			$(myVideo).bind('timeupdate',function(){
				
				TimeNow=myVideo.currentTime;
				
				$("#lectureVideo").button( "option", "label", TimeNow.toFixed(1));
				
				$('#barre').slider('value', TimeNow);

				
			});
				 
			//---------- Lors que l'on détecte l'événement pause on l'envoi au poste esclave -------	 
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
			//---------- Lors que l'on détecte l'événement lecture on l'envoi au poste esclave -------
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
				
			//-------------Définition du slider pour la video ------------				
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
			
			//-------------Boutton de lecture video------------
			$("#lectureVideo").click(function(){
						
				if (myVideo.paused) 
					myVideo.play(); 
				else if (myVideo.played)
					myVideo.pause(); 
		  
			}) ;
								
			//--------------- Lors du changement de la position de la video on l'envoi la nouvelle position aux postes esclave -----------		
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
		
		
		//--------------- Lors la réception du contrôle envoyé video par le serveur on l'exécute-----------
		socket.on('emettreControlVideo', function (video) {
		var obj_video = jQuery.parseJSON(video);
			if(obj_video.play)
				myVideo.play();
			
			if(obj_video.pause)
				myVideo.pause(); 
				
			if(obj_video.toPlay)
				myVideo.currentTime=obj_video.toPlay;
				
	 
		});
	
	};

	  