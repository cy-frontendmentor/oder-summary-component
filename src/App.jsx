import './App.styles.scss';

import React from 'react';
import { ReactComponent as BackgroundImage } from './assets/pattern-background-desktop.svg';
import Card from './components/card/Card';

const App = () => {
  return (
    <div className='container'>
      <Card></Card>
    </div>
  );
};

export default App;
