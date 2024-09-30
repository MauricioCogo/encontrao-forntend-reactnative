// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from '../screens/ProfileView';
import LoginView from '../screens/Login';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileView" component={ProfileView} />
            <Stack.Screen name="Login" component={LoginView} /> {/* Add your Login screen here */}
        </Stack.Navigator>
    );
}

export default AppNavigator;
