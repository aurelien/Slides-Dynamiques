
	
	var myVideo;
		
<<<<<<< HEAD

	 
		
	function initVideo() { 
		
		//---------- on récupère l'élément video  --------------	
		myVideo=$($('#notre_frame').contents()).find("video")[0];
		
		//---------- on affiche la barre de contrôle video lors du passage de la sourie sur a vidéo  --------------
		$($('#notre_frame').contents()).find("video").hover(function () {
			
				
=======
    $(document).ready(function (){
	  
	$("#cadre-video").hide();
	


	  
	setTimeout(initVideo, 2000);
	  
	});
	  


		
	function initVideo() { 
		

		myVideo=$($('#notre_frame').contents()).find("video")[0];
		
		
		$($('#notre_frame').contents()).find("video").hover(function () {
				 
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
			$("#cadre-video").show(300);
				
				
		});
		
<<<<<<< HEAD
		$('#fermeture_controle_video').click(function ()
        {
			$("#cadre-video").hide(200);
        
        });

		
=======
		//$($('#notre_frame').contents()).find("video").parent().append("<button onClik='$(\"#cadre-video\").show(300);'>Control</button>" );
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
		
		if(myVideo)
		{
		
			$("#lectureVideo").button({ text: true, icons: {primary: "ui-icon-play"} });
<<<<<<< HEAD
			
			//---------- capture le temp de la video et on l'affiche  -------		
=======
				
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
			$(myVideo).bind('timeupdate',function(){
				
				TimeNow=myVideo.currentTime;
				
				$("#lectureVideo").button( "option", "label", TimeNow.toFixed(1));
				
				$('#barre').slider('value', TimeNow);

				
			});
				 
<<<<<<< HEAD
			//---------- Lors que l'on détecte l'événement pause on l'envoi au poste esclave -------	 
=======
				 
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
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
<<<<<<< HEAD
			//---------- Lors que l'on détecte l'événement lecture on l'envoi au poste esclave -------
=======

>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
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
				
<<<<<<< HEAD
			//-------------Définition du slider pour la video ------------				
=======
							
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
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
			
<<<<<<< HEAD
			//-------------Boutton de lecture video------------
			$("#lectureVideo").click(function(){
						
=======
			$("#lectureVideo").click(function(){
			
				
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
				if (myVideo.paused) 
					myVideo.play(); 
				else if (myVideo.played)
					myVideo.pause(); 
<<<<<<< HEAD
		  
			}) ;
								
			//--------------- Lors du changement de la position de la video on l'envoi la nouvelle position aux postes esclave -----------		
=======
		
				//myVideo.currentTime=120
				//alert (myVideo.currentTime);
				//myVideo.width=560;
		  
			}) ;
								
					
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
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
		
		
<<<<<<< HEAD
		//--------------- Lors la réception du contrôle envoyé video par le serveur on l'exécute-----------
=======
		
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
		socket.on('emettreControlVideo', function (video) {
		var obj_video = jQuery.parseJSON(video);
			if(obj_video.play)
				myVideo.play();
			
			if(obj_video.pause)
				myVideo.pause(); 
				
			if(obj_video.toPlay)
				myVideo.currentTime=obj_video.toPlay;
				
	 
		});
	
<<<<<<< HEAD
	};
=======
	}
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88

	  