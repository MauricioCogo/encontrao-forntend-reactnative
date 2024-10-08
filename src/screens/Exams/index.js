import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExamView from './Exam';
import ParticipantsView from './Participants';

const Stack = createStackNavigator();

const Exams = () => {
    return (
        <Stack.Navigator initialRouteName="Exams">
            <Stack.Screen
                name="Exam"
                component={ExamView}
                options={{ headerShown: false }} // Remove o cabeçalho
            />
            <Stack.Screen
                name="Participants"
                component={ParticipantsView}
                options={{ headerShown: false }} // Remove o cabeçalho
            />
        </Stack.Navigator>
    );
};

export default Exams;
