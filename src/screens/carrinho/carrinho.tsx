import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { Carrinho } from "../../models/carrinho";
import { ItemCarrinho } from "./components";

export interface CarrinhoScreenProps {}

export function CarrinhoScreen(props: CarrinhoScreenProps) {
  const nav = useNavigation();
  const carrinhoFlat: Carrinho[] = [
    {
      titulo: "A surtiu arte de ligar o foda-se",
      id: "1",
      imagem: require("../../assets/imagens/img-arte.jpg"),
      descricao: "Vendido e enviado por Mondial",
      quantidade: "1",
      preco: "49,99",
    },
    {
      titulo: "A surtiu arte de ligar o foda-se",
      id: "2",
      imagem: require("../../assets/imagens/img-arte.jpg"),
      descricao: "Vendido e enviado por Mondial",
      quantidade: "1",
      preco: "49,99",
    },
    {
      titulo: "A surtiu arte de ligar o foda-se",
      id: "3",
      imagem: require("../../assets/imagens/img-arte.jpg"),
      descricao: "Vendido e enviado por Mondial",
      quantidade: "1",
      preco: "49,99",
    },
  ];

  return (
    <View style={styles.tela}>
      <StatusBar />
      <Text style={styles.header}>Carrinho</Text>
      <View style={styles.conteinerLogoFrete}>
        <Image
          style={styles.logoFrete}
          source={require("../../assets/imagens/frete.png")}
        />
        <Text style={styles.textFrete}>FRETE GRÁTIS ACIMA DE R$ 89,99*</Text>
        <TouchableOpacity onPress={() => nav.navigate("usuario")}>
          <Text style={styles.textRegulamento}>
            *CONSUlTE NO REGULAMENTO AS REGIÕES PARTICIPANTES.
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={carrinhoFlat}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItemCarrinho carrinho={item} onExcluir={(id) => console.log(id)} />
        )}
      />
      <View style={styles.Comprar}>
        <Text style={styles.textoValorTotal}>Total à vista: R$ 149,97</Text>
        <Button
          title="Comprar"
          buttonStyle={styles.botaoComprar}
          titleStyle={{ fontSize: 20 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003366",
    padding: 18,
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#002233",
    color: "white",
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
  Comprar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    bottom: 0,
    width: "100%",
    backgroundColor: "#363636",
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 11,
    paddingTop: 11,
  },
  textoValorTotal: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  botaoComprar: {
    borderRadius: 3,
    backgroundColor: "#00b33c",
    padding: 15,
  },
});
