// src/context/EstudanteContext.js
import React, { createContext, useContext, useState } from 'react';

const EstudanteContext = createContext();

export function EstudanteProvider({ children }) {
    const [estudante, setEstudante] = useState(null); // Armazena o estado do usuário

    const login = (userData) => {
        setEstudante(userData); // Atualiza o estado com os dados do usuário
    };

    const logout = () => {
        setEstudante(null); // Limpa os dados do usuário
    };

    return (
        <EstudanteContext.Provider value={{ estudante, login, logout }}>
            {children}
        </EstudanteContext.Provider>
    );
}

export const useEstudante = () => useContext(EstudanteContext);
