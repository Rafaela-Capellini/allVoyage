import React from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView,
    ImageBackground
} from 'react-native';

import MaterialCommuityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InternacionaisScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={{ width: "100%", height: 25 }}>
                    <TouchableOpacity style={{flexDirection: "row", justifyContent: "space-around"}}>
                        <View style={{flexDirection: "row", alignContent: "space-around", alignItems: "center"}}>
                            <MaterialCommuityIcons name="web" style={styles.IconeViagem} />
                            <Text style={styles.Viagens}>Viagens</Text>
                        </View>
                        <Text style={styles.NumeroTelefone}>55+ 9999-999</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.topo}>
                    <View style={{ width: "100%", height: 240 }}>
                        <ImageBackground
                            source={require("../assets/into.png")}
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
                        <Text style={styles.Login} onPress={() => props.navigation.navigate('Login')} >Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.Logout} >Log out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonNac} onPress={() => props.navigation.navigate('Nacional')}>Nacional</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonInter} onPress={() => props.navigation.navigate('Home')}>Home</Text>
                    </TouchableOpacity>
                    </View>
                </View>


                
                    

                <View style={styles.corpo}>
                    <View style={styles.passagem}>
                    <Text style={styles.texto1}>PARTIDA / CHEGADA</Text>
                    <MaterialCommuityIcons  name="airplane" size={50} />
                  </View>

                    <View style={styles.containerer}>
                      <View style={styles.contima}>
                        <Image
                            source={require("../assets/dez.png")}
                            style={styles.Image3}
                        />
                      </View>
                         <MaterialCommuityIcons  name="calendar-week" size={50} marginBottom={150} />
                        <View style={styles.calendario2}>
                        <Image
                            source={require("../assets/onze.png")}
                            style={styles.Image4}
                        />
                        </View>
                    </View>

                    <View style={styles.passagem}>
                    <Text style={styles.texto1}>SAIDA / DESTINO</Text>
                    <MaterialCommuityIcons  name="airplane" size={50} />
                  </View>
                  <View style={styles.containerer}>
                      <View style={styles.contima}>
                        <Image
                            source={require("../assets/paises.png")}
                            style={styles.Image3}
                        />
                      </View>
                         <MaterialCommuityIcons  name="calendar-week" size={50} marginBottom={150} />
                        <View style={styles.calendario2}>
                        <Image
                            source={require("../assets/paises.png")}
                            style={styles.Image4}
                        />
                        </View>
                        
                    </View>
                        <View style={styles.botaos}>
                        <View style={styles.botao1}>
                            <Text style={styles.botaotext} onPress={() => props.navigation.navigate('Home')}>Cancelar</Text> 
                            </View>
                            <View style={styles.botao2}></View>
                            <Text style={styles.botaotext2} onPress={() => props.navigation.navigate('Pacotes')}>Aplicar</Text>
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
        paddingRight:20,
        paddingLeft: 20
    },

    Patinho: {
        width: 40,
        height: 40,
        
       
    },

    menu: {
        flex: 1,
       marginRight:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    corpo: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
       
    },

    rodape: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#B0D4EE',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    },

    botaos:{
        flex: 1,
      
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginBottom: 40
    },

    botao1: {
      
    },

    botaotext: {
        marginRight: 70,
        fontSize: 22,
         backgroundColor: '#D9D9D9',
         padding: 20,
         paddingTop:10,
         paddingBottom:10,
         borderRadius: 25
        
    },
    botaotext2: {
         
       
        fontSize: 22,
         backgroundColor: '#6EAAE8',
         padding: 20,
         paddingTop:10,
         paddingBottom:10,
         borderRadius: 25,
         color: 'white'
        
    },

    passagem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#B0D4EE',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 40,
        borderRadius: 20
       
    },

    logo: {
        width: "100%",
        resizeMode: "contain",
        flex: 1,
        justifyContent: "center"
    },

    
    Image3: {
        marginLeft: 20,
        marginTop:20,
        marginBottom:60,
        marginRight:10,
        width: 150,
        height: 150,
        borderRadius: 20
    },

    Image4: {
        marginLeft: 10,
        marginTop:20,
        marginBottom:60,
        marginRight:20,
        width: 150,
        height: 150,
        borderRadius: 20
    },

    texto1: {
        fontWeight: 'bold',
        
    },
    containerer: {
       
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    TextImage3: {
        fontSize:20,
       width: 180,
        marginRight:20,
        marginTop:20
    },

    IconePassagem: {
        width: 200,
        height: 200
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

});
