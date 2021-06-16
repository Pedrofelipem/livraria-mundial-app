import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { ItemProduto } from "./components";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Produto } from "../../models/produto";

export interface ProdutoScreeProps {}

export function ProdutoScreen(props: ProdutoScreeProps) {
  const nav = useNavigation();
  const ProdutoFlat: Produto[] = [
    {
      titulo: "A surtiu arte de ligar o foda-se",
      id: "1",
      imagem: require("../../assets/imagens/img-arte.jpg"),
      preco: "49,99",
    },
  ];
  return (
    <View style={styles.tela}>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.navigate("conta")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Produto</Text>
      </View>
      <View style={styles.conteinerLogoFrete}>
        <Image
          style={styles.logoFrete}
          source={require("../../assets/imagens/frete.png")}
        />
        <Text style={styles.textFrete}>FRETE GRÁTIS ACIMA DE R$ 89,99*</Text>
        <Text style={styles.textRegulamento}>
          *CONSUlTE NO REGULAMENTO AS REGIÕES PARTICIPANTES.
        </Text>
      </View>
      <FlatList
        data={ProdutoFlat}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemProduto produto={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003366",
    flexDirection: "row",
    padding: 18,
    
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color:"white"
  },
  tela: {
    height: "100%",
  },
  conteinerLogoFrete: {
    backgroundColor: "#00334d",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  logoFrete: {
    height: 50,
    width: 100,
  },
  textFrete: {
    fontSize: 22,
    padding: 10,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  textRegulamento: {
    textAlign: "center",
    fontFamily: "monospace",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 5,
    color: "white",
  },
});
