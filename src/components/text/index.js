// src/components/Text.js
import React from 'react';
import { Text as RNText, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Text = (props) => {
    const {
        label,
        font,
        h,
        styles,
        al // Ajustado para incluir o alinhamento
    } = props;

    return (
        <View>
            <RNText
                style={[
                    styles.text,
                    { textAlign: al, fontFamily: font, ...styles }
                ]}
            // Variável para ajuste de tamanho do texto com base em 'h'
            >
                {label}
            </RNText>
        </View>
    );
};

Text.propTypes = {
    label: PropTypes.string,
    font: PropTypes.string,
    h: PropTypes.string,
    styles: PropTypes.object, // Adicionado para os estilos
    al: PropTypes.string // Adicionado para o alinhamento
};

Text.defaultProps = {
    label: "Text",
    font: "Arial",
    h: "16px", // Valor padrão para 'h' (não suportado diretamente em React Native)
    styles: {}, // Inicializa com um objeto vazio
    al: "left" // Alinhamento padrão
};

const styles = StyleSheet.create({
    text: {
        // Ajuste o tamanho do texto com base na propriedade 'h'
        fontSize: 16,
    },
});

export default Text;
