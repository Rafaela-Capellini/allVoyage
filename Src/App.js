import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function App(){
    return(
        <View style={styles.container}>
            <Image
                source={require("./assets/mlr.jpg")}
                style={styles.logo}
            />

            <TouchableOpacity style={styles.NumeroTelefone}>
                <MaterialCommuityIcons name="home" color={color} size={size} />
                <Text style={styles.NumeroTelefone}>55+ 9999-999</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonNac}>Nacional</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonInter}>Internacional</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ffff',
    },
    logo: {
        width: 460,
        height: 240,
    },
    buttonNac: {
        fontFamily: 'Jomolhari',
        color:'black',
        left:'4%',
        position: 'absolute',
        top: -170,
    },
    buttonInter:{
        fontFamily: 'Jomolhari',
        color:'black',
        right:'4%',
        position: 'absolute',
        top: -170,
    },
    NumeroTelefone:{
        fontFamily: 'Jomolhari',
        color:'black',
        left:'2%',
        
      
        top: -110,
    }
});
