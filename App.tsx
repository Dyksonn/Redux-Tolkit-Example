import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';

import { Landing } from './src/pages/Landing';

export default function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  )
}