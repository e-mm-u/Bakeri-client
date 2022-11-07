import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserAuthContextProvider from './Contexts/UserAuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>
);


