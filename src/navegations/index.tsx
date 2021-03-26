import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {CardAnimationContext, CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './../assets/screens/login/login';
import {CadastroScreen} from './../assets/screens/cadastro/cadastro';
import {IndexScreen} from './../assets/screens/home/index';

const Stack = createStackNavigator();

export const MainNavegation = () =>(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="login" component={LoginScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
            <Stack.Screen name="cadastro" component={CadastroScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/> 
            <Stack.Screen name="home" component={IndexScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forScaleFromCenterAndroid}}/>
        </Stack.Navigator>
    </NavigationContainer>
)