import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../main";

// Function to create a new user with email and password
export const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created and logged in:", userCredential.user);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error creating user:", error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

// Function to sign in a user with email and password
export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error signing in:", error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

// Function to sign out the current user
export const signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error signing out:", error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};