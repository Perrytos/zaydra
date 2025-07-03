// auth.js – Gestione login, registrazione e reset password

// Inizializza Firebase (config.js o direttamente qui)
const firebaseConfig = {
  apiKey: "AIzaSyBwURx2uEbXrRg9bCaLe0rhuWn3lOV0734",
  authDomain: "zaydra.firebaseapp.com",
  projectId: "zaydra",
  storageBucket: "zaydra.firebasestorage.app",
  messagingSenderId: "298282622397",
  appId: "1:298282622397:web:07f91d6278707a7c4346d4",
  measurementId: "G-WGQXVPHV56"
};
firebase.initializeApp(firebaseConfig);

// Firebase Auth
const auth = firebase.auth();

// Login
const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "/dashboard.html";
      })
      .catch(error => {
        alert("Login failed: " + error.message);
      });
  });
}

// Registrazione
const registerBtn = document.getElementById("register-btn");
if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Registrazione completata!");
        window.location.href = "/dashboard.html";
      })
      .catch(error => {
        alert("Errore registrazione: " + error.message);
      });
  });
}

// Reset Password
const resetLink = document.getElementById("reset-link");
if (resetLink) {
  resetLink.addEventListener("click", () => {
    const email = document.getElementById("reset-email").value;
    if (!email) {
      alert("Inserisci un indirizzo email valido.");
      return;
    }
    auth.sendPasswordResetEmail(email)
      .then(() => {
        alert("Email per reset inviata.");
        window.location.href = "/login.html";
      })
      .catch(error => {
        alert("Errore: " + error.message);
      });
  });
}

// Logout
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "/login.html";
    });
  });
}