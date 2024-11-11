import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';

const EncontrãoView = () => {
    return (
        <Background>
            <ScrollView contentContainerStyle={styles.container}>
                <Header />
                <Text style={styles.title}>Encontrão</Text>
                <Text style={styles.text}>
                    Em meados de 1991, a Escola Agrotécnica Federal de Alegrete convidava as demais Agrotécnicas de Bento Gonçalves - RS, São Vicente-RS, Sertão-RS e Concórdia-SC para uma integração entre as entidades tradicionalistas de suas escolas. No final daquele ano, por motivos não conhecidos, apenas a escola de Sertão compareceu na integração.
                </Text>
                <Text style={styles.text}>
                    Mas a primeira tentativa não foi em vão: no ano seguinte, em 1992, a Escola Agrotécnica Federal de Sertão- RS retribuiria a hospitalidade recebida em Alegrete-RS, sediando a integração. Dessa vez, compareceram as demais escolas convidadas: Bento Gonçalves- RS, São Vicente-RS e Concórdia-SC, acontecendo então o primeiro Encontrão.
                </Text>
                <Text style={styles.text}>
                    Dos resultados positivos daquele evento, seguiu-se realizando, anualmente, o então chamado “Encontrão”, sendo que a cada ano uma escola sediava: em 1993 - Bento Gonçalves; 1994 - Concórdia; 1995 - São Vicente do Sul e em 1996 - Alegrete.
                </Text>
                <Text style={styles.text}>
                    No ano de 1997 foram incorporadas ao quadro de participantes a Escola Agrotécnica Federal de Rio do Sul e a Escola Agrotécnica Federal de Sombrio (hoje Campus Santa Rosa do Sul), esta última, sede do evento naquele ano.
                </Text>
                <Text style={styles.text}>
                    Seguiu-se a rodada dos Campi, sendo realizado em:
                </Text>
                <Text style={styles.list}>
                    1998 - Sertão; {'\n'}
                    1999 - Rio do Sul; {'\n'}
                    2000 - Bento Gonçalves; {'\n'}
                    2001 - Concórdia; {'\n'}
                    2002 - São Vicente do Sul; {'\n'}
                    2003 - Alegrete; {'\n'}
                    2004 - Sombrio; {'\n'}
                    2005 - Sertão; {'\n'}
                    2006 - Rio do Sul; {'\n'}
                    2007 - Bento Gonçalves; {'\n'}
                    2008 - Concórdia.
                </Text>
                <Text style={styles.text}>
                    Em dezembro de 2008, as Escolas Agrotécnicas passaram a integrar a rede dos Institutos Federais de Educação, Ciência e Tecnologia. Passou a existir o Instituto Federal Catarinense (IFC), no Estado de Santa Catarina e os Institutos Federais do Rio Grande do Sul (IFRS) e o Instituto Federal Farroupilha (IFFar). Assim, em 2009, iniciou um novo ciclo nos Encontrões, e no Encontro de 2009, sediado em São Vicente do Sul, passam a fazer parte do grupo as escolas de Júlio de Castilhos e Santo Augusto, pertencentes ao IFFar.
                </Text>
                <Text style={styles.text}>
                    Em 2010, no Encontro sediado em Alegrete-RS, novas escolas passam a fazer parte do grupo: São Borja-RS e Santa Rosa-RS.
                </Text>
                <Text style={styles.text}>
                    No ano seguinte, 2011, entram para o grupo o IFFar Panambi-RS, no encontro que foi sediado no já então IFC-Santa Rosa do Sul.
                </Text>
                <Text style={styles.text}>
                    Sempre crescendo e cativando a admiração de alunos e servidores de todas as redes de Instituições, o evento não parou de acontecer. No ano de 2012, sediado pelo IFRS Sertão, entra para o quadro de participantes o IFRS-Ibirubá-RS.
                </Text>
                <Text style={styles.text}>
                    Em 2013, o Encontro volta a ser sediado em Alegrete-RS e, no ano seguinte, 2014, é realizado em Júlio de Castilhos-RS, sendo nessa ocasião realizado pela primeira vez fora de um dos 07 primeiros Campi sede.
                </Text>
                <Text style={styles.text}>
                    Em 2015, Concórdia sediou o evento e Farroupilha participou pela primeira vez, onde logo no ano seguinte, 2016, sedia o evento no Parque do Cinquentenário.
                </Text>
                <Text style={styles.text}>
                    Em 2017 voltamos para Sertão, onde tivemos mais um estreante: a UFSM passa a integrar o grupo, mudando assim o nome do evento para Encontro Cultural Tradicionalista das instituições da Região Sul do Brasil.
                </Text>
                <Text style={styles.text}>
                    Em 2018, a UFSM foi a sede do evento. Em 2019, os Campi Bento Gonçalves e o Campi Farroupilha organizaram juntos o ENCONTRÃO que foi realizado na cidade de Farroupilha.
                </Text>
                <Text style={styles.text}>
                    Para 2020, a organização do 29º Encontro Cultural e Tradicionalista das Instituições Federais da Região Sul ficou a cargo do IFC - Videira, porém, como sabemos, a pandemia interferiu nos planos e com isso o evento não pôde ser realizado naquela oportunidade.
                </Text>
                <Text style={styles.text}>
                    A pandemia se estendeu em 2020 e 2021. Em 2022 houve uma tentativa de retomada, porém como muitos alunos que antes faziam parte dos grupos já haviam saído das instituições, ainda não foi possível a realização do evento. Somente em 2023 pode-se realizar a 29ª edição.
                </Text>
            </ScrollView>
        </Background>
    );
};

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
        marginVertical: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        marginVertical: 8,
        lineHeight: 24,
    },
    list: {
        fontSize: 16,
        textAlign: "left",
        marginVertical: 8,
        lineHeight: 24,
    },
});

export default EncontrãoView;
