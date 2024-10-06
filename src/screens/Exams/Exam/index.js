import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ExameCard from '../../../components/exam/index';
import Background from '../../../components/background';
import Header from '../../../components/header';
import { getCompetitions } from '../../../services/Competitions';

const ExamView = ({ navigation }) => {
    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        const fetchCompetitions = async () => {
            try {
                const fetchedCompetitions = await getCompetitions();
                console.warn(fetchedCompetitions);
                setCompetitions(fetchedCompetitions);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch competitions');
            }
        };

        fetchCompetitions();
    }, []);


    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                {competitions.map((item) => (
                    <ExameCard
                        id={item.id}
                        name={item.name}
                        modality={item.modality}
                        description={item.description}
                        date={item.initialDate}
                        commission={item.commission}
                        local={item.point.description}
                        style={styles.card}
                    />
                ))}
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
});

export default ExamView;
