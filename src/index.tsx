import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Fonts from './styled-components/global/fonts';
import Styles from './styled-components/global/styles';
import Colors from './styled-components/global/colors';
import App from './ui-core/App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Fonts />
    <Colors />
    <Styles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
