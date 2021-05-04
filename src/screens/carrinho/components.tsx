import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Carrinho } from '../../models/carrinho';
import {Button} from 'react-native-elements';

export interface ItemCarrinhoProps {
    carrinho:Carrinho
    onExcluir(id: string): void;
}

export function ItemCarrinho (props: ItemCarrinhoProps) {
    const {carrinho} = props;
    return (
        <SwipeRow disableRightSwipe stopRightSwipe={-100} rightOpenValue={-100} >
        <View>
          <Button title='Remover' buttonStyle={{backgroundColor:'#ff4d4d', height:'100%'}}  onPress={() => props.onExcluir(carrinho.id)}/>
        </View>
        <View style={styles.conteinerPrincipal}>
          <View style={styles.conteiner}>
            <TouchableOpacity style={styles.conteiner2}>
              <View style={styles.conteiner3}>
                <Text style={styles.titulo}>{carrinho.titulo}</Text>
                <Text style={styles.descricao}>{carrinho.descricao}</Text>
                <View style={styles.conteinerPrecoquant}>
                  <Text style={styles.preco}>R${carrinho.preco}</Text>
                  <TouchableOpacity>
                    <Text style={styles.quantidade}>Qtd:  -  {carrinho.quantidade}  +</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image source={carrinho.imagem} style={styles.imagemProduto}/>
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
  width: 100,
  height: 151,
  marginTop:-130

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
  backgroundColor:'#004466',
  padding: 20,
  width:'100%',
  justifyContent:'center'
},
conteiner3:{
  marginLeft:110,
  marginTop:30
},
titulo: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'white',
  padding: 5,
},
preco:{
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  padding: 5
},
quantidade:{
  fontSize: 16,
  color: 'white',
  padding: 5
},
descricao:{
  fontSize: 12,
  color: '#1a1a00',
  padding: 6,
},
conteinerPrecoquant:{
  flexDirection:'row',
  justifyContent: 'space-between',
  marginTop:15
},
conteinerBtn:{
  height:'100%',
  color:'black'
}
});
