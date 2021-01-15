import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from "recoil";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ede9ed'
    },
    secondary: {
      main: '#c2b7fa'
    },
    text: {
      primary: '#404041'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto'
    ].join(','),
  }
})

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
