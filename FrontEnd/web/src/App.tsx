import React from 'react';
import './App.css';
import {ThemeProvider} from 'styled-components';
import light from './styles/themes/light';

import Dashboard from './containers/Dashboard';
import GlobalStyles from './styles/global';

const App = () => {


  return (
    <ThemeProvider theme={light}>
      <div>
        <GlobalStyles/>
        <Dashboard/>
      </div>
   </ThemeProvider>
  );
}

export default App;
