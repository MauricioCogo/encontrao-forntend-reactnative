// src/screens/ExamView.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import ExameCard from '../../components/exam/index'; // Certifique-se de ajustar o caminho conforme necessário
import Background from '../../components/background';
import Header from '../../components/header';
import { getCompetitions } from '../../services/Competitions';

const ExamView = () => {
    const [competitions, setCompetitions] = useState([]); // Inicialize como um array vazio

    useEffect(() => {

        const fetchCompetitions = async () => {
            try {
                const fetchedCompetitions = await getCompetitions(); // Busca as competições
                console.warn(fetchedCompetitions); // Log para verificar as competições buscadas
                setCompetitions(fetchedCompetitions); // Atualiza o estado com as competições
            } catch (error) {
                Alert.alert('Error', 'Failed toa fetch competitions');
            }
        };

        fetchCompetitions(); // Chama a função para buscar as competições
    }, []); // Array de dependências


    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                {competitions.map((item) => (
                    <ExameCard
                        key={item.id}
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
