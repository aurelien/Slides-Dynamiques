Slides-Dynamiques 
=============

Projet R&amp;D et DLL de Aurelien GEANT et Julian DEMAREST

Ce projet consiste à diffuser des slides utilisant la technologie SMIL/EAST sur des postes client.

Les changements de slides, les animations sont synchronisés entre tous les utilisateurs grâce aux Websocket.

Aujourd'hui, les animations sont d'ors et déjà fonctionnelles et le visionnage des slides se fait sans connexion à internet.

Pour la suite du projet DLL, nous comptons ajouter plusieurs fonctionnalités à celles ci, comme :

    Ajout d'un système de sécurité (authentification, définition du master avec un mot de passe) ;
    Correction du nombre d'utilisateurs connectés ;
    Diffusion de vidéos dans EAST sur tous les postes connectés ;
    Correction sur la diffusion des animations itératives ;
    Initialisation du slide de l'utilisateur avec celui du master lors de sa connexion.
    
Merci de prendre en compte le fait que l'on a perdu pas mal de temps du fait de l'abandon de l'autre projet
pour la version 0.1 du projet DLL :

    Voice Memos -> https://github.com/aurelien/Voice-Memos-OWA

Ceci est dû au fait que l'enregistrement de l'audio avec mediaStreamRecorder n'est pas encore possible
sous Firefox pour l'instant.
   


