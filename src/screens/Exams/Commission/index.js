import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';
import { ScrollView } from 'react-native';
import CustomCard from '../../../components/informations';
import { getGradeTeam } from '../../../services/Commissions';
import CommissionCard from '../../../components/gradeTeam';

const CommissionExamView = ({ route, navigation }) => {
    const { competitionId } = route.params;
    const [grade, setGrade] = useState([]);

    useEffect(() => {
        const fetchedGrade = async () => {
            try {
                const fetchedGrade = await getGradeTeam(competitionId);
                console.warn(fetchedGrade); // Verifique a estrutura dos dados retornados
                setGrade(fetchedGrade); // Armazenando a resposta no estado grade
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch competitions');
            }
        };

        fetchedGrade();
    }, [competitionId]);

    return (
        <Background>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Header />
                    {/* Verifica se grade tem elementos antes de mapear */}
                    {grade.length > 0 ? (
                        grade.map((item) => (
                            <CommissionCard
                                key={item.id}
                                instituicao={item.instituicao}  // Nome da instituição
                                teamGrade={item.teamGrade}  // Nota da equipe
                                participants={item.participants}  // Lista de participantes
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

export default CommissionExamView;
