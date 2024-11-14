import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';

const developers = [
    {
        name: 'Mauricio Carvalho Cogo',
        role: 'Desenvolvedor',
        email: 'mauricioccogo@gmail.com',
        photo: 'Mauricio.png', // Substitua com a URL real da imagem
    },
    {
        name: 'Isaboo Acosta Alcântara',
        role: 'Designer',
        email: 'acostaisaboo@gmail.com',
        photo: 'Isa.jpeg', // Substitua com a URL real da imagem
    },
    {
        name: 'Eduardo Rafael Miranda Feitoza',
        role: 'Coordenador',
        email: 'eduardo.rafael.feitoza@gmail.com',
        photo: 'feitoza.png', // Substitua com a URL real da imagem
    },
];

// Mapeamento de imagens locais
const imageMap = {
    'Mauricio.png': require('../../../../assets/Mauricio.jpg'),
    'Isa.jpeg': require('../../../../assets/Isa.jpeg'),
    'feitoza.png': require('../../../../assets/feitoza.png'),
    // Adicione mais imagens locais conforme necessário
};

function DevelopersView() {
    return (
        <Background>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Créditos dos Desenvolvedores</Text>
                    {developers.map((dev, index) => {
                        const imageSource = imageMap[dev.photo] || { uri: dev.photo };
                        return (
                            <View key={index} style={styles.developerContainer}>
                                <Image source={imageSource} style={styles.photo} />
                                <View style={styles.info}>
                                    <Text style={styles.name}>{dev.name}</Text>
                                    <Text style={styles.role}>{dev.role}</Text>
                                    <Text style={styles.email}>{dev.email}</Text>
                                </View>
                            </View>
                        );
                    })}
                    <Text style={styles.subtitle}>Agradecimentos Especiais</Text>
                    <Text style={styles.text}>
                        Agradecemos a todos que contribuíram com suas ideias e feedbacks para o desenvolvimento deste aplicativo.
                    </Text>
                </View>
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
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
        padding: 10,
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    info: {
        flex: 1,
        paddingLeft: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    role: {
        fontSize: 16,
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        color: '#495057',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default DevelopersView;
