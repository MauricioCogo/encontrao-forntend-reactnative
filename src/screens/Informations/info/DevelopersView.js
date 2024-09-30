import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

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
        <View style={styles.container}>
            <ScrollView>
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
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    developerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#343a40',
    },
    role: {
        fontSize: 16,
        color: '#495057',
    },
    email: {
        fontSize: 14,
        color: '#6c757d',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#343a40',
    },
    text: {
        fontSize: 16,
        color: '#495057',
    },
});

export default DevelopersView;
