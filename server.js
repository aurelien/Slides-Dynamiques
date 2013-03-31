
  
var io = require('socket.io');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = io.listen(server);


app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res, next){
  res.render('./public/index.html');
});
server.listen(8333);
 
 
//----------Attribut-------------
var my_timer;
var allClients = 0;
var tab_client = new Array();

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
		}));
		 
    });

	
	//-----------reception d'un message pour change de slide-----------------
	client.on('message', function (data)
	{
		var obj_client = JSON.parse(data);
		client.broadcast.send(JSON.stringify({
      
			le_next: obj_client.suivant,
			le_prev: obj_client.precedant,
			le_first: obj_client.premier,
			le_last: obj_client.dernier,
			le_msg: obj_client.message,
			le_pseudo: obj_client.pseudo,
			url: obj_client.url
		}));
    
	});
	
	//---------Réception de l'id de l'élèlement cliqué et revnoi l'id à tout les clients ------
	client.on('envoiRefObjetHtml', function (idtempo) {

		client.broadcast.emit('recupObjetHtml', idtempo);

    });
	
	//-------------Traitement video------------------------------------
	client.on('envoiControlVideo', function (video) {
		
		var obj_video = JSON.parse(video);
		client.broadcast.emit('emettreControlVideo', JSON.stringify({
      
			pause: obj_video.pause,
			play: obj_video.play,
			toPlay: obj_video.toPlay
		}));

    });


	//------lors de la déconnexion d'un client 
	client.on('disconnect', function ()
	{
	
		console.log('disconnect '+TempoPseudo);
	
		tab_client.splice(tab_client.indexOf(TempoPseudo),1) // on retire de la table le speudo du client qui c'est déconnecté
	
		allClients -= 1;
		client.broadcast.send(JSON.stringify( //on renvoi la nouvel table de client à tout les clients
		{
		  "clients": allClients,
		  "tab_client": tab_client,
		  "deconnexion": TempoPseudo
		}));
		
	});
});