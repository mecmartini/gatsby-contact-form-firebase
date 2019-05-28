const config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXX.firebaseapp.com",
  databaseURL: "https://XXX.firebaseio.com",
  projectId: "XXX",
  storageBucket: "XXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "X:XXXXXXXXXX:XXX:XXXXXXXXXX"
};

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
  else {
    firebase.app();
  }

  firebaseInstance = firebase

  return firebase
}
