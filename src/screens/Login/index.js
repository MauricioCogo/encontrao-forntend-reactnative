import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useUser } from '../../context/Student';
import imgTrempe from '../../../assets/Trempe.png';
import imgIffar from '../../../assets/iffarsvs.png';
import Background from "../../components/background";
import { getUser } from "../../services/Users/index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUrl } from '../../services';

const LoginView = ({ setIsLoggedIn }) => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const { saveUserData } = useUser();
    const [lembrarLogin, setLembrarLogin] = useState(false);
    const [estudante, setEstudante] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Novo estado para carregar status

    const fetchUserData = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('@user_data');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                setCpf(parsedUserData.cpf);
                setPassword(parsedUserData.password);
                setLembrarLogin(true);
            }
        } catch (e) {
            console.error('Erro ao recuperar dados do usuário:', e);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogin = async () => {
        setEstudante(getUrl(cpf))
        if (!cpf || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        setIsLoading(true);
        console.log(`Tentativa de login com CPF: ${cpf}`); // Log para debug

        const dataUser = await getUser(cpf);

        if (dataUser) {
            console.log("Dados do usuário recebidos:", dataUser); // Log para debug
            if (dataUser.cpf === cpf && dataUser.password === password) {
                saveUserData(dataUser);
                if (lembrarLogin) {
                    await AsyncStorage.setItem('@user_data', JSON.stringify({ cpf, password }));
                } else {
                    await AsyncStorage.removeItem('@user_data');
                }
                setIsLoggedIn(true);
            } else {
                Alert.alert("Erro", "CPF ou senha incorretos");
            }
        } else {
            console.error("Erro na recuperação de dados. Verifique a conexão.");
            Alert.alert("Erro", "Verifique a conexão com a internet e tente novamente!");
        }

        setIsLoading(false);
    };

    const pegacpf = (cpf) => {

    }


    return (
        <Background>
            <View style={styles.container}>
                <Image source={imgTrempe} style={styles.logo} resizeMode="contain" />
                <Text>{estudante}</Text>
                <Text style={[styles.text, styles.title]}>Bem-vindo ao 30º econtrão!</Text>
                <Text style={[styles.text, styles.subtitle]}>Realizar login</Text>
                <TextInput
                    placeholder="CPF ou Matrícula"
                    value={cpf}
                    onChangeText={setCpf}
                    style={[styles.input, !cpf && styles.inputError]}
                />
                <TextInput
                    placeholder="Sua Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    style={[styles.input, !password && styles.inputError]}
                />
                <Text style={styles.helpText}>Como obter minha senha?</Text>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[styles.checkbox, lembrarLogin && styles.checkboxChecked]}
                        onPress={() => setLembrarLogin(!lembrarLogin)}
                    >
                        {lembrarLogin && <View style={styles.checkboxChecked} />}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>Lembrar login</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Entrar</Text>
                    )}
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
    inputError: {
        borderColor: 'red', // Indicar erro nos inputs
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
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#ea2a26',
    },
    checkboxLabel: {
        fontSize: 16,
    },
});

export default LoginView;
