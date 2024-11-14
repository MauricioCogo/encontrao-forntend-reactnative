import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Background from '../../../components/background';
import Header from '../../../components/header';

function IFFarSVS() {
    return (
        <Background>
            <Header />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Instituto Federal Farroupilha - São Vicente do Sul</Text>

                <Image
                    source={require("../../../../assets/tb.jpg")} // Substitua com a URL real da imagem
                    style={styles.image}
                />

                <Text style={styles.subtitle}>Sobre o Campus</Text>
                <Text style={styles.text}>
                    O <Text style={styles.bold}>Campus São Vicente do Sul</Text> do Instituto Federal Farroupilha (IFFar) tem uma trajetória rica, começando em 17 de novembro de 1954, com a criação da <Text style={styles.bold}>Escola de Iniciação Agrícola</Text>. Desde sua fundação, passou por diversas transformações institucionais, incluindo a incorporação à Universidade Federal de Santa Maria em 1968 e, posteriormente, a evolução para o <Text style={styles.bold}>Centro Federal de Educação Tecnológica de São Vicente do Sul</Text> em 2002.{'\n\n'}
                    Em 2008, com a criação dos Institutos Federais, o campus foi integrado ao Instituto Federal Farroupilha, consolidando seu papel na oferta de educação técnica e superior na região.
                </Text>

                <Text style={styles.subtitle}>Cursos Oferecidos</Text>

                <Text style={styles.subtitle}>Cursos Integrados</Text>
                <Text style={styles.text}>
                    Estes cursos permitem que o estudante faça o Ensino Médio com formação profissional técnica em uma única matrícula.{'\n'}
                    - Técnico em Administração{'\n'}
                    - Técnico em Agropecuária{'\n'}
                    - Técnico em Manutenção e Suporte em Informática{'\n'}
                    - Técnico em Alimentos{'\n'}
                    - Técnico em Agroindústria (PROEJA)
                </Text>

                <Text style={styles.subtitle}>Cursos Subsequentes</Text>
                <Text style={styles.text}>
                    Para os cursos subsequentes, é necessário ter concluído o Ensino Médio. A seleção utiliza a nota do ENEM.{'\n'}
                    - Agricultura{'\n'}
                    - Alimentos{'\n'}
                    - Zootecnia
                </Text>

                <Text style={styles.subtitle}>Bacharelados</Text>
                <Text style={styles.text}>
                    Os cursos de bacharelado proporcionam uma sólida formação teórica e prática.{'\n'}
                    - Agronomia{'\n'}
                    - Administração
                </Text>

                <Text style={styles.subtitle}>Tecnologia</Text>
                <Text style={styles.text}>
                    Cursos tecnológicos são graduações com carga horária menor e foco aprofundado em áreas específicas.{'\n'}
                    - Análise e Desenvolvimento de Sistemas{'\n'}
                    - Gestão Pública
                </Text>

                <Text style={styles.subtitle}>Licenciaturas</Text>
                <Text style={styles.text}>
                    Licenciaturas formam profissionais para atuar em ambientes educacionais.{'\n'}
                    - Química{'\n'}
                    - Ciências Biológicas
                </Text>

                <Text style={styles.subtitle}>Contato</Text>
                <Text style={styles.text}>
                    Endereço: Rua 20 de Setembro, 2616{'\n'}
                    São Vicente do Sul - Rio Grande do Sul/RS{'\n'}
                    Telefone: 3218-8500{'\n'}
                    Email: gabinete.svs@iffarroupilha.edu.br
                </Text>
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#343a40',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        paddingHorizontal: 5,
        color: '#495057',
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default IFFarSVS;
