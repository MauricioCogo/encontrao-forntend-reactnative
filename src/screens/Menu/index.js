import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../../components/background';
import Header from '../../components/header';

const MenuView = () => {
    const menu = {
        '15/11': {
            cafe: 'Panquecas de Banana com Mel e Frutas Vermelhas',
            almoco: 'Filé Mignon ao Molho de Vinho com Purê de Batata e Aspargos',
            janta: 'Sopa de Abóbora com Gengibre e Croutons de Alho',
        },
        '16/11': {
            cafe: 'Smoothie Verde com Espinafre, Abacate e Maçã',
            almoco: 'Salada de Quinoa com Legumes Grelhados e Molho de Tahine',
            janta: 'Tacos de Carne de Sol com Salsa de Manga e Arroz de Coco',
        },
        '17/11': {
            cafe: 'Croissant de Amêndoas com Café Expresso',
            almoco: 'Peixe Assado com Ervas e Batatas Rosti, Salada de Rúcula',
            janta: 'Ratatouille com Queijo de Cabra e Pão de Alho',
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
