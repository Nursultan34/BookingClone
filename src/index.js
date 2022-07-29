import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
 .use(initReactI18next) 
 .use(LanguageDetector)
 .use(HttpApi)
 .init({
   supportedLngs: ['en','ru'],
   fallbackLng: "en",
   detection: {
     order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
     caches: ['cookie']
   },
   backend: {
    loadPath: '/assets/locales/{{lng}}/translation.json',
   },
   

 });

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);