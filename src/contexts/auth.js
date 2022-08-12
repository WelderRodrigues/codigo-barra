import React, { createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  function singIn(user) {
    if (user !== "") {
      setUser(user);

      //navigation.navigate("BarCode");
      navigation.navigate("ProductList");
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
