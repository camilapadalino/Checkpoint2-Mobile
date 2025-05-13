import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Inicial</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                    <Button title="IR PARA O PERFIL" onPress={() => navigation.navigate('Perfil')} />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button title="IR PARA DETALHES" onPress={() => navigation.navigate('Detalhes')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F892D9FF'
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 30
    },
    buttonContainer: {
        width: '60%',

    },
    buttonSpacing: {
        marginVertical: 10
    },

    button: {
        borderRadius: 20,
    }

});