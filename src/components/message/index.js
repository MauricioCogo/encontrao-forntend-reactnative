// RandomMessage.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Background from '../background';
import { SafeAreaView } from 'react-native-safe-area-context';

const messages = [
    "A página que outrora foi um refúgio agora se encontra em silêncio, aguardando que o toque do login traga de volta a vida que se perdeu.",
    "Como um livro fechado há muito tempo, a página fora do ar apenas espera ser reaberta, na esperança de encontrar seu leitor novamente.",
    "A página inativa é um eco do passado, uma lembrança de que, para reviver o que foi, é preciso um novo começo.",
    "Em cada tentativa de login, há um lembrete de que até mesmo o digital pode se tornar um fantasma de sua própria existência.",
    "Quando a página não está acessível, é como se estivéssemos presos em um intervalo eterno, esperando por uma conexão que nunca chega.",
    "A necessidade de relogar é um aviso sombrio de que o que parecia constante agora é apenas um vestígio de um tempo que se foi.",
    "Cada erro de login é uma pequena morte do momento, um lembrete de que a permanência é um luxo que nem mesmo o digital pode garantir.",
    "Em cada tela de erro, há um reflexo do vazio que sentimos quando algo que amamos se afasta, exigindo que nos esforcemos para trazê-lo de volta.",
    "A página fora do ar é um lembrete melancólico de que até os mundos virtuais têm seu fim, esperando que alguém faça o esforço para reavivá-los.",
    "O pedido de um novo login é uma triste confirmação de que a continuidade é frágil, e até as memórias digitais podem se perder na vastidão do esquecimento.",
    "Às vezes, o que foi uma conexão constante se torna uma sombra distante, aguardando pacientemente pelo toque de um novo login para reacender a chama.",
    "Cada tela de erro é um lembrete sutil de que até mesmo as páginas precisam de um novo começo para encontrar sua verdadeira essência novamente.",
    "A mensagem de erro é um sussurro do passado, pedindo para que voltemos e tentemos reviver o que antes era familiar e acolhedor.",
    "Enquanto a página está fora do ar, a sensação é como uma melancólica pausa, um lembrete de que tudo precisa ser revigorado para voltar a ter vida.",
    "O erro de login é um lamento digital, uma pausa inesperada que nos faz refletir sobre a fragilidade das coisas que costumávamos considerar permanentes."
];
const messageLogin = [
    "Reinicie o app e descubra a magia de um novo começo!",
    "Uma rápida reinicialização pode trazer a solução que você procura!",
    "Dê uma nova chance ao app com uma reinicialização – o melhor pode estar por vir!",
    "Reinicie o app e veja como a solução pode estar a um clique de distância!",
    "Um simples reinício pode trazer de volta tudo o que você estava esperando!",
    "Reiniciar o app pode ser a chave para um funcionamento perfeito. Tente!",
    "Às vezes, uma reinicialização é tudo que o app precisa para brilhar novamente.",
    "Experimente reiniciar o app – a resposta pode estar logo ali!",
    "Dê ao app uma nova oportunidade com uma reinicialização e veja a diferença!",
    "Uma pequena reinicialização pode desbloquear o que você está esperando. Experimente agora!"
];


const getRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return randomIndex;
};
const getRandomNumberLogin = () => {
    const randomIndex = Math.floor(Math.random() * messageLogin.length);
    return randomIndex;
};


const RandomMessage = () => {
    const [message, setMessage] = useState('');
    const [messagelogin, setMessageLogin] = useState('');

    useEffect(() => {
        const newMessage = getRandomNumber();
        const newMessageL = getRandomNumberLogin();
        setMessage(messages[newMessage]);
        setMessageLogin(messageLogin[newMessageL]);
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{message}</Text>
                    <Text style={styles.messageText}>{messagelogin}</Text>
                    <Image
                        source={require('../../../assets/desconectado.png')} // Use a imagem importada
                        style={styles.image}
                    />
                </View>
            </SafeAreaView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    messageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
});

export default RandomMessage;
