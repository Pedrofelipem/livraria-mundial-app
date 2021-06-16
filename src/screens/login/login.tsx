import * as React from "react";
import { Button, Input } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Switch,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";
import firebase from "firebase";
import { ToastAndroid } from "react-native";
import { Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {
  const nav = useNavigation();
  const [erro, setErro] = React.useState("");

  const [habilitado, setHabilitado] = React.useState(false);
  const alternar = () => {
    setHabilitado(!habilitado);
  };

  const logar = async (dados: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(dados.email, dados.senha)
      .then((usuario) => nav.navigate("conta"))
      .catch((erro) => {
        if (Platform.OS == "android")
          ToastAndroid.show("Email ou senha incorreta", 300);
        else setErro("Email ou senha incorreta");
      });
  };

  return (
    <View style={styles.background}>
      <StatusBar />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.navigate("conta")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Login</Text>
      </View>
      <ScrollView>
        <Formik
          initialValues={{ email: "", senha: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .required("Campo email é obrigatório")
              .email("Campo precisa de email válido"),
            senha: Yup.string()
              .required("Campo senha é obrigatório")
              .min(6, "Minimo é caracteres"),
          })}
          onSubmit={logar}
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
                  onBlur={handleBlur("email")}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                />
                {touched.email && (
                  <Text style={styles.erro}>{errors.email}</Text>
                )}
                <Input
                  style={styles.input}
                  onBlur={handleBlur("senha")}
                  secureTextEntry={habilitado}
                  placeholder="Senha"
                  onChangeText={handleChange("senha")}
                />
                <View>
                {touched.senha && (<Text style={styles.erro}>{errors.senha}</Text>)}
                <View style={styles.btnAtivo}>
                  <Switch
                    onValueChange={alternar}
                    value={habilitado}
                    trackColor={{ true: "#4dff4d",false:"#bbbbbb" }}
                    thumbColor={habilitado ? "#4dff4d" :  "#bbbbbb"}
                  />
                  <Text style={styles.textAtivo}>Exibir senha</Text>
                </View>
                </View>
                {isSubmitting && <ActivityIndicator size={30} color="white" />}
                {!isSubmitting && (
                  <Button
                    title="Acessar"
                    onPress={() => handleSubmit()}
                    buttonStyle={{ padding: 10, width: 318, }}
                    raised={true}
                  />
                )}
                <TouchableOpacity
                  onPress={() => nav.navigate("cadastro")}
                >
                  <Text style={styles.registerText}>Criar sua conta</Text>
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
    height:"100%"
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
  erroLogin: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  logo: {
    height: 200,
    width: 310,
    left: 10,
    marginTop:60
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "99%",
  },
  btnAtivo:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 235,
    marginTop: -25,
    padding:20
  },
  textAtivo:{
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "black",
    marginBottom: 20,
    color: "white",
    fontSize: 17,
    borderRadius: 7,
    padding: 12,
  },
  erro: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginTop:-5
  },
  submitText: {
    color: "white",
    fontSize: 18,
  },
  registerText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
  },
});
