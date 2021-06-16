import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Vibration,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";
import firebase from "firebase"

export interface ContaScreenProps {}

export function ContaScreen(props: ContaScreenProps) {
  const nav = useNavigation();
  const infoApp = () => {
    Alert.alert(
      "Sobre o aplicativo",
      " Versão 2.1, esta é a versão mais recente do aplicativo."
    );
    Vibration.vibrate(200);
  };
  const centralApp = () => {
    Alert.alert(
      "Central de atendimento",
      " Regiões metropolitanas (11) 9.9857-5478"
    );
    Vibration.vibrate(200);
  };
  return (
    <View>
      <View style={styles.corFundo}>
        <StatusBar />
        <Text style={styles.header}>Sua Conta</Text>
        <View style={styles.visitante}>
          <Text style={styles.textoVisi}>Olá visitante {firebase.auth().currentUser?.email}</Text>
          <TouchableOpacity onPress={() => nav.navigate("login")}>
            <Text style={styles.textCor}>ACESSAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("cadastro")}>
            <Text style={styles.textCor}>CRIAR UMA CONTA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {firebase.auth().signOut(), nav.navigate("home")}}>
            <Text style={styles.textCor}>SAIR</Text>
          </TouchableOpacity>   
        </View>
        <ScrollView>
          <View style={styles.conteinerPrincipal}>
            <TouchableOpacity>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Pedidos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("usuario")}>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Seus dados</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Devoluções</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Regulamento</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={infoApp}>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Sobre o aplicativo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("parceiros")}>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Parceiros</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Covid-19</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.espaco}></View>
          <View style={styles.conteinerPrincipal}>
            <TouchableOpacity>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Avalie o aplicativo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={centralApp}>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Central de atendimento</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.conteinerItens}>
                <Text style={styles.textItensColor}>Chama no zap</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    padding: 18,
    fontSize: 18,
    fontWeight: "bold",
    color:"white"
  },
  visitante: {
    padding: 15,
    backgroundColor: "#1b1b18",
  },
  textoVisi: {
    fontSize: 25,
    color:"white"
  },
  textCor: {
    color: "#003366",
  },
  textItensColor:{
    color:"white"

  },
  conteinerPrincipal: {
    backgroundColor: "#363636",
  },
  conteiner: {
    flexDirection: "row",
    padding: 9,
  },
  espaco: {
    padding: 12,
    backgroundColor: "black",
  },
  conteiner2: {
    borderRadius: 3,
    borderColor: "white",
    backgroundColor: "#1b1b18",
    padding: 30,
    width: "100%",
    justifyContent: "center",
  },
  conteinerItens: {
    padding: 22,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 70,
  }
});
