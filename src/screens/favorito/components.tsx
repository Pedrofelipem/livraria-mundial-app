import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Favorito } from '../../models/favorito';
import {Button} from 'react-native-elements';


export interface ItemFavoritoProps {
    favorito:Favorito
    onExcluir(id: string): void;
}

export function ItemFavorito (props: ItemFavoritoProps) {
    const {favorito} = props;
    return (
      <SwipeRow disableRightSwipe stopRightSwipe={-100} rightOpenValue={-100} >
        <View >
          <Button  buttonStyle={{backgroundColor:'red', height:'100%',}} title='Remover' onPress={() => props.onExcluir(favorito.id)}/>
        </View>
        <View style={styles.conteinerPrincipal}>
          <View style={styles.conteiner}>
            <TouchableOpacity style={styles.conteiner2}>
              <View style={styles.conteiner3}>
                <Text style={styles.titulo}>{favorito.titulo}</Text>
                <Text style={styles.titulo}>R${favorito.preco}</Text>
              </View>
              <Image source={favorito.imagem} style={styles.imagemProduto}/>
            </TouchableOpacity>
          </View>
        </View>
      </SwipeRow>
    );
}
const styles = StyleSheet.create({
header:{
  backgroundColor:'#003366',
  padding: 18,
  fontSize: 18,
  fontWeight:'bold'
},
imagemProduto:{
  width: 72,
  height: 110,
  marginTop:-80

},
conteinerPrincipal:{
  backgroundColor:'#363636',
},
conteiner:{
  
  padding:15, 
},
conteiner2:{
  borderRadius:3,
  borderColor:'white',
  backgroundColor:'#1b1b18',
  padding: 10,
  width:'100%',
  justifyContent:'center'
},
conteiner3:{
marginLeft:100,
marginTop:30
},
titulo: {
fontSize: 14,
fontWeight: 'bold',
color: '#444',
padding:5
},
conteinerBtn:{
backgroundColor:'red',
height:'100%',
color:'black'
}
});

