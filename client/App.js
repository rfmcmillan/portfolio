import React from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import About from './components/About';
import Priorities from './components/Priorities';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#264653',
      contrastText: '#c7fff0',
    },
    secondary: {
      main: '#2A9D8F',
      contrastText: '#264653',
    },
    text: {
      primary: '#264653',
      secondary: '#2A9D8F',
    },
    info: {
      main: '#2A9D8F',
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
        <Priorities />
        <Skills />
        <Projects />
        <ThankYou />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
