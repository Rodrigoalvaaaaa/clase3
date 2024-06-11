import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Pantalla1 = ({ navigation }) => {
    const informacion = data;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Mostrando Información en cuadrícula</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacion}
                        numColumns={2} // Número de columnas fijo
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.itemTitle}>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        key={2} // Cambia este valor si decides cambiar numColumns dinámicamente
                        contentContainerStyle={styles.flatListContentContainer}
                    />
                </View>
                <Text style={styles.texto}>Mostrando Información en cuadrícula utilizando FlatList y numColumns</Text>
                <Boton
                    textoBoton='Ir a créditos'
                    accionBoton={irPantalla2}
                />
            </View>
        </ScrollView>
    );
};

export default Pantalla1;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#859',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
        width: '100%',
    },
    flatListContainer: {
        flex: 1,
        width: '100%',
    },
    flatListContentContainer: {
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        flexBasis: '48%', // Para hacer que los elementos ocupen aproximadamente la mitad del espacio horizontal
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto: {
        marginHorizontal: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});