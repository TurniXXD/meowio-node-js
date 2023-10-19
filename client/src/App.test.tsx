import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Mock for the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: (namespace: string) => ({
    t: (key: string) => key,
  }),
}));

test('renders app', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
