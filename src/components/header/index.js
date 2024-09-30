// Header.js
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import headerImage from '../../../assets/Trempe.png'; // Importe a imagem diretamente

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={headerImage} // Use a imagem importada
                style={styles.image}
                resizeMode="cover" // Garante que a imagem cubra o header sem distorção
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14,
        position: 'relative', // Note que o zIndex pode não ter o mesmo efeito no React Native
    },
    image: {
        width: '35%',
        height: undefined, // A altura é automática para manter a proporção
        aspectRatio: 1, // Ajuste a proporção conforme necessário
    },
});

export default Header;
