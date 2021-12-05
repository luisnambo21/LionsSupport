import * as React from 'react';
import { Text, View,TouchableOpacity,Image,} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Portada from "./screens/Portada";
import UserList from './screens/UserList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import Inicio from './screens/Inicio';
import Detalle from './screens/Detalle';

/* //Importaciones de componentes necesarios */



export default function App() {
  
  const Stack = createStackNavigator();
/* Código para la navegación entre pantallas donde cada nueva pantalla se coloca en la parte superior de una pila.*/  
  return (
     <NavigationContainer>
      <Stack.Navigator
//Estilo del encabezado 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle:{
          fontWeight: "bold",
          textAling: "center",
          alingItems:"center",
        },
      }}
    >
      <Stack.Screen name="LIONS SUPPORT" component={Portada}/>
      <Stack.Screen name="Lista de mensajes" component={UserList} />
      <Stack.Screen name="Pedido realizado" component={CreateUserScreen} />
      <Stack.Screen name="Detalle del pedido" component={UserDetailScreen} />
      <Stack.Screen name="Servicios" component={Inicio}/>
      <Stack.Screen name="Detalle" component={Detalle}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}