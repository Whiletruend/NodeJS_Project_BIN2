<!-- Badges -->
[![Contributors][contributors-badge]][contributors-wlink]
[![Stars][stars-badge]][stars-wlink]
[![License][license-badge]][license-wlink]
[![Version][version-badge]][version-wlink]

<!-- Project's Part 01 Header -->
# 👋 **NodeJS API Project**
<div align="center">
    <img src="https://i.ibb.co/jrqz45Y/NodeJS.png" alt="NodeJS Logo" width="80" height="80"> 
    <img src="https://i.ibb.co/m4QwyCM/Sequelize.png" alt="Sequelize Logo" 
    width="80" height="80"/> 
    <img src="https://i.ibb.co/rdNn0Lw/JWT.png" alt="JWT Logo" width="80" height="80"/> 
    <img src="https://i.ibb.co/cvHw3dy/NPM.png" alt="JWT Logo" width="165" height="80"/> 
    <img src="https://dashboard.snapcraft.io/site_media/appmedia/2019/12/ezgif.com-gif-maker.png" alt="Space Logo" width="80" height="80">
</div>

<br>

<!-- Project's Part 01 Body -->
## **Description du projet**
Le projet donné lors de notre deuxième année au sein de l'**ESILV** était de trouver une idée d'**API** *(**A**pplication **P**rogramming **I**nterface)* qui serait alors utilisée. L'objectif final de cela est de nous permettre de travailler en utilisant diverses technologiques telles que **Sequelize**, **NPM** ou bien encore le système d'authentification **JWT**.

## **Technologies utilisées**
Trois principales technologies seront utilisées pour ce projet, en voici la liste:
- **NodeJS**, avec utilisation de **ExpressJS** ;
- **Sequelize**, qui est un **ORM** nous permettant de "mapper" les classes métier avec les tables en **JavaScript**. Grâce à ce système, nous pourront évidemment nous connecter à ces bases de données ;
- **JWT** *(**J**son **W**eb **T**oken)*, pour un système de preuve *(d'authentification)* sécurisé avec les normes récentes ;
- **NPM** pour l'installation de ces packages, etc.

## **Notre idée de projet**
Pour finir, notre projet se portera sur le thème d'un API permettant de: ***disposer d'idées de recettes, avec comment les réaliser. Ainsi qu'une liste de restaurants proposant différents types de cuisine par catégories (cuisine Française, Chinoise, etc.). Ces mêmes catégories sont listables***.

Pour cela, nous avons organisé un espace de travail. Nous avons donc créer une espace "**[Space](https://www.jetbrains.com/fr-fr/space/)**" qui est un outil créé par **[JetBrains](https://www.jetbrains.com/)**. Cet outil nous permet de mettre en relation toute l'équipe, similairement à **Teams** mais en ayant des fonctionnalitées supplémentaires. Il est possible depuis le navigateur ou le logiciel d'avoir accès à nos branches **git** ainsi qu'au **repo**. Ce système nous permet également de dupliquer le repo mais **localement**, ce qui permet d'avoir un petit système de **base de développement** et de **base de prod**. Le repo local est stocké sur une **VM** <u>donnée gratuitement par Space</u>, c'est pour cela que toute l'équipe a accès au repo local. Finalement, tout le monde peut développer ensemble, de ce fait il est possible que deux, trois personnes puisse intéragir sur le même fichier au même moment sans que cela ne pose de soucis. <u>Tout cela en temps réel</u>.
<hr>

<br>

<!-- Install the project Header -->
# 💻 **Comment installer le projet**

<!-- Project's Part 01 Install Body -->
## **Installation de NodeJS**
**Pour Windows / Mac:** Téléchargez **[NodeJS](https://nodejs.org/en/)** depuis l'installeur. Pour ce projet la version **18.13.0 LTS** est utilisée. <br>
**Pour Linux:** Installez NodeJS via les commandes suivantes: <br>
````properties
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
````

<!-- Project's Part 02 Install Body -->
## **Récupération du projet GitHub**
Récupérez ensuite le projet via **GitHub**.
Soit, par téléchargement depuis le site, comme tel: <br>
<img src="https://raw.githubusercontent.com/Mottie/GitHub-userscripts/master/images/github-download-zip.gif" alt="GitHub Installation" width="250" height="300"> <br>

Ou bien en réalisant la commande **git clone**, comme ceci:
````
git clone https://github.com/Whiletruend/NodeJS_Project_BIN2.git
````

## **Avant l'utilisation du projet**
Avant l'utilisation, vous devez disposer d'une **BDD**, le système de gestion de BDD utilisé lors du projet est **MySQL**. <br>
Cela est possible grâce à **[XAMPP](https://www.apachefriends.org/fr/index.html)** *(disponible sur Windows, Mac et Linux)*,  voir **[MAMP](https://www.apachefriends.org/fr/index.html)** *(disponible sur Windows, Mac et Android 5.0+)*. <br><br>
Si vous disposez de cela, le fichier `nodejs_api.sql` disponible dans le dossier `server/` vous permettra de créer la base de données, les tables ainsi que les insertions <ins>nécessaires</ins> à l'utilisation de l'API.<br>
Quant au fichier `server.http` disponible au même dossier *(`server/`)*, il vous permettra d'effectuer les requêtes en utilisant les méthodes `GET`, `POST`, `PUT` et `DELETE`.

> Il est possible de changer les informations de connexion à la base de données, cela se fera directement dans le fichier `database.js` disponible au chemin suivant `server/models/`. <br>
> Les lignes qui devront être changées sont celles-ci:
> ````js
> const db_host = "localhost"; // Default: localhost (127.0.0.1)
> const db_user = "root"; // Default: root
> const db_pass = ""; // Default: N/A
> const db_port = "3306"; // Default: 3306
> const db_name = "nodejs_api"; // Can be changed
> ````
> Comme visible, les commentaires de chaque ligne vous indiquent quelle était la valeur initiale, celle par défaut. 

## **Utilisation du projet**
Une fois tout cela prêt, il vous suffira de lancer un terminal, de vous rendre dans le chemin du projet, d'accéder au dossier "server" via la commande `cd server`.<br>
Dans le dossier, exécutez la commande: 
```` 
npm start
````

> Si vous relevez une erreur lors de l'exécution de cette commande qui vous indique que "**nodemon**" n'est pas installé, exécutez la commande suivante:
> ````
> npm install nodemon
> ````

Après cela, tout devrait fonctionner. Une fois tout le projet chargé, le texte suivant sera retourné:
````
Server is listening on port 3000
Server URL: http://localhost:3000
Executing (default): SELECT 1+1 AS result
Sequelize:: DB Connected!
````
<hr>

<!-- Markdown Badges Variables -->
[contributors-badge]: https://img.shields.io/github/contributors/Whiletruend/NodeJS_Project_BIN2.svg?style=for-the-badge
[contributors-wlink]: https://github.com/Whiletruend/NodeJS_Project_BIN2/graphs/contributors

[stars-badge]: https://img.shields.io/github/stars/Whiletruend/NodeJS_Project_BIN2.svg?style=for-the-badge
[stars-wlink]: https://github.com/Whiletruend/NodeJS_Project_BIN2/stargazers

[license-badge]: https://img.shields.io/github/license/Whiletruend/NodeJS_Project_BIN2.svg?style=for-the-badge
[license-wlink]: ttps://github.com/Whiletruend/NodeJS_Project_BIN2/blob/master/LICENSE.txt

[version-badge]: https://img.shields.io/badge/Version-v1.0.0-green?style=for-the-badge
[version-wlink]: https://github.com/Whiletruend/NodeJS_Project_BIN2
