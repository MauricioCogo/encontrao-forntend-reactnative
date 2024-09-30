import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CommissionCard from '../../components/commission/index'; // Ajuste o caminho conforme necessário
import Background from '../../components/background';
import Header from '../../components/header';
import { useEstudante } from '../../context/Student'; // Importa o contexto do estudante
import { SafeAreaView } from 'react-native-safe-area-context';
import RandomMessage from '../../components/message';

export default function CommisionView() {
    const { estudante } = useEstudante(); // Acesse os dados do usuário
    const evaluator = estudante?.isEvaluator; // Verifica se o usuário é avaliador

    const provas = [
        {
            id: 1,
            title: "TRUCO GAUDÉRIO",
            participants: [
                "Mauricolol Djones e rafaelsius",
                "Ana Clara",
                "Lucas Pereira",
                "Julia Santos"
            ],
            campuses: [
                "São Vicente",
                "São Paulo",
                "Campinas",
                "São Vicente",
                "São Paulo",
                "Campinas"
            ]
        },
        {
            id: 2,
            title: "Prova 2",
            participants: [
                "Carlos Silva",
                "Mariana Costa"
            ],
            campuses: [
                "Quadra",
                "Quadra"
            ]
        },
        // ... restante das provas
    ];


    if (!estudante) {
        return <RandomMessage />
    }

    return (
        <Background>
            <View style={{ flex: 1 }}>
                {evaluator ? (
                    <ScrollView contentContainerStyle={styles.container}>
                        <Header />
                        {provas.map((item) => (
                            <CommissionCard
                                key={item.id}
                                title={item.title}
                                participants={item.participants}
                                campuses={item.campuses}
                                style={styles.card}
                            />
                        ))}
                    </ScrollView>
                ) : (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>
                            Você tentou entrar na aba dos avaliadores, mas a porta está trancada. Às vezes, a vida é como um clube exclusivo: não importa o quanto você tente, algumas portas simplesmente não se abrem para nós.
                        </Text>
                        <Image
                            source={require('../../../assets/evaluator.png')} // Use a imagem importada
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
