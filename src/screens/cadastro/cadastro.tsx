import * as React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from "firebase";
import 'firebase/database';

export interface CadastroScreenProps {}

export function CadastroScreen(props: CadastroScreenProps) {
  const cadastrar = async (dados: any) => {
    firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
      .then((usuario) => {
        if(usuario.user)
          firebase.database().ref('usuarios').child(usuario.user?.uid).set(dados)
          ToastAndroid.show("Usuário criado com sucesso", 300);
      })
    
    nav.navigate("login");
  };

  const [erro, setErro] = React.useState("");
  const nav = useNavigation();
  return (
    <View style={styles.background}>
      <StatusBar/>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.navigate("conta")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"}/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Cadastro</Text>
      </View>
      <ScrollView>
      <Formik
        initialValues={{
          nome: '',
          cpf: '',
          telefone: '',
          email: '',
          senha: '',
        }}
        validationSchema={Yup.object().shape({
          nome: Yup.string()
            .required("(Nome obrigatório)")
            .min(5, "(Nome completo)")
            .max(25, "(Máximo 25 caracteres)"),
          cpf: Yup.string()
            .required("(CPF obrigatório)")
            .min(11, "(Mínimo 11 caracteres)")
            .max(11, "(Máximo 11 caracteres)"),
          telefone: Yup.string()
            .required("(Telefone obrigatório)")
            .min(8, "(Mínimo 8 caracteres)"),
          email: Yup.string()
            .required("(Email obrigatório)")
            .email("(Email inválido)")
            .max(30, "(Máximo 30 caracteres)"),
          senha: Yup.string()
            .required("(Senha obrigatória)")
            .min(8, "(Mínimo 8 caracteres)")
            .max(20, "(Máximo 20 caracteres)"),
        })}
        onSubmit={cadastrar}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <>
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require("../../assets/imagens/Mundiallogo.png")}
              />
              <Input
                style={styles.input}
                placeholder="Digite seu nome"
                autoCorrect={false}
                onChangeText={handleChange("nome")}
              />
              {touched.nome && <Text style={styles.erro}>{errors.nome}</Text>}
              <Input
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite seu CPF"
                autoCorrect={false}
                onChangeText={handleChange("cpf")}
              />
              {touched.cpf && <Text style={styles.erro}>{errors.cpf}</Text>}
              <Input
                style={styles.input}
                placeholder="Digite seu número de celular"
                autoCorrect={false}
                onChangeText={handleChange("telefone")}
              />
              {touched.telefone && <Text style={styles.erro}>{errors.telefone}</Text>}
              <Input
                style={styles.input}
                placeholder="Digite seu e-mail"
                autoCorrect={false}
                onChangeText={handleChange("email")}
              />
              {touched.email && <Text style={styles.erro}>{errors.email}</Text>}
              <Input
                style={styles.input}
                placeholder="Digite sua senha"
                autoCorrect={false}
                onChangeText={handleChange("senha")}
              />
              {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
              {isSubmitting && <ActivityIndicator size={30} color="white" />}
              {!isSubmitting && (
                <Button
                  title="Criar conta"
                  onPress={() => handleSubmit()}
                  buttonStyle={{ borderRadius: 7, width: 365, padding: 13, }}
                  raised={true}
                />
              )}
              <TouchableOpacity
                onPress={() => nav.navigate("login")}
              >
                <Text style={styles.registerText}>Já tenho uma conta!</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    backgroundColor:"#00264d",
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
    color:"white"
  },
  logo: {
    height: 200,
    width: 310,
    marginTop:-20
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "99%",
    paddingBottom: 45,
  },
  input: {
    backgroundColor: "black",
    marginBottom: 15,
    color: "white",
    fontSize: 17,
    borderRadius: 7,
    padding: 13,
  },
  erro: {
    color: "white",
    textAlign: "right",
    fontSize: 15,
  },
  Button: {
    backgroundColor: "#35AAFF",
    width: "90",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
  },
  registerText: {
    color: "white",
    fontSize:15,
    fontWeight:"bold",
    marginTop:10
  },
});
