import React, {useEffect, useState} from "react";
import {ScrollView, Button, View, Alert, ActivityIndicator, StyleSheet} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import firebase from "../database/firebase";
/*Importaciones de componentes necesarios */

//Código para la extraccion de datos 
const UserDetailScreen = (props) =>{
    const initalState = {
        id: "",
        nombre: "",
        cargo: "",
        turno: "",
        correo: "",
        telefono: "",
    };

    const [user, setUser]= useState(initalState);
    const [loading, setLoading] = useState(true);

    const handleTextChange = (value, prop) => {
        setUser({ ...user, [prop]: value});
    };

    //Código para llamar base datos
    const getUserById = async (id) => {
        const dbRef = firebase.db.collection("clientes").doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({ ...user, id: doc.id});
        setLoading(false);
    };
//Codigo para eliminación de usuario
    const deleteUser = async () => {
        setLoading(true)
        const dbRef = firebase.db.collection("clientes").doc(props.route.params.userId);
        await dbRef.delete();
        setLoading(false)
        props.navigation.navigate("Lista mensaje");
    };



//alerta sobre la eliminación
    const openConfirmationAlert = () => {
        Alert.alert(
            "Eliminar cliente",
            "Estas seguro?",
            [
                {text: "Yes", onPress: () => deleteUser()},
                {text: "No", onPress: () => console.log("Cancelado")},
            ],
            {
                cancelable: true,
            }
        );
    };

//Código de recuperación de datos del cliente
    const updateUser = async () => {
        const userRef = firebase.db.collection("clientes").doc(user.id);
        await userRef.set({
            nombre: user.nombre,
            cargo: user.cargo,
            turno: user.turno,
            correo: user.correo,
            telefono: user.telefono,
        });
        setUser(initalState);
        props.navigation.navigate("Lista de mensajes");
    };

    useEffect(() => {
        getUserById(props.route.params.userId);
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
        );
    }

//visualización de campos o datos para editar o eliminar
    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Nombre"
                    
                    style={styles.inputGroup}
                    value={user.nombre}
                    onChangeText={(value)=> handleTextChange(value, "nombre")}
                />
            </View>
            <View>
            <TextInput
                    placeholder="Email"
                    
                    style={styles.inputGroup}
                    value={user.correo}
                    onChangeText={(value)=> handleTextChange(value, "correo")}
                />
            </View>
            <View>
            <TextInput
                    placeholder="Telefono"
                    
                    style={styles.inputGroup}
                    value={user.telefono}
                    onChangeText={(value)=> handleTextChange(value, "telefono")}
                />
            </View>
            <View>
            <TextInput
                    placeholder="Descripción"
                    
                    style={styles.inputGroup}
                    value={user.descripcion}
                    onChangeText={(value)=> handleTextChange(value, "descripcion")}
                />
            </View>
            <View style={styles.btn}>
                <Button
                  title="Borrar"
                  onPress={() => openConfirmationAlert()}
                  color="#E37399"
                  />
            </View>
            
            
            <Button
              onPress={() => props.navigation.navigate('Pedido realizado')}
              title="Realizado"
            />
        </ScrollView>
    );
};

//Códigos de estilos para cada elemento 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "black"
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        backgroundColor: "white"
    },
    btn: {
        marginBottom: 7,
    },
});

export default UserDetailScreen;