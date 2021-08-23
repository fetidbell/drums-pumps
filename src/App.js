import React from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { MainPage } from '~modules/main';
import 'normalize.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  );
}

export default App;
