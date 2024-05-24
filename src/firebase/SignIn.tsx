import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../main";

// Function to create a new user with email and password
export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User created and logged in:", userCredential.user);
  } catch (error) {
    // console.error("Error creating user:", error.message);
  }
};

// Function to sign in a user with email and password
export const signInUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // console.log("User signed in:", userCredential.user);
  } catch (error) {
    // console.error("Error signing in:");
  }
};

// Function to sign out the current user
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    // console.error("Error signing out:", error.message);
  }
};
