import React, { useState, useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../database/firebase';
/*Importaciones de componentes necesarios */


//Extracción de datos de firebase
const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection('clientes').onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { nombre, correo, telefono, descripcion } = doc.data();
        users.push({
          id: doc.id,
          nombre,
          correo,
          telefono,
          descripcion,
        });
      });
      setUsers(users);
    });
  }, []);

//Visualización de los datos extraidos
  return (
    <ScrollView style={styles.container}>
      
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate('Detalle del pedido', {
                userId: user.id,
              });
            }}>
            <ListItem.Chevron />
            <Avatar
//Lista de mensajes con avatar
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              rounded
            />
            <ListItem.Content style={styles.lista}>
              <ListItem.Title>{user.nombre}</ListItem.Title>
              <ListItem.Subtitle>{user.correo}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
//Códigos de estilos para cada elemento 
    container: {
      
      backgroundColor:"black",
    },
    lista: {
      borderColor: "black"
    }
    
  })
export default UserList;
