import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExamView from './Exam';
import ParticipantsView from './Participants';
import CommissionExamView from './Commission';

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
                options={{ title: 'Participantes' }} // Substitua 'Participantes' pelo nome que você deseja mostrar
            />
            <Stack.Screen
                name="Grades"
                component={CommissionExamView}
                options={{ title: 'Notas' }} // Substitua 'Participantes' pelo nome que você deseja mostrar
            />
        </Stack.Navigator>
    );
};

export default Exams;
