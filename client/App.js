import React from 'react';
import Routes from './Routes';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Priorities from './components/Priorities';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#7CD2B3',
      contrastText: 'black',
    },
    secondary: {
      main: '#202A44',
      contrastText: '#7CD2B3',
    },
    text: {
      primary: '#121858',
      secondary: '#474f97',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Banner />
        <About />
        <Routes />
        <Priorities />
        <Skills />
        <Projects />
      </div>
    </ThemeProvider>
  );
};

export default App;
