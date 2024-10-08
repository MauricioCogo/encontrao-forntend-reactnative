import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../../components/background';
import Header from '../../components/header';
import { getPresentationsWithCampus } from '../../services/Presentations';
import PresentationsCard from '../../components/presentations';

const PresentationsView = () => {
    const [presentations, setPresentations] = useState([]);

    useEffect(() => {
        const fetchPresentations = async () => {
            try {
                const fetchedPresentations = await getPresentationsWithCampus();
                console.warn("ASADF", fetchedPresentations);
                setPresentations(fetchedPresentations);
            } catch (error) {
                console.warn("Falha ao carregar as apresentações", error);
            }
        };

        fetchPresentations();
    }, []);

    return (
        <Background>
            <ScrollView style={styles.container}>
                <Header />
                {presentations.length > 0 ? ( // Verifica se há apresentações
                    presentations.map((item, index) => (
                        <PresentationsCard key={index} data={item} /> // Passa o item como prop data
                    ))
                ) : (
                    <Text style={styles.messageText}>
                        Não foi possível exibir as apresentações. Verifique a conexão com a internet!
                    </Text>
                )}
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    messageText: {
        fontSize: 16,
        color: '#ff0000', // Cor de erro
        textAlign: 'center',
        marginTop: 20,
    },
});

export default PresentationsView;