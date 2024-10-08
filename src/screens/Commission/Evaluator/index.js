import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CommissionCard from '../../../components/commission/index'; // Ajuste o caminho conforme necessário
import Background from '../../../components/background';
import Header from '../../../components/header';
import RandomMessage from '../../../components/message';
import { getCompetitionsCommission } from '../../../services/Competitions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, parseISO } from 'date-fns';

const EvaluatorView = () => {
    const a = true
    const [competitions, setCompetitions] = useState([]); // Inicialize como um array vazio
    const [estudante, setEstudante] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUserData = await AsyncStorage.getItem('@user_data');
                if (storedUserData) {
                    const parsedUserData = JSON.parse(storedUserData);
                    setEstudante(parsedUserData);
                }
            } catch (e) {
                console.error('Erro ao recuperar dados do usuário', e);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchCompetitions = async () => {
            try {
                const fetchedCompetitions = await getCompetitionsCommission(); // Busca as competições
                console.warn(fetchedCompetitions); // Log para verificar as competições buscadas
                setCompetitions(fetchedCompetitions); // Atualiza o estado com as competições
            } catch (error) {
                Alert.alert('Error', 'Failed toa fetch competitions');
            }
        };

        fetchCompetitions(); // Chama a função para buscar as competições
    }, []); // Array de dependências

    if (!estudante) {
        return <RandomMessage />
    }

    return (
        <Background>
            <View style={{ flex: 1 }}>
                {estudante.isEvaluator || a ? (
                    <ScrollView contentContainerStyle={styles.container}>
                        <Header />
                        {competitions && competitions.length > 0 ? (
                            competitions.map((item) => (
                                <CommissionCard
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    date={format(parseISO(item.initialDate), 'dd/MM/yyyy HH:mm')}
                                    local={item.point.description}
                                    style={styles.card}
                                />
                            ))
                        ) : (
                            <Text style={styles.messageText}>Não foi possivel exibir as provas, verifique a conexão com a internet!</Text> // Exibe uma mensagem caso não haja competições
                        )}
                    </ScrollView>
                ) : (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>
                            Você tentou entrar na aba dos avaliadores, mas a porta está trancada. Às vezes, a vida é como um clube exclusivo: não importa o quanto você tente, algumas portas simplesmente não se abrem para nós.
                        </Text>
                        <Image
                            source={require('../../../../assets/evaluator.png')} // Use a imagem importada
                            style={styles.image}
                        />
                    </View>
                )}
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        marginTop: 20
    },
    card: {
        marginBottom: 20,
        width: '100%',
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    exit: {
        flexGrow: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default EvaluatorView;
