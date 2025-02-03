'use client';

import './globals.css';

import store from '@/redux/store';
import { Provider } from 'react-redux';
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Provider store={store}>
          <Header /> {/* Header component goes here */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
