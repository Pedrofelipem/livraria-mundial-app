import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { Produto } from '../../models/produto';
import {useNavigation} from '@react-navigation/core';

export interface ItemProdutoProps {
    produto:Produto
}

export function ItemProduto (props: ItemProdutoProps) {
    const nav = useNavigation()
    const {produto} = props;

    return (
        <View>
          <StatusBar/>
          <View >
            <View style={styles.conteiner}>
              <View style={styles.conteiner2}>
                <Image source={produto.imagem} style={styles.imagemProduto}/>
                <View style={styles.conteiner3}>
                  <Text style={styles.titulo}>{produto.titulo}</Text>
                </View>
              </View>
              
              <View style={styles.conteinerValor}>
                <Text style={styles.preco}>R$ {produto.preco}</Text>
                <Text>à vista</Text>
                <Text>Em até 1x de R$ 49,99</Text>
              </View>
              <Button buttonStyle={[styles.btnComprar]} title="COMPRAR"/>
              <Button buttonStyle={[styles.btnCarrinho]} title="CARRINHO" onPress={() => nav.navigate('carrinho')}/>
            </View>
          </View>
          <View style={styles.conteinerInfo}>
              <View style={{flexDirection:'row', justifyContent:'space-around',}}>
                  <Text style={styles.info}>ISBN</Text>
                  <Text style={styles.info}>AUTOR</Text>
                  <Text style={styles.info}>IDOMA</Text>
                  <Text style={styles.info}>EDITORA</Text>    
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-around',}}>
                  <Text style={styles.info}>05105</Text>
                  <Text style={styles.info}>Mark Manson</Text>
                  <Text style={styles.info}>Português</Text>
                  <Text style={styles.info}>Intrínseca</Text>    
              </View>
          </View>
          
          <View style={styles.descricaoConteiner}>
            <Text style={styles.descricaoTitulo}>Decrição</Text>
            <Text style={styles.descricaoLivro}>Mark manson não tem meandros ou meias palavras. Com um estilo honesto, 
            divertido e incrivelmente perspicaz, ele se tornou popular escrevendo em seu blog o que
            as pessoas realmente precisam ouvir, pois só isso funciona para nos fazer evoluir pessoal 
            e profissionalmente. Mora em Nova York.
            </Text>
          </View>
        </View>
    );
}
const styles = StyleSheet.create({
continerPrincipal:{
  backgroundColor:'#363636',
},
info:{
  color:'white',
  fontWeight:'bold',
},
conteinerInfo:{
  backgroundColor:'#34495E',
  padding:20, 
},
conteinerValor:{
  padding:10,
},
descricao:{
  fontSize:20,
  fontWeight:'bold',
  padding: 7,
},
btnComprar:{
  padding:20,
  backgroundColor:'#008000',
},
btnCarrinho:{
  padding:20,
  backgroundColor:'#006bb3',
  marginTop:6
},
header:{
  backgroundColor:'#003366',
  padding: 18,
  fontSize: 18,
  fontWeight:'bold'
},
imagemProduto:{
  width: 180,
  height: 271,
  marginLeft:'25%'
},
conteinerPrincipal:{
  backgroundColor:'black',
},
conteiner:{
padding:15, 
},
conteiner2:{
  backgroundColor:'#004466',
  padding: 10,
},
conteiner3:{
},
titulo: {
fontSize: 20,
color: 'white',
padding: 15,
textAlign:'center'
},
preco:{
  fontWeight:'bold',
  color:'white',
  fontSize:25
},
descricaoConteiner:{
  backgroundColor:'#80ccff'
 
},
descricaoTitulo:{
  marginLeft: 12,
  fontSize:20,
  fontWeight:'bold',
  color:'white',
  padding: 5,
},
descricaoLivro:{
  fontSize:18,
  textAlign:'justify',
  width:355,
  marginLeft: 12,
  color: 'white',
  padding: 5,
},
})
