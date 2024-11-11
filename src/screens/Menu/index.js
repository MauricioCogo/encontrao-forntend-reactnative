import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../../components/background';
import Header from '../../components/header';

const MenuView = () => {
    const menu = {
        '15/11': {
            cafe: 'Leite, Aveia, Granola, Pão cachorrinho, Doce de leite ou doce de frutas, Maçã',
            almoco: 'Arroz, Feijão, Lasanha, Molho de queijo, Alface, Cenoura, Beterraba, Vagem, Brócolis',
            janta: 'Arroz, Feijão, Macarrão, Queijo ralado, Alface, Cenoura, Beterraba, Repolho, Brócolis',
            lanche: 'Pizza bolonhesa, Maçã',
        },
        '16/11': {
            cafe: 'Leite, Aveia, Granola, Omelete, Morango',
            almoco: 'Carreteiro de charque, Costelão, Pão cacetinho, Alface, Repolho, Servir no NTG',
            janta: 'Frango assado caramelado, Alface, Cenoura, Beterraba, Vagem',
            lanche: 'Pão de sanduíche, ricota, cenoura, banana',
        },
    };

    return (
        <Background>
            <ScrollView style={styles.container}>
                <Header />
                {Object.entries(menu).map(([date, meals]) => (
                    <View key={date} style={styles.dayContainer}>
                        <Text style={styles.date}>{date}</Text>
                        <View style={styles.mealContainer}>
                            <Text style={styles.mealTitle}>Café da Manhã:</Text>
                            <Text style={styles.meal}>{meals.cafe}</Text>
                        </View>
                        <View style={styles.mealContainer}>
                            <Text style={styles.mealTitle}>Almoço:</Text>
                            <Text style={styles.meal}>{meals.almoco}</Text>
                        </View>
                        <View style={styles.mealContainer}>
                            <Text style={styles.mealTitle}>Jantar:</Text>
                            <Text style={styles.meal}>{meals.janta}</Text>
                        </View>
                        <View style={styles.mealContainer}>
                            <Text style={styles.mealTitle}>Lanche da Noite:</Text>
                            <Text style={styles.meal}>{meals.lanche}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    dayContainer: {
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 16,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    mealContainer: {
        marginBottom: 12,
    },
    mealTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
    },
    meal: {
        fontSize: 14,
        color: '#666',
    },
});

export default MenuView;
