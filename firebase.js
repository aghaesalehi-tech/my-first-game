import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0wb4GYv-iAmNnLHhB7SuYv0UZzqCwBrY",
  authDomain: "flappy-game-4bf44.firebaseapp.com",
  databaseURL: "https://flappy-game-4bf44-default-rtdb.firebaseio.com",
  projectId: "flappy-game-4bf44",
  storageBucket: "flappy-game-4bf44.firebasestorage.app",
  messagingSenderId: "959117254533",
  appId: "1:959117254533:web:3ddd86a0fecbc9b483aeec",
  measurementId: "G-8T6SSTVP3G"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

window.database = database;
