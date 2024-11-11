import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const FecultCard = ({ title, competition, items = [], pad }) => {
    return (
        <View style={[styles.container, { padding: pad }]}>
            <View style={styles.card}>
                <View style={styles.Header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.Content}>
                        {items.map((item, index) => (
                            <View key={index} style={styles.item}>
                                <Text style={styles.itemText}>
                                    <Text style={styles.boldText}>Competição:</Text> {item.competitionName}{'\n'}
                                    <Text style={styles.boldText}>Participantes:</Text> {Array.isArray(item.participants) ? item.participants.join(', ') : 'N/A'}{'\n'}                                </Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 15,
    },
    card: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e86b70',
        backgroundColor: '#fcdfde',
        overflow: 'hidden',
    },
    Header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#e86b70',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    Content: {
        overflow: 'hidden',
    },
    scrollView: {
        flexGrow: 1,
    },
    item: {
        padding: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#555',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default FecultCard;
