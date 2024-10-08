import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const GradeCard = ({ participant, onClose }) => {
    const [grades, setGrades] = useState({
        grade1: '',
        grade2: '',
        grade3: '',
        grade4: '',
        grade5: '',
    });

    const handleInputChange = (name, value) => {
        setGrades({
            ...grades,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Aqui você pode fazer algo com as notas, como enviá-las para um servidor ou atualizar o estado global
        console.log(`Notas para ${participant.name}:`, grades);
        onClose(); // Fecha o GradeCard após o envio
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notas para {participant.name}</Text>
            {Object.keys(grades).map((key) => (
                <TextInput
                    key={key}
                    style={styles.input}
                    placeholder={`Nota ${key.charAt(key.length - 1)}`}
                    value={grades[key]}
                    onChangeText={(value) => handleInputChange(key, value)}
                    keyboardType="numeric"
                />
            ))}
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Enviar Notas</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#e86b70',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default GradeCard;
