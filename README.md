# Festival Nation Sound

Bienvenue sur le site du Festival Nation Sound.

## Description

L’application mobile du festival est de type informationnel pour les cibles identifiées. Pour inciter l’utilisateur à découvrir tous les aspects de l’événement (y compris les activités et animations hors des concerts.)

## Installation

Pour installer et exécuter ce projet localement avec Visual Studio Code et l’extension Go Live, suivez ces étapes :

1. Clonez le dépôt :
```
git clone [https://github.com/Flogau44/MSPR-FrontEnd.git](https://github.com/Flogau44/MSPR-FrontEnd.git)

```

2. Accédez au répertoire du projet : 
```
cd MSPR-FrontEnd

```

3. Ouvrez le projet dans Visual Studio Code :
```
code .

```

4. Installez les dépendances :
```
npm install

```

5. Installez Tailwind CSS :
```
npm install -D tailwindcss
npx tailwindcss init
```

6. Configurez Tailwind CSS en ajoutant les chemins de vos fichiers dans le fichier `tailwind.config.js` :

```
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

7. Ajoutez les directives Tailwind dans votre fichier CSS principal :
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

8. Utilisez l’extension Go Live pour démarrer le serveur local :

- Assurez-vous que l’extension Live Server est installée dans Visual Studio Code.
* Cliquez sur le bouton Go Live en bas à droite de l’interface de Visual Studio Code.

## Utilisation

Accédez à l’application via http://localhost:5500 (ou le port configuré par Live Server).

## Construit avec

* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS (front-end)
* [Visual Studio Code](https://code.visualstudio.com/) - IDE

## Contribuer

Les contributions sont ce qui fait de la communauté open source un endroit si incroyable pour apprendre, inspirer et créer. Toutes les contributions que vous faites sont grandement appréciées.

1. Forkez le projet
2. Créez votre branche Feature (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pusher vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Auteurs

[@Flogau44](https://github.com/Flogau44)


## Licence
Ce projet est sous licence MIT. Voir LICENSE pour plus d'informations.
