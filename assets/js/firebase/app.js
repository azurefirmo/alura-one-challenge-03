// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAh1kWVfCRLg9bYROmIfba-3uLeoYAl-M",
    authDomain: "alura-azure-portfolio.firebaseapp.com",
    projectId: "alura-azure-portfolio",
    storageBucket: "alura-azure-portfolio.appspot.com",
    messagingSenderId: "910938559279",
    appId: "1:910938559279:web:94edd56f31db145a5cc7da",
    measurementId: "G-J867P0QM7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app