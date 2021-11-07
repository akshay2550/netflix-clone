import FireBase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-zuu-zCYqK8RdWrtQeHgaZi4ECfmf-l8",
  authDomain: "netflix-clone-adaf2.firebaseapp.com",
  databaseURL: "https://netflix-clone-adaf2.firebaseio.com",
  projectId: "netflix-clone-adaf2",
  storageBucket: "netflix-clone-adaf2.appspot.com",
  messagingSenderId: "394710739311",
  appId: "1:394710739311:web:831d45431054364554609a",
};

const firebase = FireBase.initializeApp(config);

export { firebase };
