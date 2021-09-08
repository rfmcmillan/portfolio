import React from 'react';
import Routes from './Routes';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Priorities from './components/Priorities';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Alata', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#7CD2B3',
      contrastText: 'black',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Banner />
        <Nav />
        <About />
        <Routes />
        <Priorities />
      </div>
    </ThemeProvider>
  );
};

export default App;
