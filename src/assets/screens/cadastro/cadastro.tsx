import * as React from 'react';
import {Button} from 'react-native-elements';
import { View, StyleSheet, StatusBar, Text, KeyboardAvoidingView, Image, ImageBackground, TextInput, TouchableOpacity, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/core'

export interface CadastroScreenProps {
}

export function CadastroScreen (props: CadastroScreenProps) {
  
  const cadastrar  = async function ({ nome, cpf, telefone, email, senha }: any){
    await new Promise((resolve) => setTimeout(() => resolve(''), 1000));
    nav.navigate('home')
  }
  const [erro, setErro] = React.useState('')
    const nav = useNavigation()
    return (
        <ImageBackground source={require('../.././Img-fundo-app.jpg')} style={styles.imageBackground}>
        <StatusBar/>
          <Formik
                initialValues={{ nome: '', cpf: '', telefone: '', email: '',  senha: '' }}
                validationSchema={Yup.object().shape({
                    nome: Yup.string().required('(Nome obrigatório)').min(5, '(Nome completo)').max(25, 'Máximo 25 caracteres'),
                    cpf: Yup.string().required('(CPF obrigatório)').min(11, '(Mínimo 11 caracteres)').max(11, 'Máximo 11 caracteres'),
                    telefone: Yup.string().required('(Telefone obrigatório)').min(8, '(Mínimo 8 caracteres)').max(10, '(Máximo 10 caracteres)'),
                    email: Yup.string().required('(Email obrigatório)').email('(Email inválido)').max(30, '(Máximo 30 caracteres)'),
                    senha: Yup.string().required('(Senha obrigatória)').min(8, '(Mínimo 8 caracteres)').max(20, '(Máximo 20 caracteres)')
                })}
                onSubmit={cadastrar}
          >
          {({handleChange, handleSubmit, errors, isSubmitting, touched, handleBlur}) =>(
            <><View style={styles.containerLogo}>
              <Image style={styles.logo} source={require('../.././logo.png')} />
            </View>
              <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Digite seu nome"  autoCorrect={false} onChangeText={handleChange('nome') } />
                {touched.nome && <Text style={styles.erro}>{errors.nome}</Text>}
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite seu CPF" autoCorrect={false} onChangeText={handleChange('cpf')} />
                {touched.cpf && <Text style={styles.erro}>{errors.cpf}</Text>}
                <TextInput style={styles.input} placeholder="Digite seu número de celular"  autoCorrect={false} onChangeText={handleChange('email') } />
                {touched.telefone && <Text style={styles.erro}>{errors.telefone}</Text>}
                <TextInput style={styles.input} placeholder="Digite seu e-mail" autoCorrect={false} onChangeText={handleChange('email') } />
                {touched.email && <Text style={styles.erro}>{errors.email}</Text>}
                <TextInput style={styles.input} placeholder="Digite sua senha" autoCorrect={false} onChangeText={handleChange('senha') } />
                {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
                  { isSubmitting && <ActivityIndicator size={30} color='white'/>}
                  { !isSubmitting && <Button title='Criar conta' buttonStyle={{borderRadius:7}}  raised={true} onPress={() => handleSubmit}/>}
                <TouchableOpacity style={styles.btnRegister} onPress={() => nav.navigate('login')}>
                  <Text style={styles.registerText}>Já tenho uma conta!</Text>
                </TouchableOpacity>
              </View></>
          )}
          </Formik>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    imageBackground:{
      width:'100%',
      height:'100%',
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
     containerLogo:{
      flex: 1,
      justifyContent:'center',
    },
    logo:{
      height: 180,
      marginTop:-50
    },
    container:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      width: '90%',
      paddingBottom: 150
    },
    input:{
      backgroundColor:'#FFF',
      width:'90%',
      marginBottom: 15,
      color:'#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 12
    },
    erro:{
      color:'white',
      textAlign:'right',
      fontSize:15
    },
    Button:{
      backgroundColor:'#35AAFF',
      width:'90%',
      height: 45,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 7
    },
    submitText:{
      color:'#FFF',
      fontSize: 18
    },
    btnRegister:{
      marginTop: 10
    },
    registerText:{
      color:'#FFF'
    },
  })