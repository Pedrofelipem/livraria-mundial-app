import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';



export interface ParceirosScreenProps {
}

export function ParceirosScreen (props: ParceirosScreenProps) {
    const nav = useNavigation();
    return (
      <View>
        <StatusBar/>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.navigate("conta")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"}/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Parceiros</Text>
        </View>
        <AdMobBanner
            adUnitID="ca-app-pub-1384872780907318/6711735392"
            bannerSize="banner"
        />
      </View>
    );
}
const styles = StyleSheet.create({
    corFundo: {
      backgroundColor: "black",
      height: "100%",
    },
    header: {
      backgroundColor: "#003366",
      flexDirection: "row",
      width: "100%",
      padding: 18,
    },
    textHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 10,
      color:"white"
    }
});
