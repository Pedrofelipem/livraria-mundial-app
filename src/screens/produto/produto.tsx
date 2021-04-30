import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, } from 'react-native';

export interface ProdutoScreeProps {
}

export function ProdutoScreen (props: ProdutoScreeProps) {
    return (
        <View style={styles.background}>
            <StatusBar/>
            <View style={styles.conteinerProduto}>    
                <View style={styles.conteinerImg}>
                    <Text style={styles.titulo}>A SURTIU ARTE DE LIGAR O FODA-SE</Text>
                    <Image style={styles.imgHomem} source={require('../../assets/imagens/img-arte.jpg')}/>
                </View>
                <View style={styles.conteinerInfo}>
                    <View style={{flexDirection:'row', justifyContent:'space-around',}}>
                        <Text style={styles.info}>ISBN</Text>
                        <Text style={styles.info}>AUTOR</Text>
                        <Text style={styles.info}>IDOMA</Text>
                        <Text style={styles.info}>EDITORA</Text>    
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around',}}>
                        <Text style={styles.info}>05105101</Text>
                        <Text style={styles.info}>Mark Manson</Text>
                        <Text style={styles.info}>Português</Text>
                        <Text style={styles.info}>Intrínseca</Text>    
                    </View>
                    <View>
                        <Text style={styles.descricao}>Descrição</Text>
                        <Text>
                        Mark Manson usa toda a sua sagacidade de escritor e seu olhar crítico para propor um novo caminho rumo a uma vida melhor, mais coerente com a realidade e consciente dos nossos limites. E ele faz isso da melhor maneira.
                        Como um verdadeiro amigo, Mark se senta ao seu lado e diz, olhando nos seus olhos: você não é tão especial. Ele conta umas piadas aqui, dá uns exemplos inusitados ali, joga umas verdades na sua cara e pronto, você já se sente
                        muito mais alerta e capaz de enfrentar esse mundo cão.
                        Para os céticos e os descrentes, mas também para os amantes do gênero, enfim uma abordagem franca e inteligente que vai ajudar você a descobrir o que é realmente importante na sua vida, e f*da-se o resto.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        backgroundColor:'#87CEFA'
    },
    titulo:{
        padding:5,
        fontSize: 20,
        fontWeight:'bold'
        
    },
    imgHomem:{
        height: 350,
        width: 220, 
        borderRadius: 5,
    },
    conteinerImg:{
        padding:7,
    },
    conteinerProduto:{
        marginTop:50,  
    },
    info:{
        color:'white',
        fontWeight:'bold',
    },
    
    
    conteinerInfo:{
        backgroundColor:'#34495E',
        padding:20,
        marginTop:20,
        borderRadius: 5,

    },
    descricao:{
        fontSize:20,
        fontWeight:'bold',
        padding: 7,

    },
      

})