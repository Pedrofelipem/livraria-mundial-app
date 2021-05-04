import * as React from 'react';
import { View,Image, StyleSheet,TouchableOpacity, Text,TextInput, ImageBackground, StatusBar, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-elements';
export interface IndexScreenProps {
}

export function IndexScreen (props: IndexScreenProps) {
  const nav = useNavigation()
    return (
      <View style={styles.background}>
        <StatusBar/>
        <View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../../assets/imagens/logo.png')}/>
        </View>
        <TouchableOpacity  style={styles.containerCep}>
          <Text>Informe seu CEP</Text>
        </TouchableOpacity>
        <View style={styles.conteinerLogoFrete}>
          <Image style={styles.logoFrete} source={require('../../assets/imagens/frete.png')}/>
          <Text style={styles.textFrete}>FRETE GRÁTIS ACIMA DE R$ 89,99*</Text>
          <Text style={styles.textRegulamento}>*CONSUlTE NO REGULAMENTO AS REGIÕES PARTICIPANTES.</Text>
        </View>
        <View style={styles.containerPromo}>
          <Image style={styles.imgPromo} source={require('../../assets/imagens/cupom-20.png')}/>
        </View>
        <View style={{flexDirection:'row', width:400,height:2, justifyContent:'space-around',}}>
          <Image style={styles.logoCategoria} source={require('../../assets/imagens/cate1.png')}/>
          <Image style={styles.logoCategoria} source={require('../../assets/imagens/cate2.png')}/>
          <Image style={styles.logoCategoria} source={require('../../assets/imagens/cate3.png')}/>
          <Image style={styles.logoCategoria} source={require('../../assets/imagens/cate4.png')}/>
        </View>
        <View style={{flexDirection:'row', width:400, justifyContent:'space-around',}}>
          <Text style={styles.textLogoCategoria}>Ofertas</Text>
          <Text style={styles.textLogoCategoria}>Estudos</Text>
          <Text style={styles.textLogoCategoria}>Politica</Text>
          <Text style={styles.textLogoCategoria}>Jogos</Text>
        </View>
       <View style={{flexDirection:'row', width:380, justifyContent:'space-around', marginLeft:6,marginTop:10}}>
          <TouchableOpacity style={{backgroundColor:'#00134d', width:120, borderRadius:5}} onPress={() => nav.navigate('produto')}>
            <Image  style={styles.imageProduto}  source={require('../../assets/imagens/img-arte.jpg')}/>
            <Text style={{marginLeft:15, color:'white'}}>A surtiu arte...</Text>
            <Text style={{marginLeft:43, color:'white'}}>49,99</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{backgroundColor:'#00134d', width:120, borderRadius:5}} onPress={() => nav.navigate('produto')}>
            <Image  style={styles.imageProduto} source={require('../../assets/imagens/img-arte.jpg')}/>  
            <Text style={{marginLeft:15, color:'white'}}>A surtiu arte...</Text>
            <Text style={{marginLeft:43, color:'white'}}>49,99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#00134d', width:120, borderRadius:5}} onPress={() => nav.navigate('produto')}>
            <Image  style={styles.imageProduto} source={require('../../assets/imagens/img-arte.jpg')}/>  
            <Text style={{marginLeft:15, color:'white'}}>A surtiu arte...</Text>
            <Text style={{marginLeft:43, color:'white'}}>49,99</Text>
          </TouchableOpacity>
          </View>
        
      </View>  
          
    );
}
const styles = StyleSheet.create({
background:{
  width:'100%',
  height:'100%',
  backgroundColor:'#87CEFA',
},
containerLogo:{
  justifyContent:'center',
  alignItems:'center'
},
logo:{
  height: 70,
  width: 270,
},
containerCep:{
  backgroundColor: '#6495ED',
  width:'100%',
  padding: 15,
},
conteinerLogoFrete:{
  alignItems:'center',
  justifyContent:'center',
  padding:10,
},
logoFrete:{
  height: 50,
  width: 100,
},
textFrete:{
  fontSize: 22,
  padding:10,
  color: 'white',
  fontWeight: 'bold',
  fontStyle: 'italic'
},
textRegulamento:{
  textAlign:'center',
  fontFamily:'monospace',
  fontStyle: 'italic',
  fontWeight: 'bold',
  fontSize: 10,
  borderColor: "white",
  borderWidth: 1,
  padding:5,
  color:'white'
},
containerPromo:{
  alignItems:'center',
  justifyContent:'center',
  width:'99%',
  marginTop:-110  
},
imgPromo:{
  height: '50%',
  width: '99%',
  borderRadius: 5,
},
logoCategoria:{
  width:60,
  height:60,
  marginTop:-80,
},
textLogoCategoria:{
  color:'white',
  marginTop:-10
},
conteinerTextNovidades:{
  padding:10
},
textNovidades:{
  fontWeight: 'bold',
  fontSize: 16,
  borderColor: "white",
  color:'white'
},
imageProduto:{
  height:110,
  width:66,
  marginLeft:26,
  marginTop: 5
}
})