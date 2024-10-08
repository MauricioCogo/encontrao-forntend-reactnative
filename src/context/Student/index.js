import React, { useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const saveUserData = async (data) => {
        try {
            await AsyncStorage.setItem('@user_data', JSON.stringify(data));
            setUserData(data);
        } catch (error) {
            console.error('Erro ao salvar dados do usuário', error);
        }
    };

    const loadUserData = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('@user_data');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }
        } catch (error) {
            console.error('Erro ao carregar dados do usuário', error);
        }
    };

    const clearUserData = async () => {
        try {
            await AsyncStorage.removeItem('@user_data');
            setUserData(null);
        } catch (error) {
            console.error('Erro ao remover dados do usuário', error);
        }
    };

    useEffect(() => {
        loadUserData(); // Carrega os dados do usuário ao inicializar o contexto
    }, []);

    return (
        <UserContext.Provider value={{ userData, saveUserData, clearUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
