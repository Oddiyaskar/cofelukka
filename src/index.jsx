import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as LangProvider } from './Components/Context/Localization';
import { Provider as ThemeProvider } from './Components/Context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
);