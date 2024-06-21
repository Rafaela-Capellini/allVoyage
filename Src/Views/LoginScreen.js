import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView,
    ImageBackground
} from 'react-native';

import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const image = {uri: 'https://media.istockphoto.com/id/1454217037/pt/foto/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=2048x2048&w=is&k=20&c=-SweAETpZBXhqdjDMVVLQDiMQ7XwbIrH71rb1UlWpUM='};

export default function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={{ width: "100%", height: 25 }}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{ flexDirection: "row", alignContent: "space-around", alignItems: "center" }}>
                            <MaterialCommuityIcons name="web" style={styles.IconeViagem} />
                            <Text style={styles.Viagens}>Viagens</Text>
                        </View>
                        <Text style={styles.NumeroTelefone}>55+ 9999-999</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topo}>
                    <View style={{ width: "100%", height: 240 }}>
                        <ImageBackground
                            source={require("../assets/cuu.jpg")}
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.menu}>
                        <View style={styles.topopat}>
                            <Text style={styles.Nome}>AllVoyage</Text>

                            <Image
                                source={require("../assets/Pato.png")}
                                style={styles.Patinho}
                            />
                        </View>



                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.Login} onPress={() => props.navigation.navigate('Home')} >Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.Logout} onPress={() => props.navigation.navigate('Pacotes')} >Pacotes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonNac} onPress={() => props.navigation.navigate('Nacional')}>Nacional</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonInter} onPress={() => props.navigation.navigate('Internacional')}>Internacional</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.corpo} >

                    <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>

                        <View style={styles.corpodentro}>
                            <View style={styles.cororo}>
                                <Text style={styles.textodocorpo}>Login</Text>
                            </View>

                            <View style={styles.arruma}>
                                <Text style={styles.textodocorpocosrpo}>Email</Text>
                            </View>
                            <View style={styles.arruma2}>
                                <Text style={styles.textodocorpocosrpo}>Senha</Text>
                            </View>

                            <View style={styles.botaos}>
                                <View style={styles.botao1}>
                                    <Text style={styles.botaotext} onPress={() => props.navigation.navigate('Home')}>Cancelar</Text>
                                </View>
                                <View style={styles.botao2}></View>
                                <Text style={styles.botaotext2} onPress={() => props.navigation.navigate('Pacotes')}>Logar</Text>
                            </View>

                        </View>
                    </ImageBackground>
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

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    nome: {
        fontFamily: "Bold"
    },

    topo: {
        flex: 1,

        justifyContent: 'center',



    },

    topopat: {
        paddingRight: 20,
        paddingLeft: 20
    },

    Patinho: {
        width: 40,
        height: 40,


    },

    menu: {
        flex: 1,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    corpo: {
        flex: 1,
        alignItems: 'center',
        ImageBackground: '../assets/fufu.jpg'
    },
    corpodentro: {
        backgroundColor: '#005B9D',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 40,
        width: "80%",
        height: 350,
        borderRadius: 20,
        alignItems: "center",
    },
    arruma: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
        borderRadius: 20,
        marginTop: 40


    },
    arruma2: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
        borderRadius: 20,
        marginTop: 40


    },

    botaos: {
        flex: 1,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40
    },

    botao1: {
        marginTop: 20
    },


    botaotext: {
        marginRight: 50,
        fontSize: 20,
        backgroundColor: '#005B9D',
        padding: 10,
        paddingTop: 8,
        paddingBottom: 10,
        borderRadius: 25,
        color: 'white'

    },
    botaotext2: {


        fontSize: 22,
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 25,
        marginTop: 20


    },

    textodocorpo: {
        fontSize: 30,
        color: 'white',
        marginTop: 20
    },

    textodocorpocosrpo: {
        marginTop: 5,
        marginLeft: 5
    },

    rodape: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#B0D4EE',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },

    imageBackground: {
        width: "100%"
    },

    logo: {
        width: "100%",
        resizeMode: "contain",
        flex: 1,
        justifyContent: "center"
    },

    Image2: {

        width: 330,
        height: 230,
        borderRadius: 20

    },

    Image3: {
        marginLeft: 30,
        marginTop: 90,
        marginBottom: 60,
        marginRight: 20,
        width: 200,
        height: 200,
        borderRadius: 20
    },
    containerer: {

        flexDirection: 'row',
        alignItems: 'center',

    },
    TextImage3: {
        fontSize: 20,
        width: 180,
        marginRight: 20,
        marginTop: 20
    },
    Rodape1: {

        fontSize: 40


    },
    Rodape2: {

        fontSize: 40

    },
    Rodape3: {

        fontSize: 40

    },

    cororo: {
        borderBottomWidth: 1,
        width: "80%",
        borderBottomColor: "#fff",
        alignItems: "center"
    }

});
