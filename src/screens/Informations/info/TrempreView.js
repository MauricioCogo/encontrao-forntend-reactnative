import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TrempreView() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Informações sobre o IFFar - SVS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,  // Ajuste horizontal
        paddingVertical: 10,    // Ajuste vertical
        marginVertical: 10,     // Espaçamento externo geral
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,     // Espaçamento externo do texto
    },
});


export default TrempreView;
