import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
    return (
        <View style={styles.wrapper}>
            <ImageBackground
                source={require('../../../assets/TopBackground.png')} // caminho para a primeira imagem de background
                style={styles.backgroundTop}
                resizeMode="stretch" // Ajusta a imagem para cobrir a área sem deformar
            >
                <ImageBackground
                    source={require('../../../assets/BottonBackground.png')} // caminho para a segunda imagem de background
                    style={styles.backgroundBottom}
                    resizeMode="stretch" // Ajusta a imagem para cobrir a área sem deformar
                >
                    <View style={styles.container}>
                        {children}
                    </View>
                </ImageBackground>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    backgroundTop: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    backgroundBottom: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        marginTop: '10%',
        flex: 1,
    },
});

export default Background;
