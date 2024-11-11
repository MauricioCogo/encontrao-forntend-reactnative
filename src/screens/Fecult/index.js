import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Background from '../../components/background';
import Header from '../../components/header';
import { ScrollView } from 'react-native';
import FecultCard from '../../components/fecult';
import { getParticipantsByFecult } from '../../services/CompetitionsTeams';

const FecultEvent = () => {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchedParticipants = async () => {
            try {
                const fetchedData = await getParticipantsByFecult();
                console.warn(fetchedData);
                setParticipants(fetchedData);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch competitions');
            }
        };

        fetchedParticipants();
    }, []);

    // Group participants by competition and campus
    const groupedParticipants = participants.reduce((acc, curr) => {
        const { competition, campus } = curr;
        if (!acc[campus]) acc[campus] = {};
        if (!acc[campus][competition]) acc[campus][competition] = [];
        acc[campus][competition].push(curr);
        return acc;
    }, {});

    return (
        <Background>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Header />
                    {Object.entries(groupedParticipants).length > 0 ? (
                        Object.entries(groupedParticipants).map(([campus, competitions]) => (
                            <View key={campus}>
                                {Object.entries(competitions).map(([competition, items]) => (
                                    <FecultCard
                                        key={campus}
                                        title={campus}
                                        items={items} // Pass entire group of items
                                        pad={10}
                                    />
                                ))}
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noParticipants}>Nenhum participante disponível.</Text>
                    )}
                </ScrollView>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    campusTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    noParticipants: {
        textAlign: 'center',
        fontSize: 18,
        color: '#555',
    },
});

export default FecultEvent;
