import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import { GlobalStyles } from './themes/global';

import { Provider } from 'react-redux';
import { store } from './redux/store';

window.store = store;


const update = () => {
   
   const darkModeValue = JSON.parse(localStorage.getItem('darkmode'));

   ReactDOM.render(
      <Provider store={store}>
         <ThemeProvider theme={theme(darkModeValue ? darkModeValue.darkMode : true)}>
            <GlobalStyles />
            <App />
         </ThemeProvider>
      </Provider>,
      document.getElementById('root')
   );
};
update();
store.subscribe(update);
