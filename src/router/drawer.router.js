import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Footer from './footer.router';
import ProfileView from '../screens/Profile';
import InfoView from '../screens/Informations';
import RulesView from '../screens/Rules';
import MenuView from '../screens/Menu';
import HelpView from '../screens/Help';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PresentationsView from '../screens/Presentations';
import FecultView from '../screens/Fecult';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    const [estudante, setEstudante] = useState(null);
    const [Icon, setIcon] = useState(true);

    // Função para buscar dados do AsyncStorage
    const fetchUserData = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('@user_data');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                setEstudante(parsedUserData);
                setIcon(true);  // Mostra o ícone personalizado se o usuário estiver logado
            } else {
                setIcon(false);  // Mostra o ícone padrão se o usuário não estiver logado
            }
        } catch (e) {
            console.error('Erro ao recuperar dados do usuário', e);
        }
    };

    useEffect(() => {
        fetchUserData(); // Busca dados ao carregar o componente

        // Define um intervalo para atualizar os dados periodicamente
        const intervalId = setInterval(() => {
            fetchUserData(); // Chama a função para buscar dados
        }, 5000); // Atualiza a cada 5 segundos (ajuste conforme necessário)

        return () => {
            clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
        };
    }, []);

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Início"
                component={Footer}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/inicio.png')}
                                style={{ width: 30, height: 30, borderRadius: 12 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Início',
                    drawerItemStyle: {
                        marginTop: 60
                    }
                }} />
            <Drawer.Screen
                name="Perfil"
                component={ProfileView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {Icon ? (
                                <Image
                                    source={{ uri: `http://192.168.1.12:8080${estudante?.avatar}` }}
                                    style={{ width: 30, height: 30, borderRadius: 12 }}
                                    onError={() => setIcon(false)}  // Fallback em caso de erro de carregamento
                                />
                            ) : (
                                <Image
                                    source={require('../../assets/icon.png')}  // Ícone padrão
                                    style={{ width: 30, height: 30, borderRadius: 12 }}
                                />
                            )}
                        </View>
                    ),
                    drawerLabel: 'Perfil'
                }}
            />
            <Drawer.Screen
                name="Informações"
                component={InfoView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/informacoes.png')}
                                style={{ width: 30, height: 30, borderRadius: 12 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Informações'
                }} />
            <Drawer.Screen
                name="Apresentações"
                component={PresentationsView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/dancando.png')}
                                style={{ width: 30, height: 30, borderRadius: 12 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Apresentações'
                }} />
            <Drawer.Screen
                name="FECULT"
                component={FecultView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/karaoke.png')}
                                style={{ width: 30, height: 30, borderRadius: 12 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'FECULT'
                }} />
            <Drawer.Screen
                name="Cardápio"
                component={MenuView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/cardapio.png')}
                                style={{ width: 30, height: 30, }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Cardápio'
                }} />
            <Drawer.Screen
                name="Regras"
                component={RulesView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/regras.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Regras'
                }} />
            <Drawer.Screen
                name="Ajuda"
                component={HelpView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/ajuda.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Ajuda'
                }} />
        </Drawer.Navigator>
    );
}
