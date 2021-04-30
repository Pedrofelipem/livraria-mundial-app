
import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {CardAnimationContext, CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/login/login';
import {CadastroScreen} from '../screens/cadastro/cadastro';
import {IndexScreen} from '../screens/home/index';

const Stack = createStackNavigator();

export const MainNavegation = () =>(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="home" component={IndexScreen}/>
            <Stack.Screen name="cadastro" component={CadastroScreen}/> 
            <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)
