# [Dali](https://github.com/camackley/dali)

Welcome to the **Dali** repository, the frontend of CaMackley (Mackley Carmona's personal brand) website.
__________

## Index

- [Dali](#dali)
  - [Index](#index)
  - [Project description](#project-description)
  - [Start local server](#start-local-server)
  - [Deploy in production](#deploy-in-production)
    - [Url Web site](#web-site-url)

__________

## Project description

The project was built with vue, typescript, sass, Nuxt to implement server side rendering and using **npm** as package manager ([packages.json](./package.json)), this project also implements [Bootstrap](https://getbootstrap.com).

The project use [Firebase](https://firebase.google.com/) as hosting for deploy the app in the cloud.
__________

## Start local server

1) In the first time run

        npm install

2) In the **CMD** run

        npm run dev

## Deploy in production

1) Build the project

        firebase deploy --only functions

2) Save all changes in [Git](https://git-scm.com/)
3) Merge in the **main** branch
4) Send changes to remote repository

        git push origin <main>

5) Deploy Web Site in Firebase Hosting

        firebase deploy --only hosting

### Web site url

        http://camackley.com
