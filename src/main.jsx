import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <HooksApp/>
    </React.StrictMode>
    
);