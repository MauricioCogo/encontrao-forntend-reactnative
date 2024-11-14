import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { setImage } from '../../services/Users';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileCard = () => {
    const [estudante, setEstudante] = useState(null);
    const [base64Image, setBase64Image] = useState(null);

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

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: true,
            base64: true,
            quality: 1,
        });

        if (!result.canceled) {
            setBase64Image(result.assets[0].base64);
        }
    };

    // Mover setImage para dentro de um useEffect, disparando quando a imagem ou o estudante mudar
    useEffect(() => {
        if (base64Image && estudante?.id) {
            setImage(estudante.id, base64Image)
                .then(response => {
                    if (response.avatar) {
                        Alert.alert("Sucesso!", "Sua foto foi alterada com sucesso, reinicie o app para ver ela!");
                    } else {
                        Alert.alert("Erro!", "Não foi possivel alterar sua foto");
                    }
                })
                .catch(error => {
                    console.error("Erro ao enviar a imagem:", error);
                });
        }
    }, [base64Image, estudante]);

    const Navatar = estudante?.avatar === "null" ? null : estudante?.avatar;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity onPress={pickImage}>
                    {Navatar ? (
                        <Image
                            source={{ uri: `http://192.168.1.17:9090${estudante.avatar}` }}
                            style={styles.avatar}
                        />
                    ) : (
                        <Text style={styles.placeholderText} onPress={pickImage}>
                            Clique aqui para {"\n"}adicionar uma foto!!
                        </Text>
                    )}
                </TouchableOpacity>
                <View style={styles.content}>
                    <Text style={styles.name}>{estudante?.name}</Text>
                    <Text style={styles.campus}>{estudante?.campus}</Text>
                    <Text style={styles.campus}>{estudante?.roles}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    card: {
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    content: {
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    campus: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
    },
    placeholderText: {
        textAlign: 'center', // Centraliza o texto
        color: 'black', // Cor do texto
        padding: 50,
        fontSize: 16, // Tamanho da fonte
    },
});

export default ProfileCard;