function make_print() {

    var liste_div = document.getElementsByTagName('div');
    
    for (var i=0; i < liste_div.length; i++) {
        var classe = liste_div[i].getAttribute('class');
        if (classe == 'slide' || classe == 'sommaire' || classe == "cover" || classe == "code_cols") {
	     liste_div[i].setAttribute("class",classe.concat(' print'));
	     liste_div[i].setAttribute("smil","active");
        }
    }
    var par = document.getElementById("navigation_par");
        var class_par = par.getAttribute('class');
	par.setAttribute("class",class_par.concat(' print'));
	
    var tspar = document.getElementById("text_size_par");
	var class_tspar = tspar.getAttribute('class');
	tspar.setAttribute("class",class_tspar.concat(' print'));
	
    var liste_li = document.getElementsByTagName('li');
    

    for (var i=0; i < liste_li.length; i++) {
    
	var li_style = liste_li[i].getAttribute("style");
	
	if (li_style) {
	
		var li_reg=new RegExp("hidden","g");
		var li_newstyle = li_style.replace(li_reg,"visible");
		liste_li[i].setAttribute("style",li_newstyle);
	}
	
	var li_class = liste_li[i].getAttribute("class");
	
	if ( li_class && li_class == "highlight") {
	
		liste_li[i].setAttribute("smil","done");
		
	}
	
	else {
	
		liste_li[i].setAttribute("smil","active");
	
	}
	
	
	}
	

	
    var liste_h3 = document.getElementsByTagName('h3');
    

    for (var i=0; i < liste_h3.length; i++) {
    
	var h3_style = liste_h3[i].getAttribute("style");
	
	if (h3_style) {
	
		var h3_reg=new RegExp("hidden","g");
		var h3_newstyle = h3_style.replace(h3_reg,"visible");
		liste_h3[i].setAttribute("style",h3_newstyle);
	}
	
	var h3_class = liste_h3[i].getAttribute("class");
	
	if (h3_class && h3_class == "highinc") {
	
	  
	  liste_h3[i].setAttribute("smil","done");
	  
	}
	
	else {
	  
	  liste_h3[i].setAttribute("smil","active");
	
	}

			
     }
    
    var liste_ol = document.getElementsByTagName('ol');
    for (var i=0; i < liste_ol.length; i++) {
 
	liste_ol[i].setAttribute("style","display: block");
	liste_ol[i].setAttribute("smil","active");
    }
    
    var liste_ul = document.getElementsByTagName('ul');
    for (var i=0; i < liste_ul.length; i++) {
    
	if( liste_ul[i].id != "liste_sections" ) {
	

		liste_ul[i].setAttribute("style","display: block");
		liste_ul[i].setAttribute("smil","active");
	
	}
	
	else {
	
		liste_ul[i].setAttribute("style","display: none");	
	
	}
    }
    
    var liste_videos = document.getElementsByTagName('video');
    var lvl = liste_videos.length ;
    
    for (var i=0; i < lvl ; i++) {
    
	var poster = liste_videos[i].getAttribute("poster");
	var height = liste_videos[i].getAttribute("height");
	var width  = liste_videos[i].getAttribute("width");
	
	var image = document.createElement("img");
	image.setAttribute("src",poster);
	image.setAttribute("width",width);
	image.setAttribute("height",height);
	liste_videos[i].parentNode.appendChild(image);
    }
    
    for (var j=lvl-1; j >= 0 ; j--) {
	
	var video = liste_videos[j] ;
	var video_parent = video.parentNode ;
	video_parent.removeChild(video);
    
    }
}

function increase_body_size() {
                 
        var taille=document.getElementsByTagName("body")[0].style.fontSize ;
        taille_length=taille.length ;
       
        
        var new_taille=Number(taille.substring(0,taille_length-1))+15;
        
        document.getElementsByTagName("body")[0].style.fontSize = new_taille + "%";
        
	
        var liste_slide_title = document.getElementsByClassName('slide_title');
    
	for (var i=0; i < liste_slide_title.length; i++) {
	
		taille=liste_slide_title[i].style.fontSize ;
		
		if ( taille.length == 0 ) taille = "100%";
		taille_length=taille.length ;
		new_taille=Number(taille.substring(0,taille_length-1))+15;
		
		liste_slide_title[i].style.fontSize = new_taille + "%";
	
	}
	
}
        
function decrease_body_size() {
                 
        var taille=document.getElementsByTagName("body")[0].style.fontSize ;
        taille_length=taille.length ;
       
        
        var new_taille=Number(taille.substring(0,taille_length-1))-15;
        
        document.getElementsByTagName("body")[0].style.fontSize = new_taille + "%";
        var liste_slide_title = document.getElementsByClassName('slide_title');
    
	for (var i=0; i < liste_slide_title.length; i++) {
	
		taille=liste_slide_title[i].style.fontSize ;
		
		if ( taille.length == 0 ) taille = "100%";
		taille_length=taille.length ;
		new_taille=Number(taille.substring(0,taille_length-1))-15;
		
		liste_slide_title[i].style.fontSize = new_taille + "%";
	
	}        
        
        }
