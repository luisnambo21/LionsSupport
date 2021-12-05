import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import firebase from '../database/firebase';
/*Importaciones de componentes necesarios */

const CreateUserScreen = () =>{
//declaracion de datos a agregar a firebase
    const [state, setState] = useState(
    {
        nombre: "",
        correo: "",
        realizado: "",
        descripcion: "",
        fecha: "",   
    });
const handleChangeText = (nombre,value)=>{
    setState({...state, [nombre]:value})
}

//obtención de datos para registrar
const AddNewUser = async() => {
    if (state.nombre === '') {
        alert('Por favor da un nombre')
    }else{
        try {
            await firebase.db.collection('realizados').add({
        nombre: state.nombre,
        correo: state.correo,
        realizado: state.realizado,
        descripcion: state.descripcion,
        fecha: state.fecha
    })
    alert('guardado')
   

}
catch (error) {console.log(error)}
}
        
}
//Código de formulario para la obtención de datos en forma visual
    return(
        <ScrollView style={styles.container}> 
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Nombre Cliente"
                    onChangeText={(value) => handleChangeText('nombre', value)} 
                />
            </View>
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Correo Cliente"
                    onChangeText={(value) => handleChangeText('correo', value)} 
                />
            </View>
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Atendido por"
                    onChangeText={(value) => handleChangeText('realizado', value)} 
                />
            </View>
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Descripción"
                    onChangeText={(value) => handleChangeText('descripcion', value)} 
                />
            </View>
            <View style={styles.Inputgr}>
                <TextInput
                    placeholder="Fecha de conclusión"
                    onChangeText={(value) => handleChangeText('fecha', value)} 
                />
            </View>
            

            <View>
               <Button title="Guardar" onPress={ () =>AddNewUser()} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
//Códigos de estilos para cada elemento 
    container: {
      flex: 1,
      padding: 40,
      backgroundColor:"black",
    },
    Inputgr: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: "white"
    }
  })

  export default CreateUserScreen