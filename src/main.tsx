import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../src/assets/css/main.css';
import Header from './components/Header/Header.tsx';
import PageBasico from './Basico-TSX/PageBasico.tsx';
import PageHooks from './Hooks-TSX/PageHooks.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basico" element={<PageBasico />} />
        <Route path="/hooks" element={<PageHooks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

