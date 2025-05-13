import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetalhesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Esta é a tela de detalhes.</Text>
            <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
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
    },
});

export default DetalhesScreen;