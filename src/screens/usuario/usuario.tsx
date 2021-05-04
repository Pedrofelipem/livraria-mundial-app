import * as React from 'react';
import { View, Text,TouchableOpacity,StatusBar,Image, StyleSheet, ToolbarAndroidBase, ToastAndroid } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';
import * as Permission from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { Button } from 'react-native-elements';


export interface UsuarioScreenProps {
}

export function UsuarioScreen (props: UsuarioScreenProps) {

  const nav = useNavigation()
  const [imagem, setImagem] = useState<string|null>(null);

  const recursoNativo = async () => {

    const resposta = await Permission.askAsync(Permission.CAMERA_ROLL)
      if(resposta.granted){
        ToastAndroid.show("Liberado", ToastAndroid.LONG);
        const foto = await ImagePicker.launchImageLibraryAsync({
          allowsEditing:true,
          base64:true,
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          quality:0.3,
        });
        if(!foto.cancelled){
          setImagem("data:image/jpeg;base64,"+foto.base64)
        }

      }else{
        ToastAndroid.show("É preciso permisão para acessar a câmera", ToastAndroid.LONG);
      }
  }

    return (
      <View>
        <StatusBar/>
          <TouchableOpacity style={styles.header} onPress={() => nav.navigate('conta')}>
          <MaterialIcons name='arrow-back' size={24}/>
        </TouchableOpacity>
        <View style={styles.conteinerImagembtn}>
          {imagem && <Image style={styles.imagem} source={{uri:imagem}}/>}
          <View style={styles.conteinerBtn}  >
          <Button title="Foto" onPress={recursoNativo} buttonStyle={{backgroundColor:'#ff4d4d', width: 50}}/>
          </View>
        </View>
      </View>
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
  imagem:{
    height:100,
    width:100,
    borderRadius:20,
    marginTop: -50,

  },
  conteinerImagembtn:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  conteinerBtn:{
    marginTop:15,
  }
});