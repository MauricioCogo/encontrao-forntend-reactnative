import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Schedule = () => {
    const data = [
        { time: '15/11 08:00', activity: 'Pesca Gauderia', type: "Prova", local: 'Açude' },
        { time: '09:00', activity: 'Artilharia', type: "Prova", local: 'Campo' },
        { time: '12:00', activity: 'Ja podih ao msosa?', type: "Obgtorio", local: 'Refeitorio' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
        { time: '15:00', activity: 'nao podih mais mussa', type: "Obgtorio", local: 'Biblioteca' },
    ];

    const getRowStyle = (index, total) => {
        const percentage = (index / (total - 1)) * 100;
        return {
            backgroundColor: `rgba(255, ${255 - (percentage * 0.6)}, ${255 - (percentage * 0.6)}, 1)`,
        };
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerCell}>Data e hora</Text>
                    <Text style={styles.headerCell}>Atividade</Text>
                    <Text style={styles.headerCell}>Tipo</Text>
                    <Text style={styles.headerCell}>Local</Text>
                </View>
                {data.map((item, index) => (
                    <View key={index} style={[styles.tableRow, getRowStyle(index, data.length)]}>
                        <Text style={styles.cell}>{item.time}</Text>
                        <Text style={styles.cell}>{item.activity}</Text>
                        <Text style={styles.cell}>{item.type}</Text>
                        <Text style={styles.cell}>{item.local}</Text>
                    </View>
                ))}
                <View style={styles.tableFooter}>
                    <Text style={styles.footerText}>Fim da Tabela</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    table: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#ea2a26',
    },
    headerCell: {
        flex: 1,
        padding: 12,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left',
        borderBottomWidth: 2,
        borderBottomColor: '#c42a21',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        padding: 12,
        color: '#333',
        textAlign: 'left',
    },
    tableFooter: {
        backgroundColor: '#ea2a26',
        padding: 12,
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Schedule;
