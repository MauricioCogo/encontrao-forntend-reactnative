import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from '../screens/ProfileView';
import LoginView from '../screens/Login';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginView} />
        </Stack.Navigator>
    );
}

export default AppNavigator;