import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";
import * as Permission from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button } from "react-native-elements";
import { useUsuariosProvider, UsuarioProvider } from "../../providers/usuario";

export interface UsuarioScreenProps {
  id: string;
}

export function UsuarioScreen(props: UsuarioScreenProps) {
  const nav = useNavigation();
  const [imagem, setImagem] = useState<string | null>(null);
  const [usuarios, setUsuarios] = React.useState<UsuarioScreenProps[]>([]);
  const usuariosProvider = useUsuariosProvider();

  nav.addListener("focus", async () => {
    setUsuarios(await usuariosProvider.listar());
  });

  const recursoNativo = async () => {
    const resposta = await Permission.askAsync(Permission.CAMERA_ROLL);
    if (resposta.granted) {
      ToastAndroid.show("Liberado", ToastAndroid.LONG);
      const foto = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.3,
      });
      if (!foto.cancelled) {
        setImagem("data:image/jpeg;base64," + foto.base64);
      }
    } else {
      ToastAndroid.show(
        "É preciso permisão para acessar a câmera",
        ToastAndroid.LONG
      );
    }
  };

  return (
    <View>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.navigate("conta")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Seus dados</Text>
      </View>
      <View style={styles.conteinerImagembtn}>
        {imagem && <Image style={styles.imagem} source={{ uri: imagem }} />}
        <View style={styles.conteinerBtn}>
          <Button
            title="Foto"
            onPress={recursoNativo}
            buttonStyle={{ backgroundColor: "#ff4d4d", width: 50 }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  corFundo: {
    backgroundColor: "black",
    height: "100%",
  },
  header: {
    backgroundColor: "#003366",
    flexDirection: "row",
    width: "100%",
    padding: 18,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  imagem: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginTop: -50,
  },
  conteinerImagembtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  conteinerBtn: {
    marginTop: 15,
  },
});
