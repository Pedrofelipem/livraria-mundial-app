import * as React from 'react';
import {Button} from 'react-native-elements'
import { View, StyleSheet, Text, KeyboardAvoidingView, Image, ImageBackground, TextInput, TouchableOpacity, StatusBar, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/core'

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    const nav = useNavigation()
    const [erro, setErro] = React.useState('')
    const logar  = async function ({ email, senha }: any) {
        setErro('')
        await new Promise((resolve) => setTimeout(() => resolve(''), 1000));
    
        if (email == 'pedro@teste.com' && senha == 'teste123')
          nav.navigate('home')
        else
          setErro('Email ou senha incorreta')
      }
      
    return (
        <ImageBackground source={require('../.././Img-fundo-app.jpg')} style={styles.imageBackground}>
        <StatusBar/>
        <Formik
              initialValues={{email:'',senha:''}}
              validationSchema={Yup.object().shape({
                email: Yup.string().required('Campo email é obrigatório')
                                    .email('Campo precisa de email válido'),
                senha: Yup.string().required('senha email é obrigatório')
                                    .min(6,'Minimo é caracteres')
              })}

              onSubmit={logar}
        >
        {({handleChange, handleSubmit, errors, isSubmitting, touched, handleBlur}) =>(
          <><View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../.././logo.png')} />
          </View>

            <View style={styles.container}>
              <TextInput style={styles.input} onBlur={handleBlur('email')} placeholder="Email" onChangeText={handleChange('email')} />
              {touched.email && <Text style={styles.erro}>{errors.email}</Text>}
              <TextInput style={styles.input} onBlur={handleBlur('senha')} secureTextEntry={true}  placeholder="Senha" onChangeText={handleChange('senha')} />
              {touched.senha && <Text>{errors.senha}</Text>}
              <text style={styles.erroLogin}>{erro}</text>
              { isSubmitting && <ActivityIndicator size={30} color='white'/>}
              { !isSubmitting && <Button title='Acessar' buttonStyle={{padding:10, width:318}} raised={true} onPress={() => handleSubmit}/>}
              <TouchableOpacity style={styles.btnRegister} onPress={() => nav.navigate('cadastro')}>
                <Text style={styles.registerText}>criar sua conta</Text>
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
    erroLogin:{
      textAlign:'center',
      fontSize:20,
      color:'red',
      marginTop: -15,
    },
    containerLogo:{
      flex: 1,
      justifyContent:'center',
    },
    logo:{
      height: 180,
      marginTop:100
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
    submitText:{
      color:'#FFF',
      fontSize: 18
    },
    btnRegister:{
      marginTop: 10
    },
    registerText:{
      color:'#FFF'
    }
  })