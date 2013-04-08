
 //-----Chargement de express et de socket.io 
var io = require('socket.io');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = io.listen(server);
<<<<<<< HEAD
=======

>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88

 //-----changement du serveur et définition du dossier statics à inclure dans le serveur
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res, next){
  res.render('./public/index.html');
});
<<<<<<< HEAD
server.listen(8333); // Définition du port d'écoute
=======
server.listen(8333);
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
 
 
//----------Attribut-------------
var my_timer;
var allClients = 0;
var tab_client = new Array();
<<<<<<< HEAD
var slide_currently;
var TempoPPT;
var master=false;

=======
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88

//---------on définie le fichier client-----
app.get('/', function (req, res)
{
  res.sendfile(__dirname + '/public/index.html');
});


//--------Connection d'un client-------------
socket.on('connection', function (client)
{
	allClients ++;
	var TempoPseudo;
<<<<<<< HEAD
	var TempoMaster;
	
	//--------Après avoir saisie son speudo on ouvre la session-------------
	client.on('ouvertureSession', function (connect) {
	
		console.log("Ouverture Session");

		var obj_connect = JSON.parse(connect);
		console.log("LE ppt : "+obj_connect.ppt);
		if(obj_connect.master && master==false) // on vérifie si un master existe déjà sinon il n'existe pas on lui attribue le droit
		{
			master=true;
			TempoMaster=obj_connect.master;
			TempoPseudo=obj_connect.identifant+" [master]";
			if(obj_connect.ppt)
				TempoPPT=obj_connect.ppt;
		}else
			TempoPseudo=obj_connect.identifant;
			
		tab_client.push(TempoPseudo); // on rajoute le speudo dans la tab client
		

	
		
		 //--------on envoi la nouvelle tab de client a l'utilisateur qui demande la connection------------- 
		client.send(JSON.stringify({
		"clients": allClients,
		"tab_client": tab_client,
		"connexion":TempoPseudo,
		le_slide : slide_currently,
		ppt: TempoPPT,
		master: TempoMaster
		}));
		//--------on envoi la nouvelle tab de client à tous les clients connectés------------- 
		client.broadcast.send(JSON.stringify({
		"clients": allClients,
		"tab_client": tab_client,
		"pseudo":TempoPseudo
=======
	
	//--------Après avoir saisie son speudo on ouvre la session-------------
	client.on('ouvertureSession', function (pseudo) {
	
		console.log("Ouverture Session");
		tab_client.push(pseudo);
		TempoPseudo=pseudo;
		
		 //--------on envoi la nouvel tab de client à tous les clients connectés------------- 
		client.send(JSON.stringify({
		"timestamp": (new Date()).toLocaleString(),
		"clients": allClients,
		"tab_client": tab_client
		}));
		client.broadcast.send(JSON.stringify({
		"timestamp": (new Date()).toLocaleString(),
		"clients": allClients,
		"tab_client": tab_client,
		"connexion":pseudo
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
		}));
		 
    });

	
<<<<<<< HEAD
	//-----------reception d'un message pour la gestion des slide et l'envoi au poste esclave-----------------
	client.on('message', function (data)
	{
		var obj_client = JSON.parse(data);
		
		slide_currently=obj_client.slide;
		
=======
	//-----------reception d'un message pour change de slide-----------------
	client.on('message', function (data)
	{
		var obj_client = JSON.parse(data);
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
		client.broadcast.send(JSON.stringify({
      
			le_next: obj_client.suivant,
			le_prev: obj_client.precedant,
			le_first: obj_client.premier,
			le_last: obj_client.dernier,
<<<<<<< HEAD
			le_msg: obj_client.message, //channel de discution
			le_pseudo: obj_client.pseudo, //speudo
			le_slide: obj_client.slide,   // id du SLide
=======
			le_msg: obj_client.message,
			le_pseudo: obj_client.pseudo,
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
			url: obj_client.url
		}));
    
	});
	
<<<<<<< HEAD
	//---------Réception de l'id de l'élément cliqué et on envoi l'id à tous les clients ------
=======
	//---------Réception de l'id de l'élèlement cliqué et revnoi l'id à tout les clients ------
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
	client.on('envoiRefObjetHtml', function (idtempo) {

		client.broadcast.emit('recupObjetHtml', idtempo);

    });
	
<<<<<<< HEAD
	//-------------Réception d'un traitement video et l'envoi à tout les clients --------------
=======
	//-------------Traitement video------------------------------------
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
	client.on('envoiControlVideo', function (video) {
		
		var obj_video = JSON.parse(video);
		client.broadcast.emit('emettreControlVideo', JSON.stringify({
      
			pause: obj_video.pause,
<<<<<<< HEAD
			play: obj_video.play, 
			toPlay: obj_video.toPlay //jouer la video sur position de lecture saisie
=======
			play: obj_video.play,
			toPlay: obj_video.toPlay
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
		}));

    });


<<<<<<< HEAD
	//------lors de la déconnexion d'un client ------------------------
=======
	//------lors de la déconnexion d'un client 
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
	client.on('disconnect', function ()
	{
	
		console.log('disconnect '+TempoPseudo);
<<<<<<< HEAD
		
		if(TempoPseudo)
		{
			tab_client.splice(tab_client.indexOf(TempoPseudo),1); // on retire de la table le pseudo du client qui s'est déconnecté
			if(TempoPseudo.indexOf("[master]")!=-1)  // on libère le jeton du master
				master=false;
		}
		allClients -= 1;
		client.broadcast.send(JSON.stringify( //on renvoi la nouvelle table de client à tous les clients
=======
	
		tab_client.splice(tab_client.indexOf(TempoPseudo),1) // on retire de la table le speudo du client qui c'est déconnecté
	
		allClients -= 1;
		client.broadcast.send(JSON.stringify( //on renvoi la nouvel table de client à tout les clients
>>>>>>> 43e04aba692606827ead3b5753c8b90d7867df88
		{
		  "clients": allClients,
		  "tab_client": tab_client,
		  "deconnexion": TempoPseudo
		}));
		
	});
});