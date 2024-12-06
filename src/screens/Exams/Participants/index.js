import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';
import { ScrollView } from 'react-native';
import { getParticipants } from '../../../services/CompetitionsTeams/index';
import CustomCard from '../../../components/informations';

const ParticipantsView = ({ route, navigation }) => {
    const { competitionId } = route.params;
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchedParticipants = async () => {
            try {
                const fetchedParticipants = await getParticipants(competitionId);
                console.warn(fetchedParticipants);
                setParticipants(fetchedParticipants);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch competitions');
            }
        };

        fetchedParticipants();
    }, [competitionId]); // Adicione competitionId ao array de dependências


    return (
        <Background>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Header />
                    {participants.length > 0 ? (
                        participants.map((item) => (
                            <CustomCard
                                key={item.id}
                                title={item.campus}
                                items={item.participants}
                                pad={10}
                            />
                        ))
                    ) : (
                        <Text>Nenhum participante disponível.</Text>
                    )}
                </ScrollView>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // Isso garante que o conteúdo do ScrollView se expanda
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    suntitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 30,
        backgroundColor: "#ea2a26",
        width: 258,
        height: 46,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ParticipantsView;
