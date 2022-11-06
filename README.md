# **Technical test of IPGlobal**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

>Developed with Node: 18.12.0

>Developed with NPM: 8.19.2

## **Instructions**

  >[Instructions](src/docs/instrucciones.md)      
---
---
# **Memory**
## **Table of Contents**

- [**Technical test of IPGlobal**](#technical-test-of-ipglobal)
  - [**Instructions**](#instructions)
  - [>Instructions](#instructions-1)
- [**Memory**](#memory)
  - [**Table of Contents**](#table-of-contents)
  - [**Introduction**](#introduction)
  - [**Prerequisites**](#prerequisites)
  - [**Installation**](#installation)
  - [**Start the App**](#start-the-app)
  - [:heavy_check_mark: **Functionalities developed** 	:heavy_check_mark:](#heavy_check_mark-functionalities-developed-heavy_check_mark)
  - [:x: **Functionalities pending** :x:](#x-functionalities-pending-x)

## **Introduction**
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is using the following technologies:

- [Reactjs](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [React-router](https://reactrouter.com/web/guides/quick-start) 
- [React-query](https://tanstack.com/query/v4/docs/overview) 
- [Husky](https://typicode.github.io/husky/#/) as a solution to code quality that cheks `lint` in pre-commit and `tests` in pre-push.
- [Testing-library](https://testing-library.com/docs/react-testing-library/intro/) 
- [Prettier](https://prettier.io/) with [ESlint](https://eslint.org/).
- [React-intl](https://formatjs.io/docs/getting-started/installation/) and [Flat](https://formatjs.io/docs/getting-started/installation/) as a solution to internationalizate the application.
  
## **Prerequisites**

This project was developed with [Node.js](http://nodejs.org) version 18.12.0 and [npm](hhttps://www.npmjs.com/) version 8.19.2.

## **Installation**

To set up the application in your local machine follow this steps:

- Clone this repository
- You must be currently in `master` branch code.
- Then open a terminal inside project's root directory and run `npm install` o `yarn install`.
- When installation process ends successfully, you should be able to [Start the App](#start-the-app).
  

## **Start the App**

- Run `npm start` o `yarn start`
- Open [http://localhost:3000](http://localhost:3000) in your browser.
  
## 	:heavy_check_mark: **Functionalities developed** 	:heavy_check_mark:
- **Popular films list**: Main page with the list of the most popular films, with pagination and a search box to find some specific film. Doing click over any film picture the user must be redirected to `Film details` page.
- **Film details page**: This page displays all the info about a selected film. Also the user can rate the film.
- **My list**: At this page the user can see a list of the films that he rated in this session. The funtionallity of the list is the same that has the main page.

## :x: **Functionalities pending** :x:
- Parse dates depending of the language.
- Reset the pagination page.
- Explore why the getRatedMovies call didnt return any result.
- Make test
- Improve the construction of the URLs RATE_MOVIE and GET_RATED_MOVIES
- Improve styles
- Export views logic