import React from 'react';
import ReactDOM from 'react-dom/client';
import { GiftExpertApp } from './components/GiftExpertApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <GiftExpertApp />
    </React.StrictMode>
    
);