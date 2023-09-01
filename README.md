# Salata • Salad Bar • Go green or go home 

![Salad Bar](https://github.com/ALJURDY/SALATA/assets/101406252/adb566c9-7b57-4942-b8d2-41f54f17dc8e)

**Production :** https://salata-bar.netlify.app/

Une cliente souhaitant créer un restaurant parisien a fait appel à notre société pour la création de l'interface des bornes de commande de son établissement. Les bornes de commande seront au format desktop et le site peut aussi être utilisé sur mobile, il sera donc responsive.  
(Projet fictif dans le cadre de notre formation Dev. web et web mobile)

**Répartition de la création des features dans l'équipe :**

🥗 - Fahed : page de détails produit et de confirmation de commande   
🥗 - Fama : page d'accueil et page d'erreur 404  
🥗 - Clara : pages du panier et du formulaire de paiement  

## Page panier et page de paiement

Ces deux pages fonctionnent grâce au contexte de React qui permet de garder en mémoire les produits choisis par le client et ses informations personnelles. Deux contextes distincts pour les informations et fonctions relatives au panier et pour le paiement.

## Page du détails produit et de confirmation de commande 

La page de détails du produit affiche tout le processus de personnalisation en manipulant les données des préférences client tout en intégrant les composants nécessaires à cet effet en utilisant les hooks React pour le contexte (du panier), useState, useParam et useNavigate.
La page récapitulative intègre à la fois les contextes de paiement et de panier pour afficher les données et fonctions relatives.


## Page Home et 404 error 

La page Home est la page d'accueil de l'application. Le menu est affiché sur cette page par catégories (Salades, Desserts et Boissons). Elle contient tout le procéssus de filtrage des produits par catégories mais également par régimes (Végan, Végétarien, Sans porc, Sans gluten, Pâtes, Produits de la mer). Une fois que l'utilisateur sélectionne son produit, il est redirigé vers la page de personnalisation. La page erreur 404 est une page qui va s'afficher lorsque la page n"existe pas et un bouton va rediriger l'utilisateur sur la page home.

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
