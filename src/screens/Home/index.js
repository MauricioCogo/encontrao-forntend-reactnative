import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Background from "../../components/background";
import Header from "../../components/header";

function HomeView() {
    return (
        <Background>
            <ScrollView>
                <Header styles={styles.Header} />
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.headerText]}>
                            XXX Encontrão!
                        </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.subHeaderText, { fontFamily: 'Open Sans Regular' }]}>
                            Buenas Encontristas de todos os rincões!
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.bodyText}>
                            Explore nosso aplicativo para:
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.bodyText}>
                            <Text style={styles.boldText}>Mapa:</Text> Encontre locais para fotos, lanches, exploração, provas, dormitórios e mais!
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.bodyText}>
                            <Text style={styles.boldText}>Informações:</Text> Confira regras, detalhes sobre o IFFar, outros institutos, o evento, o NTG Trempe da Saudade, desenvolvedores e cardápio.
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.bodyText}>
                            <Text style={styles.boldText}>Provas:</Text> Veja provas, participantes, locais, notas e resultados.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        minHeight: '100%',
    },
    textContainer: {
        marginBottom: 16,
        alignItems: 'flex-start',
    },
    titleContainer: {
        marginBottom: 16,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 35,
        textAlign: 'center',
    },
    subHeaderText: {
        fontSize: 30,
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 25,
        textAlign: 'left',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default HomeView;
