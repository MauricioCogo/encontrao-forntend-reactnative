import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ExameCard from '../../../components/exam/index';
import Background from '../../../components/background';
import Header from '../../../components/header';
import { getCompetitions } from '../../../services/Competitions';

const ExamView = () => {
    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        const fetchCompetitions = async () => {
            try {
                const fetchedCompetitions = await getCompetitions();
                console.warn(fetchedCompetitions);
                setCompetitions(fetchedCompetitions);
            } catch (error) {
                console.warn("Falha");
            }
        };

        fetchCompetitions();
    }, []);


    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                {competitions ? (
                    competitions.map((item) => (
                        <ExameCard
                            key={item.id} // Certifique-se de usar uma chave única
                            id={item.id}
                            name={item.name}
                            modality={item.modality}
                            description={item.description}
                            date={item.initialDate}
                            commission={item.commission}
                            local={item.point.description}
                            fecult={item.festivalEvent}
                            style={styles.card}
                        />
                    ))
                ) : (
                    <Text style={styles.messageText}>Não foi possivel exibir as provas. Verifique a conexão com a internet!</Text>
                )}
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: '100%',
    },
    card: {
        marginBottom: 30,
        width: '100%',
    },
    text: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 30,
        padding: 10
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ExamView;
