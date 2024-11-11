import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';

const institutesData = [
    { institute: 'IFC - Campus Santa Rosa', group: 'GTC - Danças e Andanças' },
    { institute: 'IFC - Rio do Sul', group: 'CTG Rincão dos Guris' },
    { institute: 'IFC - Videira', group: 'CTG Herdeiros do Pago' },
    { institute: 'IFFar - Alegrete', group: 'DTG Herança Farrapa' },
    { institute: 'IFFar - Santa Rosa', group: 'Grupo de Danças Sentinela Farroupilha' },
    { institute: 'IFFar - Santo Augusto', group: 'DTG Sinuelo Farroupilha' },
    { institute: 'IFFar - SVS', group: 'Trempe da Saudade' },
    { institute: 'IFRS - Bento Gonçalves', group: 'DTG Cultura Sem Fronteira' },
    { institute: 'IFRS - Farroupilha', group: 'DTG Raízes da Cultura' },
    { institute: 'IFRS - Sertão', group: 'CTG Tropeiros da Cultura' },
];

function InstitutesView() {
    return (
        <Background>
            <ScrollView style={styles.container}>
                <Header />
                {institutesData.map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Text style={styles.instituteText}>{item.institute}</Text>
                        <Text style={styles.groupText}>{item.group}</Text>
                    </View>
                ))}
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemContainer: {
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    instituteText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    groupText: {
        fontSize: 16,
        color: '#555',
    },
});

export default InstitutesView;
