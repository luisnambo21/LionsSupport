import React, {useState} from 'react';
import { Text, View, StyleSheet, FlatList,SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import global from '../estilos';
/*Importaciones de componentes necesarios */


//Imagen de portada
const Portada = (props) => {
    return (
    <>  
     <View style={global.fondo}>
        <Image
          style={global.imagen}
          source={require('../assets/support.png')}
          />
      </View>

    

<View style={global.fixToText}>
      <TouchableOpacity
          style={global.buttonStyle}
          onPress={() =>
            props.navigation.navigate("Lista de mensajes")
          }
//Código para interacción entre pantallas
        >
          <Text style={global.buttonTextStyle}>
            Mensajes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={global.buttonStyle}
          onPress={() =>
            props.navigation.navigate("Servicios")
          }
        >
          <Text style={global.buttonTextStyle}>
            Servicios
          </Text>
        </TouchableOpacity>

        
</View>
    </>
    );
};

export default Portada;