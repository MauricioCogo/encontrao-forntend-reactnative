import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';

const PresentationsCard = ({ data }) => {
    const {
        order,
        entrance,
        tdance1,
        tdance2,
        tdance3,
        exit,
        biritiva1,
        biritiva2,
        biritiva3,
        campus,
        entity,
        date,
    } = data;

    const renderBiritivas = () => {
        if (biritiva1 || biritiva2 || biritiva3) {
            return (
                <>
                    <Text style={styles.sectionTitle}>Biritivas serão 16/11:</Text>
                    {biritiva1 && <Text style={styles.itemText}>{biritiva1}</Text>}
                    {biritiva2 && <Text style={styles.itemText}>{biritiva2}</Text>}
                    {biritiva3 && <Text style={styles.itemText}>{biritiva3}</Text>}
                </>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>{entity}</Text>
                    <Text style={styles.subtitle}>{campus}</Text>
                    <Text style={styles.order}>Ordem: {order}</Text>
                    {date && <Text style={styles.date}>Data: {format(parseISO(date), 'dd/MM')}</Text>}
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.content}>
                        {entrance && (
                            <>
                                <Text style={styles.sectionTitle}>Entrada:</Text>
                                <Text style={styles.itemText}>{entrance}</Text>
                            </>
                        )}
                        <Text style={styles.sectionTitle}>Danças Tradicionais:</Text>
                        <Text style={styles.itemText}>{tdance1}</Text>
                        {tdance2 && <Text style={styles.itemText}>{tdance2}</Text>}
                        {tdance3 && <Text style={styles.itemText}>{tdance3}</Text>}
                        {exit && (
                            <>
                                <Text style={styles.sectionTitle}>Saida:</Text>
                                <Text style={styles.itemText}>{exit}</Text>
                            </>
                        )}
                        {renderBiritivas()}
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
        marginBottom: 20,
    },
    card: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e86b70',
        backgroundColor: '#fcdfde',
        overflow: 'hidden',
    },
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#e86b70',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#fff',
    },
    order: {
        fontSize: 14,
        color: '#fff',
    },
    date: {
        fontSize: 14,
        color: '#fff',
    },
    content: {
        padding: 10,
    },
    scrollView: {
        flexGrow: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#555',
    },
    message: {
        fontSize: 16,
        fontStyle: 'italic',
        marginTop: 10,
        color: '#333',
    },
});

export default PresentationsCard;
