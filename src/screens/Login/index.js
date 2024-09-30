// src/screens/LoginView.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useEstudante } from '../../context/Student';
import imgTrempe from '../../../assets/Trempe.png';
import imgIffar from '../../../assets/iffarsvs.png';
import Background from "../../components/background";
import { getUser } from "../../services/Users/index";

const LoginView = ({ setIsLoggedIn }) => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useEstudante();

    const handleLogin = () => {
        const dataUser = getUser(cpf);

        if (dataUser => dataUser.cpf === cpf && dataUser.password === password) {
            login(dataUser);
            setIsLoggedIn(true);
        } else {
            Alert.alert("Erro", "CPF ou senha incorretos");
        }
    };

    return (
        <Background>
            <View style={styles.container}>
                <Image source={imgTrempe} style={styles.logo} resizeMode="contain" />
                <Text style={[styles.text, styles.title]}>Bem vindo ao 30º encontrão!</Text>
                <Text style={[styles.text, styles.subtitle]}>Realizar login</Text>
                <TextInput placeholder="CPF ou Matricula" value={cpf} onChangeText={setCpf} style={styles.input} />
                <TextInput placeholder="Sua Senha" secureTextEntry={true} value={password} onChangeText={setPassword} style={styles.input} />
                <Text style={styles.helpText}>Como obter minha senha?</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Image source={imgIffar} style={styles.logoI} resizeMode="contain" />
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 100,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 46,
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    helpText: {
        fontSize: 10,
        textAlign: 'center',
        marginVertical: 5,
    },
    button: {
        marginTop: 30,
        backgroundColor: "#ea2a26",
        width: 258,
        height: 46,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        textTransform: 'none',
    },
    logo: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 10,
    },
    logoI: {
        width: '40%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 50,
    }
});

export default LoginView;
