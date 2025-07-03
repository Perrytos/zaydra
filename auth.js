// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBwURx2uEbXrRg9bCaLe0rhuWn3lOV0734",
  authDomain: "zaydra.firebaseapp.com",
  projectId: "zaydra",
  storageBucket: "zaydra.firebasestorage.app",
  messagingSenderId: "298282622397",
  appId: "1:298282622397:web:07f91d6278707a7c4346d4",
  measurementId: "G-WGQXVPHV56"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "/dashboard.html"; // oppure index se già dentro
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

// REGISTRAZIONE
document.getElementById("register-btn").addEventListener("click", () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account creato con successo!");
      window.location.href = "/dashboard.html";
    })
    .catch((error) => {
      alert("Errore nella registrazione: " + error.message);
    });
});

// RESET PASSWORD
document.getElementById("reset-password").addEventListener("click", () => {
  const email = prompt("Inserisci la tua email per il reset della password:");
  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email di reset inviata!");
      })
      .catch((error) => {
        alert("Errore: " + error.message);
      });
  }
});