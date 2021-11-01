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
      main: '#023047',
      contrastText: '#8ECAE6',
    },
    secondary: {
      main: '#219EBC',
      contrastText: '#FB8500',
    },
    text: {
      primary: '#1D3557',
      secondary: '#457B9D',
    },
    info: {
      main: '#FFB703',
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
