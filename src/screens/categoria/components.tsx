import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Categoria } from "../../models/categoria";

export interface ItemCategoriaProps {
  categoria: Categoria;
}

export function ItemCategoria(props: ItemCategoriaProps) {
  const { categoria } = props;
  return (
    <View style={styles.conteinerPrincipal}>
      <View style={styles.conteiner}>
        <TouchableOpacity style={styles.conteiner2}>
          <Text style={styles.titulo}>{categoria.titulo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  conteinerPrincipal: {
    backgroundColor: "#363636",
  },
  conteiner: {
    padding: 9,
  },
  conteiner2: {
    borderRadius: 3,
    borderColor: "white",
    backgroundColor: "black",
    padding: 30,
    width: "100%",
    justifyContent: "center",
  },
  titulo:{
    color:"white"
  }
});
