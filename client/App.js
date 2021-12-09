import React from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 330,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#264653',
      contrastText: '#fafafa',
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
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Banner />
        <Intro />
        <Skills />
        <Projects />
        <ThankYou />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
