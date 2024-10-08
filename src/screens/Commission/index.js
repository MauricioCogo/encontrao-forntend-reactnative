import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EvaluatorView from './Evaluator/index'; // Certifique-se de que o caminho esteja correto
import GradesView from './Grades/index'; // Certifique-se de que o caminho esteja correto

const Stack = createStackNavigator();

const Commission = () => {
    return (
        <Stack.Navigator initialRouteName="Evaluator">
            <Stack.Screen
                name="Evaluator"
                component={EvaluatorView}
                options={{ headerShown: false }} // Remove o cabeçalho
            />
            <Stack.Screen
                name="Grades"
                component={GradesView}
                options={{ headerShown: false }} // Remove o cabeçalho
            />
        </Stack.Navigator>
    );
};

export default Commission;
