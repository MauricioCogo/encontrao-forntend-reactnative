import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Background from "../../components/background";
import Header from "../../components/header";
import DevelopersView from "./info/DevelopersView";
import IFFarSVS from "./info/IFFarSVS";
import InstitutesView from "./info/InstitutesView";
import EncontrãoView from "./info/EncontrãoView";
import TrempreView from "./info/TrempreView";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Stack = createStackNavigator();

function InfoView() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="IFFarSVS"
                component={IFFarSVS}
                options={{ title: 'IFFar - SVS' }}
            />
            <Stack.Screen
                name="Institutes"
                component={InstitutesView}
                options={{ title: 'Institutos Participantes' }}
            />
            <Stack.Screen
                name="Encontrão"
                component={EncontrãoView}
                options={{ title: 'Encontrão' }}
            />
            <Stack.Screen
                name="Trempre"
                component={TrempreView}
                options={{ title: 'NTG Trempe da Saudade' }}
            />
            <Stack.Screen
                name="Developers"
                component={DevelopersView}
                options={{ title: 'Desenvolvedores' }}
            />
        </Stack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <Background>
            <View style={styles.container}>
                <Header />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IFFarSVS')}>
                    <Text style={styles.buttonText}>IFFar - SVS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Institutes')}>
                    <Text style={styles.buttonText}>Institutos Participantes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Encontrão')}>
                    <Text style={styles.buttonText}>Encontrão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trempre')}>
                    <Text style={styles.buttonText}>NTG Trempe da Saudade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Developers')}>
                    <Text style={styles.buttonText}>Desenvolvedores</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    button: {
        backgroundColor: "#ff7470",
        borderWidth: 1,
        borderColor: "#e86b70",
        width: 258,
        height: 46,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "#000",
        textTransform: 'none',
        paddingHorizontal: 5,
    },
});

export default InfoView;
