import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen(props) {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>

                <View style={styles.topo}>
                    <Image
                        source={require("../assets/mlr.jpg")}
                        style={styles.logo}
                    />

                    <TouchableOpacity style={styles.NumeroTelefoneCont}>
                        <MaterialCommuityIcons name="web" style={styles.IconeViagem} />
                        <Text style={styles.Viagens}>Viagens</Text>
                        <Text style={styles.NumeroTelefone}>55+ 9999-999</Text>

                    </TouchableOpacity>
                    <Image
                        source={require("../assets/Pato.png")}
                        style={styles.Patinho}
                    />


                    <Text style={styles.Nome}>AllVoyage</Text>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.Login} onPress={() => props.navigation.navigate('Login')} >Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.Logout} >Log out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonNac} onPress={() => props.navigation.navigate('Nacional')}>Nacional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonInter} onPress={() => props.navigation.navigate('Internacional')}>Internacional</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.menu}>
                    <Text style={styles.Nome2}>AllVoyage</Text>
                    <Image
                        source={require("../assets/Pato.png")}
                        style={styles.Patinho2}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.NomePacotes} onPress={() => props.navigation.navigate('Pacotes')}>Pacotes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.NomeNacionais}>Nacionais   /</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.NomeInternacionais}>Internacionais</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.corpo}>
                    <Image
                        source={require("../assets/e.jpg")}
                        style={styles.Image2}
                    />


                    <View style={styles.containerer}>
                        <Image
                            source={require("../assets/o.jpg")}
                            style={styles.Image3}
                        />
                        <Text style={styles.TextImage3}> Teste Descubra o mundo através dos seus próprios passos. Aventura, cultura e memórias esperam por você em cada destino  </Text>
                    </View>
                </View>

                <View style={styles.rodape}>
                    <MaterialCommuityIcons name="instagram" style={styles.Rodape1} />
                    <MaterialCommuityIcons name="facebook" style={styles.Rodape2} />
                    <MaterialCommuityIcons name="whatsapp" style={styles.Rodape3} />
                </View>

            </ScrollView>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({


    topo: {
        flex: 1,
        backgroundColor: "yellow"
    },

    menu: {
        flex: 1,
        backgroundColor: "red"
    },

    corpo: {
        flex: 1,
        backgroundColor: "blue"
    },

    container: {
        backgroundColor: '#fff'
    },

    containerer: {
        justifyContent: 'center',
        flexDirection: 'row',
        // bottom: 60
    },
    rodape: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#B0D4EE',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: 460,
        height: 240,
    },
    Image2: {
        width: 360,
        height: 200,
        left: 25,
        bottom: 140,
        borderRadius: 20,

    },
    Image3: {
        width: 180,
        height: 180,
        borderRadius: 20

    },
    buttonNac: {
        fontFamily: 'Jomolhari',
        color: 'black',
        left: '4%',
        position: 'absolute',
        top: -320,

    },
    buttonInter: {
        fontFamily: 'Jomolhari',
        color: 'black',
        right: '4%',
        position: 'absolute',
        top: -320,

    },
    NumeroTelefoneCont: {
        fontSize: 12,
        fontFamily: 'Jomolhari',
        color: 'black',
        alignItems: "end",
        top: -127,
        left: 2
    },
    NumeroTelefone: {
        fontSize: 12,
        fontFamily: 'Jomolhari',
        color: 'gray',
        alignItems: "end",
        top: -127,
        left: 2
    },

    Viagens: {
        fontSize: 12,
        fontFamily: 'Jomolhari',
        color: 'black',
        left: 100,
        top: -110,
    },
    IconeViagem: {
        top: -95,
        left: 85
    },
    Patinho: {
        height: 24,
        width: 24,
        top: -279,
        left: 197
    },
    Patinho2: {
        height: 24,
        width: 30,
        left: 30,
        bottom: 120

    },
    Nome: {
        top: -279,
        left: 180,
        color: 'black'
    },
    Nome2: {
        fontSize: 17,
        left: 10,
        color: 'black',
        bottom: 120
    },
    NomePacotes: {
        fontSize: 19,
        left: 110,
        color: '#6EAAE8',
        bottom: 168
    },
    NomeNacionais: {
        left: 212,
        color: 'gray',
        bottom: 189
    },
    NomeInternacionais: {
        left: 300,

        color: 'gray',
        bottom: 208
    },
    TextImage3: {
        width: 200,
        fontSize: 16,
        textAlign: 'center',
        top: 32
    },
    Login: {
        top: -320,
        left: 300,
        color: 'white'
    },
    Logout: {
        top: -340,
        left: 356,
        color: 'white'
    },
    Rodape1: {
        // width: 80,
        fontSize: 40,
        // left: 20,
        // alignItems: 'baseline',

    },
    Rodape2: {
        // width: 80,
        fontSize: 40,
        // left: 200,
        // bottom: 38,
        // alignItems: 'baseline'
    },
    Rodape3: {
        // width: 100,
        fontSize: 40,
        // bottom: 79,
        // left: 370,
        // alignItems: 'baseline'
    },

});
