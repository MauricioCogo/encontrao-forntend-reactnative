import React from 'react';
import RouterConfig from './src/router/RouterConfig'; // Ajuste o caminho conforme necessário
import { UserProvider } from './src/context/Student';

const App = () => {
  return (
    <UserProvider>
      <RouterConfig />
    </UserProvider>
  );
};

export default App;