import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View } from 'react-native';
import Footer from './footer.router';  // Certifique-se de que está importando o Footer corretamente
import ProfileView from '../screens/Profile';
import InfoView from '../screens/Informations';
import RulesView from '../screens/Rules';
import CommisionView from '../screens/Commission';
import MenuView from '../screens/Menu';
import HelpView from '../screens/Help';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
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
                            <Image
                                source={{ uri: "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg?w=2560&h=1920" }}
                                style={{ width: 30, height: 30, borderRadius: 12 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Perfil'
                }} />
            <Drawer.Screen
                name="information"
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
                name="Comissão"
                component={CommisionView}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/equipe.png')}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                    ),
                    drawerLabel: 'Comissão'
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
