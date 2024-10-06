import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import Button from '../button/index'; // Ajuste o caminho conforme necessário
import { getParticipants } from '../../services/CompetitionsTeams';
import CustomCard from '../informations';
import GradeCard from '../grade';

// Ativar animações de layout no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    try {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    } catch (e) {
        console.warn('LayoutAnimation is not supported on this Android version', e);
    }
}

const CommissionCard = ({
    id,
    name = 'Default Name',
    date = 'Data não disponível',
    local = 'Local não disponível',
}) => {
    const navigation = useNavigation(); // Obter o objeto de navegação
    const [expanded, setExpanded] = useState(false);
    const [participants, setParticipants] = useState([]); // Inicialize como um array vazio

    const handleToggle = () => {
        // Ativa uma animação de layout suave
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(prevExpanded => !prevExpanded);
    };

    useEffect(() => {
        const fetchedParticipants = async () => {
            try {
                const fetchedParticipants = await getParticipants(id); // Busca as competições
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
        <View style={styles.card} key={id}>
            <TouchableOpacity style={styles.accordion} onPress={handleToggle}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.local}>{local}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.details}>
                    {participants.map((item) => (
                        <TouchableOpacity
                            key={item.teamId} // Adicione a chave aqui
                            onPress={() => navigation.navigate('Grades', { teamId: item.teamId, participants: item.participants, campus: item.campus })} // Navegar para a tela Grades
                        >
                            <CustomCard
                                title={item.campus}
                                items={item.participants}
                                pad={10}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        maxWidth: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e86b70',
        marginVertical: 10,
        backgroundColor: '#fcdfde',
        overflow: 'hidden',
        alignSelf: 'center', // Centraliza o cartão horizontalmente
        marginTop: 20, // Adiciona espaço do topo
    },
    accordion: {
        padding: 16,
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },
    title: {
        fontSize: 18,
        textAlign: 'center', // Centraliza o texto do título
    },
    date: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
    local: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
    details: {
        padding: 16,
        alignItems: 'center', // Centraliza todo o conteúdo dos detalhes
    },
    expandedText: {
        fontSize: 14,
        color: '#555',
    },
});

export default CommissionCard;
