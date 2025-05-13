import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Tela inicial!</Text>
            <Text style={styles.subtitle}>Selecione uma opção:</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSpacing}>
                    <Button title="SEU PERFIL" onPress={() => navigation.navigate('Perfil')} />
                </View>
                <View style={styles.buttonSpacing}>
                    <Button title="MAIS DETALHES" onPress={() => navigation.navigate('Detalhes')} />
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
        fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: 'purple'
    },

    subtitle: {
        fontSize: 20, color: 'white', fontWeight: 'bold'
    },

    buttonContainer: {
        width: '60%',

    },
    buttonSpacing: {
        marginVertical: 10
    },

});