# FireContact App

## Objective

Build a FireContact App using ReactJS.

## Description

- Project aims to create a FireContact App.
- In this project, I designed a Movie App with many features. I provided the movie information with the api I got from the `https://www.themoviedb.org/documentation/api` site. And I used Firebase for authentication.
- The user can log in and register with both their email address and their Google account.
- Access to movie details is restricted for visitors who do not log in.

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
$ git clone https://github.com/esadakman/firecontact-app.git
$ cd ./firecontact-app
$ npm install / yarn
$ npm start / yarn start
```

### Preview of the Project
