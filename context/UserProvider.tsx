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
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef).then((doc) => {
      const userData = doc.data();
      console.log(userData);
      const { uid, fullName, email } = userData;
      setUser({ uid, fullName, email });
    });
  }, [user?.uid]);

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
