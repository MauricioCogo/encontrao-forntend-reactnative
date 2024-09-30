import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons'; // ou @react-native-vector-icons/MaterialIcons

const Input = (props) => {
    const {
        label,
        styles,
        alignment,
    } = props;

    return (
        <View
            style={[
                styles.container,
                {
                    alignItems: alignment?.alignItems || 'flex-start',
                    justifyContent: alignment?.justifyContent || 'flex-start',
                },
            ]}
        >
            <MaterialIcons name="alternate-email" size={24} color="#000000" style={styles.icon} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={label}
                />
            </View>
        </View>
    );
}

Input.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.object,
        icon: PropTypes.object,
        inputContainer: PropTypes.object,
        label: PropTypes.object,
        input: PropTypes.object,
    }),
    label: PropTypes.string,
    alignment: PropTypes.shape({
        alignItems: PropTypes.string,
        justifyContent: PropTypes.string,
    }),
};

Input.defaultProps = {
    label: "Senha",
    styles: StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-start',
        },
        icon: {
            marginRight: 8,
            marginVertical: 4,
        },
        inputContainer: {
            flex: 1,
        },
        label: {
            fontSize: 16,
            marginBottom: 4,
        },
        input: {
            borderBottomWidth: 1,
            borderColor: 'gray',
            padding: 8,
        },
    }),
    alignment: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
};

export default Input;
