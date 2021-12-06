import * as React from 'react';
import {Text, View, StyleSheet, FlatList,TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {Card, ListItem, Button, Icon} from 'react-native-elements';
/*Importaciones de componentes necesarios */

export default function Detalle({route}) {
//Forma de obtener información de servicios
let data=route.params;
  return(
//Código de visualización de servicios en cartas 
      <View style={styles.container}>
      <Card>
      <Card.Title>{data.title}</Card.Title>
      <Card.Divider/>
        <Image style={styles.imagen} source={data.ruta}/>
        <Text style={styles.title}>Clave:</Text>
        <Text style={styles.detalle}>{data.key}</Text>
        <Text style={styles.title}>Descripción:</Text>
        <Text style={styles.detalle}>{data.descrip} </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
//Códigos de estilos para cada elemento 
  container: {
    flex:1,
    padding: 24,
    backgroundColor: "black"
  },
  title: {
    marginTop: 5,
    paddingVertical: 5,
    textAlign:"center",
    fontSize:20,
    fontWeight: "bold",
  },
  imagen: {
    marginTop: 4,
    paddingVertical: 5,
    color:"#20232a",
    alignSelf:'center',
    height:200,
    width:200,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  detalle: {
    justifyContent:'center',
    fontWeight: "bold",
    textAlign:'center',
  }
});