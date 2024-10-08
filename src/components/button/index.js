import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Confirm = (props) => {
    const {
        onClick = () => { },
        label,
        styles,
    } = props;

    return (
        <TouchableOpacity
            onPress={onClick}
            style={[defaultStyles.button, styles]}
        >
            <Text style={[defaultStyles.buttonText, { color: styles.color || defaultStyles.buttonText.color }]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

Confirm.defaultProps = {
    label: "Button",
    styles: {
        color: "#000",
        backgroundColor: "#ff7470",
        borderWidth: 1,
        borderColor: "#e86b70",
        width: 258,
        height: 46,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
};

const defaultStyles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
        textTransform: 'none', // Para manter o texto original, sem capitalizar
    },
});

export default Confirm;
