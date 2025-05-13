import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const PerfilScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao seu perfil!</Text>
            <Button title="Voltar pra Home" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F892D9FF'
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: 'purple',
        fontWeight: 'bold'
    },
});

export default PerfilScreen;