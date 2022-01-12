import { auth, db } from "../firebase/firebase";
import {
  createContext,
  ReactChild,
  ReactChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as users from "../firebase/users";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

type User = {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
};

type Context = {
  user: User;
  setUser: (user: User | ((oldState: User) => User)) => void;
  isLogged: boolean;
  login: (email: string, password: string) => Promise<any>;
  signOut: () => void;
  //TODO update avatar signIn -> fb google account
};

type AuxProps = {
  children: ReactChild | ReactChildren;
};

export const UserContext = createContext<Partial<Context>>({});

export default function UserProvider({ children }: AuxProps) {
  // const [user, setUser] = useState<any>({});
  // console.log(user);
  const [user, setUser] = useState<User>(() => {
    if (auth.currentUser) {
      return { ...auth.currentUser };
    }

    return undefined;
  });

  // onAuthStateChanged(auth, (currentUser) => {
  //   console.log(currentUser);
  //   setUser(currentUser);
  // });

  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef).then((doc) => {
      console.log(doc);
      const userData = doc.data();
      const { uid, displayName, email } = userData;
      setUser({ uid, displayName, email });
    });
  }, [user?.uid]);

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = auth.onAuthStateChanged(async (newUser) => {
      if (newUser) {
        const { uid, displayName, email } = newUser;
        setUser({ uid, displayName, email });
      } else {
        setUser(null);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  const isLogged = !!user;

  const login = useCallback(
    (email: string, password: string) => users.login({ email, password }),
    []
  );

  const signOut = useCallback(() => auth.signOut(), []);
  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        login,
        setUser,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
