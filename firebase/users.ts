import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./firebase";

type RegisterProps = {
  email: any;
  displayName: any;
  password: any;
  confirmPassword: any;
};

type LoginProps = {
  email: any;
  password: any;
};

export const register = ({
  email,
  displayName,
  password,
  confirmPassword,
}: RegisterProps) => {
  if (password !== confirmPassword) {
    throw new Error("Passwords don't match");
  }
  return createUserWithEmailAndPassword(auth, email, password).then((res) => {
    const { uid } = res.user;
    const data = {
      uid,
      email,
      displayName,
    };
    const docRef = doc(db, "users", uid);
    setDoc(docRef, data);
  });
};

export const login = ({ email, password }: LoginProps) =>
  signInWithEmailAndPassword(auth, email, password).then((res) => {
    const { uid } = res.user;
    const docRef = doc(db, "users", uid);

    getDoc(docRef).then((doc) => {
      if (!doc.exists) {
        throw new Error("User does not exist anymore.");
      }
      const user = doc.data();
      return user;
    });
    // onSnapshot(docRef, (doc) => {
    //   console.log(doc.data(), doc.id);
    // });
  });

export const logout = () => signOut(auth);
