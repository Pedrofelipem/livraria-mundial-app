import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IndexScreen } from '../screens/home/index';
import { CategoriaScreen } from '../screens/categoria/categoria';
import { CarrinhoScreen } from '../screens/carrinho/carrinho';
import { FavoritoScreen } from '../screens/favorito/favorito';
import { ContaScreen } from '../screens/conta/conta';
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export const NavegacaoIndex = () => (
    <Tab.Navigator tabBarOptions={{
        inactiveBackgroundColor: '#003366',
        activeBackgroundColor: '#001a33',
        activeTintColor: '#0059b3',
        inactiveTintColor: '#0059b3',
        labelStyle: {
            fontSize: 11,
            paddingBottom: 6,
            fontWeight: 'bold',
        },
        iconStyle: {
            marginTop: 3,
        }
        }}>
        <Tab.Screen name="home" component={IndexScreen}
        options={{tabBarLabel:'Home',
        tabBarIcon: (props) => <MaterialIcons name="home" size={25} color={props.focused ? 'white' : '#0059b3'} />}}/>

        <Tab.Screen name="catagoria" component={CategoriaScreen}
        options={{tabBarLabel:'Categorias',
        tabBarIcon: (props) => <MaterialIcons name="toc" size={25} color={props.focused ? 'white' : '#0059b3'} />}}/>

        <Tab.Screen name="carrinho" component={CarrinhoScreen}
        options={{tabBarLabel:'Carrinho',
        tabBarIcon: (props) => <MaterialIcons name="shopping-cart" size={25} color={props.focused ? 'white' : '#0059b3'} />}}/>

        <Tab.Screen name="favorito" component={FavoritoScreen}
        options={{tabBarLabel:'Favoritos',
        tabBarIcon: (props) => <MaterialIcons name="favorite-border" size={25} color={props.focused ? 'white' : '#0059b3'}/>}}/>

        <Tab.Screen name="conta" component={ContaScreen}
        options={{tabBarLabel:'Sua conta',
        tabBarIcon: (props) => <MaterialIcons name="perm-identity" size={25} color={props.focused ? 'white' : '#0059b3'}/>}}/>
    </Tab.Navigator>
)