// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwURx2uEbXrRg9bCaLe0rhuWn3lOV0734",
  authDomain: "zaydra.firebaseapp.com",
  projectId: "zaydra",
  storageBucket: "zaydra.firebasestorage.app",
  messagingSenderId: "298282622397",
  appId: "1:298282622397:web:07f91d6278707a7c4346d4",
  measurementId: "G-WGQXVPHV56"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    const userInfoDiv = document.getElementById("user-info");
    const loginButton = document.getElementById("login-btn");
    const logoutButton = document.getElementById("logout-btn");

    if (user) {
      if (userInfoDiv) {
        userInfoDiv.innerHTML = `Ciao, ${user.email}`;
        logoutButton.style.display = "inline-block";
        loginButton.style.display = "none";
      }
    } else {
      if (userInfoDiv) {
        userInfoDiv.innerHTML = "";
        logoutButton.style.display = "none";
        loginButton.style.display = "inline-block";
      }
    }
  });

  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      signOut(auth);
    });
  }
});
