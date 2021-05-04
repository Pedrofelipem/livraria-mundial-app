import * as React from 'react';
import { View, Text, FlatList, StyleSheet,ScrollView, StatusBar } from 'react-native';
import { Favorito } from '../../models/favorito';
import {ItemFavorito} from'./components';

export interface FavoritoScreenProps {
}

export function FavoritoScreen (props: FavoritoScreenProps) {

  const favoritoFlat: Favorito[] = [
    {
      titulo:'A surtiu arte de ligar o foda-se',
      id:'1', 
      imagem: require('../../assets/imagens/img-arte.jpg'),
      preco:'49,99'
    },
    {
      titulo:'A surtiu arte de ligar o foda-se',
      id:'2', 
      imagem: require('../../assets/imagens/img-arte.jpg'), 
      preco:'49,99'
    },
    {
      titulo:'A surtiu arte de ligar o foda-se',
      id:'3', 
      imagem: require('../../assets/imagens/img-arte.jpg'),
      preco:'49,99'
    },
    {
      titulo:'A surtiu arte de ligar o foda-se',
      id:'4', 
      imagem: require('../../assets/imagens/img-arte.jpg'),
      preco:'49,99'
    },
    {
      titulo:'A surtiu arte de ligar o foda-se',
      id:'5', 
      imagem: require('../../assets/imagens/img-arte.jpg'), 
      preco:'49,99'
    },
    {
      titulo:'A surtiu arte de ligar o foda-se',
      id:'6', 
      imagem: require('../../assets/imagens/img-arte.jpg'),
      preco:'49,99'
    }
  ]
    return (
      <ScrollView >
          <StatusBar/>
         <Text style={styles.header}>Favoritos</Text>
         <FlatList 
            data={favoritoFlat} 
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) =>(
            <ItemFavorito 
              favorito={item} 
              onExcluir={(id) => console.log(id)}/>
            )}
          />
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  header:{
    backgroundColor:'#003366',
    padding: 18,
    fontSize: 18,
    fontWeight:'bold',

  }
});

