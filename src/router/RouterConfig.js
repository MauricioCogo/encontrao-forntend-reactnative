// src/navigation/RouterConfig.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerRoutes from './drawer.router'; // Certifique-se de que o caminho está correto
import LoginScreen from '../screens/Login/index'; // Certifique-se de que o caminho está correto

const Stack = createNativeStackNavigator();

const RouterConfig = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    <Stack.Screen name="Home">
                        {props => (
                            <DrawerRoutes {...props} setIsLoggedIn={setIsLoggedIn} />
                        )}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="Login">
                        {props => (
                            <LoginScreen
                                {...props}
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        )}
                    </Stack.Screen>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RouterConfig;
