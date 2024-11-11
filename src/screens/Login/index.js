import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useUser } from '../../context/Student'; // Importe o contexto
import imgTrempe from '../../../assets/Trempe.png';
import imgIffar from '../../../assets/iffarsvs.png';
import Background from "../../components/background";
import { getUser } from "../../services/Users/index";
import { getUrl } from "../../services/index";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Certifique-se de importar AsyncStorage

const LoginView = ({ setIsLoggedIn }) => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const { saveUserData } = useUser(); // Use o contexto para salvar os dados do usuário
    const [lembrarLogin, setLembrarLogin] = useState(false); // Novo estado para checkbox
    const [estudante, setEstudante] = useState(null);
    const [teste, setTeste] = useState(null);

    // Função para buscar dados do AsyncStorage
    const fetchUserData = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('@user_data');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                setCpf(parsedUserData.cpf); // Preenche CPF
                setPassword(parsedUserData.password); // Preenche Senha
                setLembrarLogin(true); // Marca a checkbox se os dados existirem
            }
        } catch (e) {
            console.error('Erro ao recuperar dados do usuário', e);
        }
    };

    useEffect(() => {
        // Chama a função para buscar dados do AsyncStorage na montagem do componente
        fetchUserData();
    }, []);

    const handleLogin = async () => {
        const dataUser = await getUser(cpf);
        setTeste(getUrl)
        if (dataUser) {
            if (dataUser.cpf === cpf && dataUser.password === password) {
                console.warn("asda");
                saveUserData(dataUser); // Salva os dados do usuário no AsyncStorage
                // Se "lembrarLogin" estiver marcado, armazena os dados
                if (lembrarLogin) {
                    await AsyncStorage.setItem('@user_data', JSON.stringify(dataUser));
                    setEstudante(dataUser)
                } else {
                    // Se a checkbox não estiver marcada, remove os dados do AsyncStorage
                    await AsyncStorage.removeItem('@user_data');
                }
                setIsLoggedIn(true); // Atualiza o estado de login
            } else {
                Alert.alert("Erro", "CPF ou senha incorretos");
            }
        } else {
            Alert.alert("Erro", "Verifique a conexão com a internet e tente novamente!");
        }
    };

    const showPasswordHint = () => {
        Alert.alert(
            "Dúvida sobre a senha?",
            "Não se preocupe! A senha que você está procurando é bem simples: ela é o seu próprio CPF! Basta utilizá-lo para fazer login.",
            [{ text: "Entendido", style: "cancel" }]
        );
    };
    return (
        <Background>
            <View style={styles.container}>
                <Image source={imgTrempe} style={styles.logo} resizeMode="contain" />
                <Text>{teste}</Text>
                <Text style={[styles.text, styles.title]}>Bem-vindo ao 30º encontrão!</Text>
                <Text style={[styles.text, styles.subtitle]}>Realizar login</Text>
                <TextInput
                    placeholder="CPF"
                    value={cpf}
                    onChangeText={setCpf}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Sua Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <TouchableOpacity onPress={showPasswordHint}>
                    <Text style={styles.helpText}>Como obter minha senha?</Text>
                </TouchableOpacity>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[styles.checkbox, lembrarLogin && styles.checkboxChecked]}
                        onPress={() => setLembrarLogin(!lembrarLogin)}
                    >
                        {lembrarLogin && <View style={styles.checkboxChecked} />}
                    </TouchableOpacity>
                    <Text style={styles.checkboxLabel}>Lembrar login</Text>
                </View>

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
        marginTop: 60,
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
        color: '#007BFF', // Cor azul para indicar que é clicável
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
        backgroundColor: '#ea2a26', // Cor de fundo quando marcada
    },
    checkboxLabel: {
        fontSize: 16,
    },
});

export default LoginView;
