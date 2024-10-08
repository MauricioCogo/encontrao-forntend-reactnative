// src/screens/ProfileView.js
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import ProfileCard from '../../components/profile/index';
import Timeline from '../../components/timeline/index';
import Background from '../../components/background';
import RandomMessage from '../../components/message';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileView({ setIsLoggedIn }) { // Receba o setIsLoggedIn via props
    const [estudante, setEstudante] = useState(null);

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
                    onPress: async () => {
                        // Remova os dados do AsyncStorage
                        await AsyncStorage.removeItem('@user_data');
                        setEstudante(null);
                        setIsLoggedIn(false);
                    }
                }
            ]
        );
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedUserData = await AsyncStorage.getItem('@user_data');
                if (storedUserData) {
                    const parsedUserData = JSON.parse(storedUserData);
                    setEstudante(parsedUserData);
                }
            } catch (e) {
                console.error('Erro ao recuperar dados do usuário', e);
            }
        };

        fetchUserData();
    }, []);

    if (!estudante) {
        return <RandomMessage />;
    }



    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <ProfileCard />
                <Timeline id={estudante.id} />
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
    logoutButton: {
        marginTop: 30,
        backgroundColor: "#ea2a26",
        width: '100%',
        height: 46,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 16,
        textTransform: 'none',
    },
});

export default ProfileView;
