import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const CustomCard = ({ title, items = [], pad = 16 }) => {
    return (
        <View style={[styles.container, { padding: pad }]}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        {items.map((item, index) => (
                            <View key={index} style={styles.item}>
                                <Text style={styles.itemText}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 15,
        alignItems: "center"
    },
    card: {
        width: '100%', // Faz o card ocupar a largura disponível
        maxWidth: 350, // Limita a largura máxima do card
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e86b70',
        backgroundColor: '#fcdfde',
        overflow: 'hidden',
        marginBottom: 15,
    },
    header: {
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#e86b70',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
    },
    content: {
        paddingBottom: 10,
        paddingHorizontal: 16, // Adicionando padding horizontal ao conteúdo
    },
    scrollView: {
        flexGrow: 1,
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0', // Adicionando uma borda fina entre os itens
    },
    itemText: {
        fontSize: 18,
        color: '#555',
    },
});

export default CustomCard;
