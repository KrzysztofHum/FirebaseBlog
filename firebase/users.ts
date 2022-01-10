import { addDoc, collection } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";

type RegisterProps = {
  email: any;
  fullName: any;
  password: any;
  confirmPassword: any;
};

type LoginProps = {
  email: any;
  password: any;
};

export const register = ({
  email,
  fullName,
  password,
  confirmPassword,
}: RegisterProps) => {
  if (password !== confirmPassword) {
    throw new Error("Passwords don't match");
  }
  return createUserWithEmailAndPassword(auth, email, password).then((res) => {
    const { uid } = res.user;
    const data = {
      id: uid,
      email,
      fullName,
    };

    const usersRef = collection(db, "users");
    addDoc(usersRef, data);
  });
};

export const login = ({ email, password }: LoginProps) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
