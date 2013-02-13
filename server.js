
  
var io = require('socket.io');
var express = require('express');
 
var app = express.createServer();


app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});
app.get('/', function(req, res, next){
  res.render('./public/index.html');
});
app.listen(8333);
 

var socket = io.listen(app);

  
  


var allClients = 0;
var clientId = 0;
var tab_client = [];
app.get('/', function (req, res)
{
  res.sendfile(__dirname + '/public/index.html');
});

socket.on('connection', function (client)
{

  //timer d'intervalle
  var my_timer;

  //instanciation du client
  var my_client = {
    "id": clientId,
    "obj": client
  };

  tab_client.push(my_client.id);
  //console.log(tab_client);
  clientId += 1;
  allClients += 1;

  // my_client.obj.broadcast.send(JSON.stringify(
  // {
    // "clients": allClients
  // }));

  //envoi rÈgulier d'un timerstamp et du nombre de clients connectÈs
  my_timer = setInterval(function () {
  my_client.obj.send(JSON.stringify({
  "timestamp": (new Date()).getTime(),
  "clients": allClients,
  "num_client": my_client.id,
  "tab_client": tab_client
  }));
  }, 3000);
/////////////////////////////////////////////////////////////
  //reception d'un message
  client.on('message', function (data)
  {
    var obj_client = JSON.parse(data);
    my_client.obj.broadcast.send(JSON.stringify(
    {
      //message: "poke send by client "+my_client.id,
      le_next: obj_client.suivant,
      le_prev: obj_client.precedant,
      le_first: obj_client.premier,
      le_last: obj_client.dernier,
      url: obj_client.url
    }));
    //console.log(data);
  });
////////////////////////////////////////////////////////////
client.on('envoiRefObjetHtml', function (idtempo) {
	console.log("Click reçu");
		client.broadcast.emit('recupObjetHtml', idtempo);

    });


/////////////////////////////////////////////////////////////
  client.on('disconnect', function ()
  {
    //tab_client.splice(tab_client.indexOf(my_client.id),1);
    //console.log(tab_client);
    //clearTimeout(my_timer);
    allClients -= 1;
    my_client.obj.broadcast.send(JSON.stringify(
    {
      "clients": allClients
    }));
    //console.log('disconnect'+my_client.id);
  });
});