import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  CardAnimationContext,
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { LoginScreen } from "../screens/login/login";
import { CadastroScreen } from "../screens/cadastro/cadastro";
import { IndexScreen } from "../screens/home/index";
import { NavegacaoIndex } from "./home";
import { UsuarioScreen } from "../screens/usuario/usuario";
import { ProdutoScreen } from "../screens/produto/produto";
import { ParceirosScreen } from "../screens/conta/categorias_conta/parceiros";

const Stack = createStackNavigator();

export const MainNavegation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="app"
    >
      <Stack.Screen name="home" component={IndexScreen} />
      <Stack.Screen name="cadastro" component={CadastroScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="usuario" component={UsuarioScreen} />
      <Stack.Screen name="produto" component={ProdutoScreen} />
      <Stack.Screen name="parceiros" component={ParceirosScreen} />
      <Stack.Screen name="app" component={NavegacaoIndex} />
    </Stack.Navigator>
  </NavigationContainer>
);
