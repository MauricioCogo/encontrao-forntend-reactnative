import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions } from 'react-native';

function CustomAccordion({ title, items = [], pad }) {
    const [expanded, setExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const toggleAccordion = () => {
        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded(!expanded);
    };

    const accordionHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Math.min(items.length * pad, Dimensions.get('window').height * 0.4)], // Limite baseado na altura da tela
    });

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <TouchableOpacity onPress={toggleAccordion} style={styles.accordionHeader}>
                    <Text style={styles.title}>{title}</Text>
                </TouchableOpacity>
                <Animated.View style={[styles.accordionContent, { height: accordionHeight }]}>
                    {expanded && (
                        <ScrollView nestedScrollEnabled style={styles.scrollView}>
                            {items.map((item, index) => (
                                <View key={index} style={styles.item}>
                                    <Text style={styles.itemText}>{item}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 15,
    },
    card: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#e86b70',
        backgroundColor: '#fcdfde',
        overflow: 'hidden',
    },
    accordionHeader: {
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
    accordionContent: {
        overflow: 'hidden',
    },
    scrollView: {
        flexGrow: 1,
    },
    item: {
        padding: 10,
    },
    itemText: {
        fontSize: 16,
        color: '#555',
    },
});

export default CustomAccordion;
