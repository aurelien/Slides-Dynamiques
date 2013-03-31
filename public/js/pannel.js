// Execution de cette fonction lorsque le DOM sera entièrement chargé 
			
			
			
	$(document).ready(function() {
	
			
			////////////Permet envoi les messages a tout les client////////////
			$("#img-send").click(function() { 
				
				if($("#input_text").val()!="")
				{
					$("#message ul").append("<li>("+mon_identifiant+"): "+$("#input_text").val()+"</li>");	
					$("#message").scrollTop(100000) ;
					
					socket.send(JSON.stringify(
					{
					message: $("#input_text").val(),
					pseudo: mon_identifiant
					}));
	
				}
		
			});
	
			///////////Permet l'ouverture et la fermeture du pannel//////
			$("#bouton-menu").click(function() { 
			
					if($("#cadre-menu").css("margin-Left")=="0px")
					{
						$("#cadre-menu").animate({ marginLeft: "175px"  }, 400 );
						$("#notre_frame").animate({ marginLeft: "175px" }, 400 );
						$("#notre_frame").css("width", "calc(100% - 175px)");	
						$("#bouton-menu").html("");
						$("#bouton-menu").css("background", "url('images/fond-demo-menu-close.jpg')  bottom no-repeat");	
					}else{
						
						$("#notre_frame").animate({ marginLeft: "0"  }, 300 );
						$("#cadre-menu").animate({ marginLeft: "0"  }, 300 );
						setTimeout(function (){$("#notre_frame").css("width", "100%")}, 300);	
						$("#bouton-menu").css("background", "url('images/fond-demo-menu-open.jpg')  bottom no-repeat");
					}
						
			});
			
			$("#boutton-user").hover(function() { 
			$("#cadre-user").animate({ marginRight: "125px"  }, 400 );
			
			},function() {
			$("#cadre-user").animate({ marginRight: "0"  }, 300 );
			
			});
			
			
			
	}); 