# Salata • Salad Bar • Go green or go home 

**Production :** https://salata-bar.netlify.app/

Une cliente souhaitant créer un restaurant parisien a fait appel à notre société pour la création de l'interface des bornes de commande de son établissement. Les bornes de commande seront au format desktop et le site peut aussi être utilisé sur mobile, il sera donc responsive.  
(Projet fictif dans le cadre de notre formation Dev. web et web mobile)

**Répartition de la création des features dans l'équipe :**

🥗 - Fahed : page de détails produit et de confirmation de commande   
🥗 - Fama : page d'accueil et page d'erreur 404  
🥗 - Clara : pages du panier et du formulaire de paiement  

## Page panier et page de paiement

Ces deux pages fonctionnent grâce au contexte de React qui permet de garder en mémoire les produits choisis par le client et ses informations personnelles. Deux contextes distincts pour les informations et fonctions relatives au panier et pour le paiement.

## 


## Projet presque Parfait Home Page - Compte Rendu Fama Niasse 

Ce projet consiste en la création d'un site internet pour une borne de commande pour un salade bar responsive avec un système de filtrage basé sur les catégories et les régimes alimentaires. Voici un résumé des tâches accomplies et du fonctionnement de l'application.

Tâches Accomplies

Mise en Place des Données Mock : Nous avons créé un fichier de données mock pour les produits, les catégories et les régimes alimentaires.

Création des Composants : J'ai créé les composants de base pour la page d'accueil, la barre de filtrage, les boutons de filtrage et la liste de produits triée par catégorie.

Implémentation des Boutons de Catégorie : J'ai ajouté des boutons de catégorie à la barre de filtrage qui permettent aux utilisateurs de filtrer les produits par catégorie.

Implémentation des Boutons de Régime : J'ai ajouté des boutons de régime à la barre de filtrage qui permettent aux utilisateurs de filtrer les produits par régime alimentaire.

Gestion de l'État : J'ai utilisé le state local pour suivre l'état des catégories et des régimes sélectionnés.

Filtrage des Produits : J'ai mis en place la logique de filtrage pour afficher les produits correspondant aux catégories et régimes sélectionnés.

Mise en Place de la Page d'Accueil : J'ai assemblé les composants pour créer la page d'accueil du site avec la barre de filtrage et la liste de produits.

Styles CSS : J'ai ajouté des styles CSS pour rendre le site attrayant et convivial.

Correction des Problèmes : J'ai résolu plusieurs problèmes, notamment la réinitialisation du filtrage lorsque tous les boutons sont désactivés. j'ai également eu des difficultés à faire en sorte que l'utilisateur puisse sélectionner plusieurs régimes à la fois, le filtrage ne se faisant que sur le dernier régime sélectionné.

Fonctionnement de l'Application
Page d'Accueil : Lorsqu'un utilisateur arrive sur la page d'accueil, il est accueilli par une section avec un lien qui contient une ancre permettant de naviger un peu plus bas dans la page sur la barre de filtrage ainsi que la liste de produits en utilisant une ancre.

Filtrage par Catégorie : En cliquant sur les boutons de catégorie, l'utilisateur peut filtrer les produits en fonction des différentes catégories telles que "salades", "desserts" et "boissons".

Filtrage par Régime Alimentaire : Les boutons de régime alimentaire permettent aux utilisateurs de filtrer les produits en fonction de leurs préférences alimentaires, tels que "végan", "sans gluten" et plus encore.

Filtrage Combiné : Les utilisateurs peuvent sélectionner une seule catégorie à la fois mais il peut sélectionner plusieurs régimes alimentaires en même temps pour affiner davantage leurs résultats.

Réinitialisation du Filtrage : Lorsque les utilisateurs désactivent tous les boutons de catégorie et de régime, le filtrage est réinitialisé et tous les produits sont affichés.

Affichage des Produits : La liste de produits affiche les produits filtrés en fonction de la catégorie et des régimes sélectionnés. Les produits sont regroupés par catégorie.

Styles et Convivialité : L'application est conçue avec des styles attrayants pour une meilleure expérience utilisateur. Les boutons de filtrage sont visuellement distincts pour indiquer leur état actif ou inactif.

Conclusion
Ce projet a été une excellente occasion d'appliquer des concepts de développement React tels que la gestion de l'état, les composants, les événements et le filtrage. L'application permet aux utilisateurs de filtrer efficacement les produits en fonction de leurs préférences, offrant ainsi une expérience conviviale et personnalisée.


-----------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to launch the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
