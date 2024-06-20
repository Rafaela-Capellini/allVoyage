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
                </View>


                
                    

                <View style={styles.corpo}>
                    <Image
                        source={require("../assets/e.jpg")}
                        style={styles.Image2}
                    />


                    <View style={styles.containerer}>
                    <View style={styles.contima}>
                        <Image
                            source={require("../assets/o.jpg")}
                            style={styles.Image3}
                        />
                         </View>
                        <View style={styles.conttext}>
                        <Text style={styles.TextImage3}> Teste Descubra o mundo através dos seus próprios passos. Aventura, cultura e memórias esperam por você em cada destino  </Text>
                        </View>
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
        paddingTop: 20
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
        marginTop:90,
        marginBottom:60,
        marginRight:20,
        width: 200,
        height: 200,
        borderRadius: 20
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
