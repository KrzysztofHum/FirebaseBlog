import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

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
    console.log(fullName);
    // TODO save user data to firebase
    // const { uid } = res.user;
    // const data = {
    //   id: uid,
    //   email,
    //   fullName,
    // };
    // // const userRef = collection(db, "users");
    // const userRef = firestore.collection("users");
    // userRef
    //   .doc(uid)
    //   .set(data)
    //   .then(() => data);
  });
};

export const login = ({ email, password }: LoginProps) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
