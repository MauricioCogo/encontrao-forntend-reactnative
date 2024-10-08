// src/navigation/RouterConfig.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './drawer.router';
import ProfileView from '../screens/Profile';
import LoginView from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const RouterConfig = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    // Renderiza a tela de Home com o DrawerRoutes
                    <Stack.Screen name="Home">
                        {props => <DrawerRoutes {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                ) : (
                    // Renderiza a tela de Login
                    <Stack.Screen name="Login">
                        {props => <LoginView {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                )}
                <Stack.Screen name="Profile">
                    {props => <ProfileView {...props} setIsLoggedIn={setIsLoggedIn} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RouterConfig;
