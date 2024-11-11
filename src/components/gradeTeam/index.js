import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const CommissionCard = ({ competitionName, instituicao, teamGrade, participants = [], pad }) => {
    return (
        <View style={[styles.container, { padding: pad }]}>
            <View style={styles.card}>
                <View style={styles.Header}>
                    <Text style={styles.title}>{instituicao}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.Content}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>
                                Nota: {teamGrade === null ? "Nota ainda não colocada" : teamGrade}
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>Participantes:</Text>
                            {participants.map((participant, index) => (
                                <Text key={index} style={styles.itemText}>
                                    - {participant}
                                </Text>
                            ))}
                        </View>
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
});

export default CommissionCard;
