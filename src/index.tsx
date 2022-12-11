import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TerminalContextProvider } from 'react-terminal';
import './index.css';
import { store } from './redux/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <TerminalContextProvider>
                <App />
            </TerminalContextProvider>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
