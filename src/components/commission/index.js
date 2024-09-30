import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import Button from '../button/index'; // Ajuste o caminho conforme necessário

// Ativar animações de layout no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    try {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    } catch (e) {
        console.warn('LayoutAnimation is not supported on this Android version', e);
    }
}

const CommissionCard = ({
    title = 'Default Title',
    participants = [],
    campuses = [],
}) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        // Ativa uma animação de layout suave
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(prevExpanded => !prevExpanded);
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.accordion} onPress={handleToggle}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.details}>
                    {participants.map((participant, index) => (
                        <View key={index} style={styles.participantContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Button
                                    label={<Text style={styles.buttonText}>{participant}</Text>}
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
                            <Text style={styles.campus}>{campuses[index] || 'Campus desconhecido'}</Text>
                        </View>
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
        alignItems: 'center', // Centraliza o título horizontalmente
    },
    title: {
        fontSize: 18,
        textAlign: 'center', // Centraliza o texto do título
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 14,
        color: '#fff', // Cor do texto do botão
    },
    details: {
        padding: 16,
        alignItems: 'center', // Centraliza todo o conteúdo dos detalhes
    },
    participantContainer: {
        marginBottom: 15,
        alignItems: 'center',
    },
    campus: {
        fontSize: 12,
        marginTop: -10,
        color: '#555',
    },
});

export default CommissionCard;
