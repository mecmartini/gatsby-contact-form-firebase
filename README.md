# Example of how to build a Contact Form for GatsbyJS with Firebase Database as backend

Contact Form, made with GatsbyJS, that use a Firebase Database integration as backend to store data.

<p align="center">
  ![Contact Form](./screenshot.png "Contact Form")
</p>

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the project directory and start it up.

    ```sh
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

## Config

To make it work you must add your Firebase Database credentials and config to **`src/utils/firebase.js`**:

```javascript
  const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXX.firebaseapp.com",
    databaseURL: "https://XXX.firebaseio.com",
    projectId: "XXX",
    storageBucket: "XXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXXX",
    appId: "X:XXXXXXXXXX:XXX:XXXXXXXXXX"
  };
```

then navigate to `http://localhost:8000/contact` to see the Contact Form in action.
