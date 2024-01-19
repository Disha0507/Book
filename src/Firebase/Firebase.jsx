
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeChhs4aZjcTkg3SecwnODPMgotPcfm4A",
  authDomain: "bookworm-efc73.firebaseapp.com",
  projectId: "bookworm-efc73",
  storageBucket: "bookworm-efc73.appspot.com",
  messagingSenderId: "481095088648",
  appId: "1:481095088648:web:88ccbef4d3f992b22b6fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;