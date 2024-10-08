import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../../components/background';
import Header from '../../components/header';

const HelpView = () => {
    return (
        <Background>
            <ScrollView style={styles.container}>
                <Header />
                <Text style={styles.title}>Bem-vindo ao Guia de Ajuda!</Text>
                <Text style={styles.description}>
                    Este aplicativo foi desenvolvido para facilitar a sua experiência durante o evento. Abaixo, você encontrará uma visão geral de todas as funcionalidades disponíveis.
                </Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tela Inicial</Text>
                    <Text style={styles.sectionContent}>
                        A tela inicial dá as boas-vindas a todos os usuários e oferece uma visão geral do evento. Aqui você pode encontrar informações importantes e acessar rapidamente outras funcionalidades do aplicativo.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Mapa do Campus</Text>
                    <Text style={styles.sectionContent}>
                        A tela do mapa exibe um mapa interativo do campus com pontos de interesse, como locais das provas, banheiros, dormitórios e outros serviços importantes. Utilize o mapa para navegar facilmente pelo campus.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Provas</Text>
                    <Text style={styles.sectionContent}>
                        Nesta tela, você encontrará a lista completa das provas, incluindo locais, datas, horários e participantes. Fique por dentro de todos os detalhes das competições.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Perfil</Text>
                    <Text style={styles.sectionContent}>
                        A tela de perfil exibe o cronograma pessoal de cada estudante. Aqui você pode visualizar suas provas, horários e compromissos, ajudando você a se organizar melhor durante o evento.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Informações Adicionais</Text>
                    <Text style={styles.sectionContent}>
                        Nesta aba, você encontrará informações úteis sobre o IFFAR SVS, o Encontrão, os institutos participantes, o NTG Trempe da Saudade e os desenvolvedores do aplicativo.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cardápio</Text>
                    <Text style={styles.sectionContent}>
                        A tela do cardápio mostra as opções de alimentação disponíveis durante o evento, incluindo café da manhã, almoço e jantar para cada dia.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Regras</Text>
                    <Text style={styles.sectionContent}>
                        Aqui você pode consultar as regras do evento, das provas e do FECULT. É importante revisar essas regras para garantir uma participação conforme as diretrizes.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Comissão do Evento</Text>
                    <Text style={styles.sectionContent}>
                        Nesta tela, você encontrará informações sobre a comissão do evento. Note que apenas avaliadores têm acesso a essa seção.
                    </Text>
                </View>
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 24,
        textAlign: 'center',
    },
    section: {
        marginBottom: 24,
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    sectionContent: {
        fontSize: 16,
        color: '#666',
    },
});

export default HelpView;
