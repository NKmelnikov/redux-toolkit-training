import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Favourite from './pages/favourite';
import Header from './components/layouts/Header/Header';
import { store } from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <main className="the-app">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="favorite" element={<Favourite />} />
        </Routes>
      </Provider>
    </main>
  </BrowserRouter>
);
