import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, StatusBar} from 'react-native';
import { Categoria } from '../../models/categoria';
import {ItemCategoria} from'./components';

export interface CategoriaScreenProps {
}

export function CategoriaScreen (props: CategoriaScreenProps) {

    const categoriaFlat: Categoria[] = [
      {
        titulo:'Autoajuda', 
        id:'1'
      },
      {
        titulo:'Ciências Humanas',
        id:'2'
      },
      {
        titulo:'Adiministração',
        id:'3'
      },
      {
        titulo:'HQs e Mangás', 
        id:'4'
      },
      {
        titulo:'Literatura Nacinal',
        id:'5'
      },
      {
        titulo:'Didáticos',
        id:'6'
      },
      {
        titulo:'Medicina',
        id:'7'
      },
      {
        titulo:'Matemática',
        id:'8'},
      {
        titulo:'Tecnologia', 
        id:'9'
      }
    ]
    return (
      <ScrollView>
        <StatusBar/>
        <Text style={styles.header}>Categorias</Text>
        <FlatList 
            data={categoriaFlat} 
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) =>(
            <ItemCategoria 
              categoria={item} />
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
    color:'white'
  } 
});