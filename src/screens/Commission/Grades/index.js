import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';
import { ScrollView } from 'react-native-gesture-handler';
import { getGrade } from '../../../services/Commissions/index';

const GradesView = ({ route, navigation }) => {
    const [grades, setGrades] = useState([]); // Inicialize como um array vazio
    const { teamId, campus, participants } = route.params;
    const [inputGrades, setInputGrades] = useState({
        grade1: '',
        grade2: '',
        grade3: '',
        grade4: '',
        grade5: ''
    });

    useEffect(() => {
        const fetchedGrade = async () => {
            try {
                const fetchedGrade = await getGrade(teamId); // Busca as competições
                console.warn("Teste");
                console.warn(fetchedGrade); // Log para verificar as competições buscadas
                setGrades(fetchedGrade); // Atualiza o estado com as competições
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch competitions');
            }
        };

        fetchedGrade(); // Chama a função para buscar as competições
    }, []); // Array de dependências

    const handleInputChange = (name, value) => {
        setInputGrades({
            ...inputGrades,
            [name]: value,
        });
    };
    const handleSubmit = async () => {
        const grades = {
            grade1: parseFloat(inputGrades.grade1),
            grade2: parseFloat(inputGrades.grade2),
            grade3: parseFloat(inputGrades.grade3),
            grade4: parseFloat(inputGrades.grade4),
            grade5: inputGrades.grade5 ? parseFloat(inputGrades.grade5) : null
        };

        const isValid = Object.values(grades).every(grade => grade >= 0 && grade <= 10);

        if (!isValid) {
            Alert.alert("Notas inválidas! Todas as notas devem estar entre 0 e 10.");
            return; // Ou você pode mostrar uma mensagem de erro para o usuário
        }


        const jsonToSend = {
            commission: {
                idCompetitionsTeams: teamId, // ou outro ID que faça sentido no seu caso
                idUser: 1, // Aqui você pode pegar o ID do usuário logado ou fixar um valor
                grade1: parseFloat(inputGrades.grade1), // Convertendo strings em números
                grade2: parseFloat(inputGrades.grade2),
                grade3: parseFloat(inputGrades.grade3),
                grade4: parseFloat(inputGrades.grade4),
                grade5: inputGrades.grade5 ? parseFloat(inputGrades.grade5) : null // Atribui null se não houver grade5
            },
            team: {
                id: teamId, // ID do time, você já está recebendo isso do route.params
                grade: calculateAverageGrade(inputGrades)
            }
        };

        const body = JSON.stringify(jsonToSend);

        console.warn("body ", body);

        //enviar
    }

    const calculateAverageGrade = (grades) => {
        const total = Object.values(grades).reduce((sum, grade) => sum + (parseFloat(grade) || 0), 0);
        const count = Object.values(grades).filter(grade => grade !== null && grade !== '' && grade !== '0').length;

        return count > 0 ? (total / count).toFixed(2) : '0.00'; // Retorna a média com duas casas decimais ou '0.00' se não houver notas válidas
    };



    return (
        <Background>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Header />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    {grades ? (
                        <>
                            <Text style={styles.title}>Inserir Notas para {campus}</Text>
                            {participants.map((item, index) => (
                                <Text key={index} style={styles.suntitle}>{item}</Text>
                            ))}
                            <TextInput
                                style={styles.input}
                                placeholder={grades.gradeName1} // Usa os nomes das grades como placeholder
                                keyboardType="numeric" // Define o teclado numérico
                                value={inputGrades.grade1} // Vincula ao estado
                                onChangeText={(value) => handleInputChange('grade1', value)} // Atualiza o estado
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={grades.gradeName2} // Usa os nomes das grades como placeholder
                                keyboardType="numeric" // Define o teclado numérico
                                value={inputGrades.grade2} // Vincula ao estado
                                onChangeText={(value) => handleInputChange('grade2', value)} // Atualiza o estado
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={grades.gradeName3} // Usa os nomes das grades como placeholder
                                keyboardType="numeric" // Define o teclado numérico
                                value={inputGrades.grade3} // Vincula ao estado
                                onChangeText={(value) => handleInputChange('grade3', value)} // Atualiza o estado
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={grades.gradeName4} // Usa os nomes das grades como placeholder
                                keyboardType="numeric" // Define o teclado numérico
                                value={inputGrades.grade4} // Vincula ao estado
                                onChangeText={(value) => handleInputChange('grade4', value)} // Atualiza o estado
                            />
                            {grades.gradeName5 ? ( // Verifica se gradeName5 não é nulo
                                <TextInput
                                    style={styles.input}
                                    placeholder={grades.gradeName5}
                                    keyboardType="numeric"
                                    value={inputGrades.grade5} // Vincula ao estado
                                    onChangeText={(value) => handleInputChange('grade5', value)} // Atualiza o estado
                                />
                            ) : null}
                            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Enviar Notas</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <Text>Grades não disponíveis.</Text>
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

export default GradesView;
