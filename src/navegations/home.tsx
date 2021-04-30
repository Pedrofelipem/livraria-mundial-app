import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IndexScreen } from '../screens/home/index';
import { CategoriaScreen } from '../screens/categoria/categoria';
import { CarrinhoScreen } from '../screens/carrinho/carrinho';
import { FavoritoScreen } from '../screens/favorito/favorito';
import { ContaScreen } from '../screens/conta/conta';
import { FontAwesome, FontAwesome5, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export const NavegacaoIndex = () => (
    <Tab.Navigator >
        <Tab.Screen name="geral" component={IndexScreen} />
        <Tab.Screen name="config" component={FavoritoScreen} />
    </Tab.Navigator>
)