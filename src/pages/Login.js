import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";

import { AuthContext } from "../contexts/auth";

const Login = () => {
  const [user, setUser] = useState("");

  const { singIn } = useContext(AuthContext);

  function handleLogin() {
    singIn(user);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="USUÁRIO"
        style={styles.input}
        keyboardType="numeric"
        value={user}
        onChangeText={(text) => setUser(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    padding: 25,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#C0C0C0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
