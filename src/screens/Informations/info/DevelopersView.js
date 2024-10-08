import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';

const developers = [
    {
        name: 'João Silva',
        role: 'Desenvolvedor Frontend',
        email: 'joao.silva@example.com',
        photo: 'https://via.placeholder.com/60', // Substitua com a URL real da imagem
    },
    {
        name: 'Maria Oliveira',
        role: 'Desenvolvedora Backend',
        email: 'maria.oliveira@example.com',
        photo: 'https://via.placeholder.com/60', // Substitua com a URL real da imagem
    },
    {
        name: 'Pedro Santos',
        role: 'Designer de Interface',
        email: 'pedro.santos@example.com',
        photo: 'https://via.placeholder.com/60', // Substitua com a URL real da imagem
    },
    {
        name: 'Ana Lima',
        role: 'Designer de Experiência',
        email: 'ana.lima@example.com',
        photo: 'https://via.placeholder.com/60', // Substitua com a URL real da imagem
    },
];

function DevelopersView() {
    return (
        <Background>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Créditos dos Desenvolvedores</Text>
                    {developers.map((dev, index) => (
                        <View key={index} style={styles.developerContainer}>
                            <Image source={{ uri: dev.photo }} style={styles.photo} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{dev.name}</Text>
                                <Text style={styles.role}>{dev.role}</Text>
                                <Text style={styles.email}>{dev.email}</Text>
                            </View>
                        </View>
                    ))}
                    <Text style={styles.subtitle}>Agradecimentos Especiais</Text>
                    <Text style={styles.text}>
                        Agradecemos a todos que contribuíram com suas ideias e feedbacks para o desenvolvimento deste aplicativo.
                    </Text>
                </View>
            </ScrollView>
        </Background >
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 10,  // Ajuste horizontal
        paddingVertical: 10,    // Ajuste vertical
        marginVertical: 10,     // Espaçamento externo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,       // Espaçamento inferior do título
    },
    developerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,       // Espaçamento entre os blocos de desenvolvedores
        padding: 10,            // Ajuste de padding interno para espaçamento uniforme
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,        // Espaçamento à direita da imagem
    },
    info: {
        flex: 1,
        paddingLeft: 5,         // Espaçamento interno à esquerda do bloco de informações
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,        // Espaçamento inferior do nome
    },
    role: {
        fontSize: 16,
        marginBottom: 5,        // Espaçamento inferior do cargo
    },
    email: {
        fontSize: 14,
        color: '#495057',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,     // Espaçamento entre subtítulos
    },
    text: {
        fontSize: 16,
        marginBottom: 10,       // Espaçamento entre parágrafos de texto
    },
});


export default DevelopersView;
