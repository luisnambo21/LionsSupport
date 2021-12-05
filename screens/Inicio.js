import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList,TouchableOpacity, Image, Card} from 'react-native';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import estilo from "../estilos";
/*Importaciones de componentes necesarios */

export default function Servicios({navigation}) {
//Código de lista de servicios 
  const DATA = [
 {
      key:'1',
      title: 'Eliminación de spyware y virus',
      descrip:'Los virus y malware están a la orden del día, diariamente se generan nuevos y más potentes archivos maliciosos, es por esto que es muy importante contar con una buena protección (antivirus).',
      ruta:require('../assets/virus2.jpg'),
    },
    {
      key:'2',
      title: 'Optimización de sistemas operativos',
      descrip:'Con el uso constante del equipo, este comienza a saturarse de archivos que no nos son útiles o incluso de archivos maliciosos para nuestro sistema, todo esto puede causar saturaciones a la memoria del sistema e incluso saturación a nuestro disco duro.',
      ruta:require('../assets/opti.jpg'),
    },
    {
      key:'3',
      title: 'Instalación de software',
      descrip:'Cuando adquiere un nuevo sistema es muy importante la configuración de este para su correcto funcionamiento, muchos problemas en los equipos se debe solo a una mala configuración de los sistemas que se utilizan diariamente, no dejes que tu equipo presente fallas, acércate a nosotros.',
      ruta:require('../assets/insta.jpg'),
    },
    {
      key:'4',
      title: 'Mantenimiento preventivo',
      descrip:'El mantenimiento Preventivo y Correctivo es un servicio que ofrecemos para pequeñas y medianas empresas que cuenten con una cantidad moderada de equipos de cómputo, la cual consta de una primera sesión en donde se optimiza el rendimiento de las computadoras y se realizan reportes de sus equipos de cómputo, con el fin de darle un mejor servicio.',
      ruta:require('../assets/ma.jpg'),
    },
    {
      key:'5',
      title: 'Respaldo de Información',
      descrip:'El respaldo de la información es una tarea muy importante que debe de realizarse periódicamente, ya sea en un equipo de producción o de escritorio. El contar con respaldos permite al usuario en algún momento dado recuperar información que haya sido dañada por virus, fallas en el equipo o por accidentes.',
      ruta:require('../assets/re2.jpg'),
    },
    {
      key:'6',
      title: 'Administración de programas',
      descrip:'Se detienen los programas que son innecesarios al momento de encender el equipo y se activan cuando la computadora ya ha iniciado por completo con el objetivo de acelerar el encendido del equipo de cómputo.',
      ruta:require('../assets/adm2.jpg'),
    },
  ];


 return (
   <>
   <View>
    <View style={styles.container}>
      <FlatList
//Interfaz para renderizar lista de servicios 
        data={DATA}
        renderItem={({item})=>(
         <TouchableOpacity onPress={()=>navigation.navigate('Detalle',item)}>
         <Text style={styles.title} >{item.title} </Text>
        <Image style={styles.imagen} source={item.ruta}/>
        </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        />
      </View>
        </View> 


    
    </>
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
    color: "white",
    textAlign:"center",
    fontSize:20,
    fontWeight: "bold",
  },
  imagen: {
    marginTop: 5,
    paddingVertical: 5,
    borderWidth:4,
    borderColor: "white",
    color:"#20232a",
    alignSelf:'center',
    height:200,
    width:250,
    fontWeight: "bold",
  }
});
