// src/screens/ProfileView.js
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, Alert, View, Image } from 'react-native';
import ProfileCard from '../../components/profile/index';
import Timeline from '../../components/timeline/index';
import Background from '../../components/background';
import { useEstudante } from '../../context/Student';
import { useNavigation } from '@react-navigation/native';
import RandomMessage from '../../components/message';

function ProfileView() {
    const { estudante, logout } = useEstudante();
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Você tem certeza que deseja sair?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Sair",
                    onPress: () => {
                        logout();
                    }
                }
            ]
        );
    };

    if (!estudante) {
        return <RandomMessage />
    }

    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <ProfileCard
                    name={estudante.name}
                    campus={`IFFar SVS`}
                    avatar="https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg?w=2560&h=1920"
                    evaluator={estudante.isEvaluator}
                />
                <Timeline />
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Sair</Text>
                </TouchableOpacity>
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    exit: {
        flexGrow: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: "#ea2a26",
        width: '100%',
        height: 46,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 16,
        textTransform: 'none',
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default ProfileView;
