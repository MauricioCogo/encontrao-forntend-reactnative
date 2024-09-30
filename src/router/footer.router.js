import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../screens/Home';
import MapView from '../screens/Map';
import ExamView from '../screens/Exams';
import { View, Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Footer() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 15 } }}>
            <Tab.Screen
                name="Inicio"
                component={HomeView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/inicio.png')} // Caminho para a imagem
                                style={{ width: size, height: size, borderRadius: 12 }} // Ajuste o tamanho da imagem
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Mapa"
                component={MapView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/mapa.png')} // Caminho para a imagem
                                style={{ width: 30, height: 30, borderRadius: 12 }} // Ajuste o tamanho da imagem
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Provas"
                component={ExamView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../assets/icons/trofeu.png')} // Caminho para a imagem
                                style={{ width: size, height: size, borderRadius: 12 }} // Ajuste o tamanho da imagem
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
