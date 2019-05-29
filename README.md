# Example of how to build a Contact Form for GatsbyJS with Firebase Database as backend
### by [SoulWeb Solutions](https://soulweb.it)

Contact Form, made with [GatsbyJS](https://www.gatsbyjs.org/), using a [Firebase Realtime Database](https://www.gatsbyjs.org/) integration as backend to store data.

![Contact Form](./screenshot.png "Contact Form")

## 🚀 Quick start

1.  **Start developing**

    Navigate into the project directory and start it up.

    ```sh
    gatsby develop
    ```

1.  **Open the source code and start editing**

    Your site is now running at `http://localhost:8000`!

1.  **Firebase config**  

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

1.  **Database collection**

    You can change the database collection used to store the data on **`src/components/contactForm.js`**

    ```javascript
    handleSubmit = event => {
      ...

      if (database) {
        database.collection('contact').add({  // change contact with the name of your collection
          ...
        });
      }

      ...
    }
    ```

1.  **Try it**

    Navigate to `http://localhost:8000/contact` to see the Contact Form in action.
