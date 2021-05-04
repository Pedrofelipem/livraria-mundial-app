import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,StatusBar, ScrollView, Vibration } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { Alert } from 'react-native';


export interface ContaScreenProps {
}

export function ContaScreen (props: ContaScreenProps) {
    const nav = useNavigation()
    const infoApp = () =>{
      Alert.alert("Sobre o aplicativo"," Versão 2.1, esta é a versão mais recente do aplicativo.")
      Vibration.vibrate(200)
    }
    const centralApp = () =>{
      Alert.alert("Central de atendimento"," Regiões metropolitanas (11) 9.9857-5478")
      Vibration.vibrate(200)
    }
    return (
      <ScrollView>
      <View style={styles.corFundo}>
        <StatusBar/>
        <Text style={styles.header}>Sua Conta</Text>
        <View style={styles.visitante}>
          <Text style={styles.textoVisi} >Olá visitante!</Text>
          <TouchableOpacity onPress={() => nav.navigate('login')}>
            <Text style={styles.textCor}>ACESSAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate('cadastro')}>
            <Text style={styles.textCor}>CRIAR UMA CONTA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.conteinerPrincipal}>
          <TouchableOpacity>
            <View style={styles.conteinerItens}>
              <Text>Pedidos</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate('usuario')} >
            <View style={styles.conteinerItens}>
              <Text>Seus dados</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.conteinerItens}>
              <Text>Devoluções</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.conteinerItens}>
              <Text>Regulamento</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={infoApp} >
            <View style={styles.conteinerItens}>
            <Text>Sobre o aplicativo</Text>
            </View >
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.conteinerItens}>
            <Text>Covid-19</Text>
            </View >
          </TouchableOpacity>
          </View>
          <View style={styles.espaco}>
          </View>
          <View style={styles.conteinerPrincipal}>
          <TouchableOpacity>
            <View style={styles.conteinerItens}>
              <Text>Avalie o aplicativo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={centralApp}>
            <View style={styles.conteinerItens}>
              <Text>Central de atendimento</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.conteinerItens}>
              <Text>Chama no zap</Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  corFundo:{
    backgroundColor: 'black',
    height:'100%'
  },
  header:{
    backgroundColor:'#003366',
    padding: 18,
    fontSize: 18,
    fontWeight:'bold'
  },
  visitante:{
    padding:15,
    backgroundColor:'#1b1b18',
  },
  textoVisi:{
    fontSize:25,
  },
  textCor:{
    color:'#003366'
  },
  conteinerPrincipal:{
    backgroundColor:'#363636',
  },
  conteiner:{
    flexDirection:'row',
    padding:9, 
  },
  espaco:{
    padding:12,
    backgroundColor:'black'
  },
  conteiner2:{
    borderRadius:3,
    borderColor:'white',
    backgroundColor:'#1b1b18',
    padding: 30,
    width:'100%',
    justifyContent:'center'
  },
  conteinerItens:{
    padding: 22,
    borderBottomColor:'black',
    borderBottomWidth:1,
    height:70
  },



});
