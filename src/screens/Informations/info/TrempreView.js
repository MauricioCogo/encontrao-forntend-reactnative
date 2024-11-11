import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';

function TrempreView() {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                <Text style={styles.title}>NTG Trempe da Saudade</Text>
                <Text style={styles.text}>
                    No início dos anos 90, quando a situação financeira da instituição já começava a melhorar, foi construído o prédio do NTG - Núcleo de Tradições Gaúchas que conhecemos, com uma churrasqueira interna e outra externa, e onde, por alguns anos, estava localizada a lancheria e restaurante da instituição. No lado externo, existia apenas um galpão pequeno e baixo, com piso de asfalto, conseguido pelo colega aposentado Nilo Roso com o DAER (Departamento de Estradas). Foi realizado um mutirão de servidores para espalhar o asfalto quente no piso. Lá continuaram a ser realizadas as festividades da Semana Farroupilha, chegadas da Chama Crioula, ensaios da invernada, confraternizações e churrascos. Em 2017, ocorreu a demolição da antiga churrasqueira e galpão externos, para construção da nova estrutura pelos servidores terceirizados e efetivos, em regime de mutirão colocando em pé a estrutura externa que conhecemos hoje. O NTG Trempe da Saudade teve sua inauguração realizada por Severino Acosta, o qual ganhou um concurso para escolha do lema e nome do local, tendo como inspiração os três anos de estudo dos estudantes (Trempe), os encontros ocorridos na instituição e as saudades que estes encontros traziam ao término dos cursos, com o seguimento da vida de cada um. Tendo um imenso significado até hoje na vida de cada estudante que passa pela instituição: “NTG Trempe da Saudade, Tradição como Herança, Separação como Destino”.
                </Text>
                <Text style={styles.title}>A invernada</Text>
                <Text style={styles.text}>
                    Em meados dos anos 80, iniciaram as primeiras invernadas da instituição, organizados pela servidora aposentada profª Eloisa Hercolani, contando somente com meninos, já que não recebiam meninas para estudar aqui. Encorajados pela direção de criar uma Invernada, mas sem apoio financeiro algum, tanto professora quanto alunos com muito amor à tradição gaúcha e entusiasmo traziam as inspirações de coreografias de outras instituições, pois não havia instrutor, não possuíam local para ensaiar, não tinham pilchas próprias, som ou transporte. De acordo com a profª Eloisa, ela e o motorista, Vilmar Delavechia (Sr. Negrinho), iam à Jaguari buscar um gaiteiro para tocar, pois não tinha nenhum gaiteiro em São Vicente. E muitas vezes viajaram com os estudantes de Kombi para as apresentações. A primeira coreografia marcante foi a Dança com Facões, com as luzes do salão apagadas, os alunos apenas carregavam tochas e as faíscas dos facões davam o espetáculo. Anos mais tarde, as meninas foram se inserindo. Nesta época, vestidos e roupas eram dos próprios estudantes ou emprestados. A primeira roupa custeada pela instituição foi uma saia floreada em tons de azul e camisa branca (que aparece nas fotos). Na década de 90, iniciaram a confecção dos vestidos pela instituição que iam passando de estudante para estudante e foram sendo reformados, ao longo dos anos, como é hoje. No final da década de 90, com o prédio do NTG já construído é que iniciaram os verdadeiros incentivos, quando além de roupas e transporte a invernada já contava com instrutores, materiais e coreografias mais elaboradas. As invernadas do NTG Trempe da Saudade ensaiam anualmente para rodar a região durante a Semana Farroupilha, com suas apresentações sempre muito esperadas e tradicionalmente marcantes. Os coordenadores da Invernada foram:
                    Eloisa Goelzer Hercolani, do início até 1993;
                    Claudio Humberto Correa, de 1994 a 1997;
                    Deise Helena Gabriel Rosa, de 1997 a 2009;
                    Letícia Mossate Jobim, de 2010 a 2013;
                    Tatiana Menezes da Silveira, de 2014 a 2021;
                    Eduardo Feitoza, a partir de 2021 até os dias de hoje.
                    As invernadas participam anualmente dos “Encontrões de Integração Tradicionalista das Escolas Técnicas Federais da Região Sul”, onde ocorrem bailes, apresentações de danças, provas culinárias, provas de habilidades campeiras e muita integração entre os estudantes de várias instituições da região sul do país. Cada ano, o Encontrão ocorre em um Campus diferente, em sistema de rodízio. O Campus São Vicente do Sul foi sede em 4 oportunidades: 1995 (IV Edição), sob coordenação de Cláudio Corrêa; 2002 (XI Edição), sob coordenação de Deise Helena Rosa; 2009 (XVIII Edição), sob coordenação de Deise Helena Rosa; 2024 (XXX Edição), sob coordenação de Eduardo Feitoza.
                </Text>
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        marginBottom: 5, // Margem inferior adicionada
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
        lineHeight: 24,
        marginBottom: 10, // Margem inferior adicionada
    },
});

export default TrempreView;
