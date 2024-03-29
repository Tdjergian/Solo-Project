import React from 'react';
import { createRoot } from 'react-dom/client';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
   <App />
   
);

