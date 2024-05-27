import "./index.css";
import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebase/firebaseConfig.ts";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { AuthProvider } from "./components/Context/AuthContext.tsx";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// eslint-disable-next-line prefer-const
let container = null;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
document.addEventListener("DOMContentLoaded", function (_event) {
  if (!container) {
    const root = createRoot(document.getElementById("root")!);
    root.render(
      <React.StrictMode>
        <AuthProvider>
          <App />
        </AuthProvider>
      </React.StrictMode>
    );
  }
});

// const root = createRoot(document.getElementById("root")!);
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>
// );

export { db, storage, auth };
