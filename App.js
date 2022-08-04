import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
//import { useForm, Controller } from "react-hook-form";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Posicione o código de barras");
  //altura largura e profundidade
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Solicitando permissão da câmera</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Sem acesso à câmera</Text>
        <Button
          title={"Permitir câmera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  const handleSubmit = () => {
    alert(text);
    alert(width);
    alert(height);
    alert(depth);
    console.log(
      "CodBarras: " +
        text +
        " Altura: " +
        width +
        " Largura: " +
        height +
        " Produndidade: " +
        depth
    );
  };

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Ler novamente?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
      )}

      <TextInput
        placeholder="ALTURA"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setWidth(text)}
      />
      <TextInput
        placeholder="LARGURA"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setHeight(text)}
      />
      <TextInput
        placeholder="PROFUNDIDADE"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setDepth(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text>SALVAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC",
    padding: 20,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 5,
    textAlign: "center",
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
