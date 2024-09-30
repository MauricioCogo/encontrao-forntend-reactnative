// src/components/ProfileCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const ProfileCard = (props) => {
    const { name, avatar, campus } = props;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <View style={styles.content}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.campus}>{campus}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    card: {
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    content: {
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    campus: {
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
    },
});

export default ProfileCard;
