import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from './context/AuthContext';
import { VccmProvider } from './context/VccmContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <VccmProvider>
        <App />
      </VccmProvider>
    </AuthProvider>
  </React.StrictMode>
);
