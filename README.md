# FireContact App

## Objective

Build a FireContact App using ReactJS.

## Description

- Project aims to create a FireContact App.
- In this project, I designed a Contact App with many features.I used Firebase Realtime Database for database.
- User can update the list by entering name, phone number and gender information.And also user can delete or fix any contact from table.

## Project Link

#### You can reach my project from [here](https://firecontact-app-blush.vercel.app/) 👈

## Project Skeleton

```
FireContact App (folder)
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └── [images]
│    ├── components
│    │       ├── Home.jsx
│    │       ├── form
│    │       │     └── Form.jsx
│    │       ├── navbar
│    │       │     └── Navbar.jsx
│    │       └── table
│    │             │── EditModal.jsx
│    │             └── Table.jsx
│    ├── utils
│    │       ├── customToastify.jsx
│    │       └── firebase.jsx
│    ├── App.js
│    ├── İndex.css
│    └── index.js
├── package.json
├── .env
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JS
- ReactJS
- Firebase
- Material-UI

To run this project;

- Signup `https://firebase.google.com/` and create new app in firebase.
- Use `https://firebase.google.com/docs/database/web/start` and create CRUD operations.
- Create a .env file and set your
  -- REACT_APP_FIREBASE_API_KEY,
  -- REACT_APP_FIREBASE_AUTH_DOMAIN,
  -- REACT_APP_FIREBASE_DATABASE_URL,
  -- REACT_APP_FIREBASE_PROJECT_ID,
  -- REACT_APP_FIREBASE_STORAGE_BUCKET,
  -- REACT_APP_FIREBASE_MESSAGING_SENDER_ID and
  -- REACT_APP_FIREBASE_APP_ID for firebase access

- After these you can run the project as usual =>

```
$ git clone https://github.com/esadakman/reactjs-fireContact.git
$ cd ./firecontact-app
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project

![fire](https://user-images.githubusercontent.com/98649983/180781321-afb20b7b-d2d7-40c7-b10f-cd7aaa99adf2.gif)
