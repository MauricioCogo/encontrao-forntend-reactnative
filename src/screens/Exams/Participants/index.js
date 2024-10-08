import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';
import { ScrollView } from 'react-native-gesture-handler';
import { getParticipants } from '../../../services/CompetitionsTeams/index';
import CustomCard from '../../../components/informations';

const ParticipantsView = ({ route, navigation }) => {
    const { competitionId } = route.params;
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchedParticipants = async () => {
            try {
                const fetchedParticipants = await getParticipants(competitionId); // Busca as competições
                console.warn("Teste");
                console.warn(fetchedParticipants); // Log para verificar as competições buscadas
                setParticipants(fetchedParticipants); // Atualiza o estado com as competições
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch competitions');
            }
        };

        fetchedParticipants(); // Chama a função para buscar as competições
    }, []); // Array de dependências


    return (
        <Background>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Header />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    {!participants ? (
                        participants.map((item) => (
                            <CustomCard
                                key={item.id} // Certifique-se de usar uma chave única
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
        flex: 1,
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
        alignSelf: 'center', // Centraliza o botão horizontalmente
    },
    buttonText: {
        color: '#fff', // Cor do texto
        fontSize: 16, // Tamanho do texto
    },
});

export default ParticipantsView;