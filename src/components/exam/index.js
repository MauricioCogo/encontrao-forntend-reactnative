import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager, Alert } from 'react-native';
import Button from '../button/index';
import { format, parseISO } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

// Ativar animações de layout no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    try {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    } catch (e) {
        console.warn('LayoutAnimation is not supported on this Android version', e);
    }
}

const ExamCard = ({ id, name, modality, description, date, commission, local }) => {
    const [expanded, setExpanded] = useState(false);
    const formattedDate = format(parseISO(date), 'dd/MM/yyyy HH:mm');
    const navigation = useNavigation(); // Obter o objeto de navegação

    const handleToggle = () => {
        // Ativa uma animação de layout suave
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(prevExpanded => !prevExpanded);
    };

    const alerta = () => {
        console.warn("SDFSD", id);
        navigation.navigate('Participants', { competitionId: id })
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.accordion} onPress={handleToggle}>
                <Text style={styles.title}>{name || "Default"}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.details}>
                    <Text style={styles.detail}>Modalidade: {modality || "Sem Modalidade"}</Text>
                    <Text style={styles.detail}>Data: {formattedDate || "Sem data"}</Text>
                    <Text style={styles.detail}>Local: {local || "Sem hora"}</Text>
                    <Text style={styles.detail}>{description || "Sem descrição"}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Button
                            onClick={() => alerta()} // Corrigido
                            label={"Participantes"}
                            styles={{
                                alignItems: 'center',
                                backgroundColor: '#ff7470',
                                width: 270,
                                height: 45,
                                borderRadius: 20,
                                color: '#000',
                            }}
                        />
                    </TouchableOpacity>
                    {commission && (
                        <TouchableOpacity style={styles.button}>
                            <Button
                                onClick={() => alerta("Error!", "Não possui a comissão desta prova!")} // Corrigido
                                label={"Comissão"}
                                styles={{
                                    alignItems: 'center',
                                    backgroundColor: '#ff7470',
                                    width: 270,
                                    height: 45,
                                    borderRadius: 20,
                                    color: '#000',
                                }}
                            />
                        </TouchableOpacity>
                    )}
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
        alignItems: 'center', // Centraliza o título horizontalmente
    },
    title: {
        fontSize: 18,
        textAlign: 'center', // Centraliza o texto do título
    },
    detail: {
        marginTop: 10,
        fontSize: 14,
        marginVertical: 4,
        textAlign: 'center', // Centraliza o texto dos detalhes
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
    },
    details: {
        padding: 16,
        alignItems: 'center', // Centraliza todo o conteúdo dos detalhes
    },
});

export default ExamCard;
