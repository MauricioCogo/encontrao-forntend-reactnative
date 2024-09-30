import React from 'react';
import RouterConfig from './src/router/RouterConfig'; // Ajuste o caminho conforme necessário
import { EstudanteProvider } from './src/context/Student';

const App = () => {
  return (
    <EstudanteProvider>
      <RouterConfig />
    </EstudanteProvider>
  );
};

export default App;