import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Background from "../../components/background";
import Header from "../../components/header";
import DevelopersView from "./info/DevelopersView";
import IFFarSVS from "./info/IFFarSVS";
import InstitutesView from "./info/InstitutesView";
import EncontrãoView from "./info/EncontrãoView";
import TrempreView from "./info/TrempreView";

function InfoView() {
    const [currentPage, setCurrentPage] = useState('home');

    const handlePress = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('iffar-svs')}>
                            <Text style={styles.buttonText}>IFFar - SVS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('institutes')}>
                            <Text style={styles.buttonText}>Institutos Participantes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('encontrão')}>
                            <Text style={styles.buttonText}>Encontrão</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('ntg-trempe')}>
                            <Text style={styles.buttonText}>NTG Trempe da Saudade</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('developers')}>
                            <Text style={styles.buttonText}>Desenvolvedores</Text>
                        </TouchableOpacity>
                    </View>
                );
            case 'iffar-svs':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('home')}>
                            <Text style={styles.buttonText}>Voltar para Início</Text>
                        </TouchableOpacity>
                        <IFFarSVS />
                    </View>
                );
            case 'institutes':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('home')}>
                            <Text style={styles.buttonText}>Voltar para Início</Text>
                        </TouchableOpacity>
                        <InstitutesView />
                    </View>
                );
            case 'encontrão':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('home')}>
                            <Text style={styles.buttonText}>Voltar para Início</Text>
                        </TouchableOpacity>
                        <EncontrãoView />
                    </View>
                );
            case 'ntg-trempe':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('home')}>
                            <Text style={styles.buttonText}>Voltar para Início</Text>
                        </TouchableOpacity>
                        <TrempreView />
                    </View>
                );
            case 'developers':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => handlePress('home')}>
                            <Text style={styles.buttonText}>Voltar para Início</Text>
                        </TouchableOpacity>
                        <DevelopersView />
                    </View>
                );
            default:
                return <Text>Home Screen</Text>;
        }
    };

    return (
        <Background>
            <Header />
            {renderPage()}
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: "#ff7470",
        borderWidth: 1,
        borderColor: "#e86b70",
        width: 258,
        height: 46,
        borderRadius: 20,
        marginBottom: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: "#000",
        textTransform: 'none',
    },
});

export default InfoView;
