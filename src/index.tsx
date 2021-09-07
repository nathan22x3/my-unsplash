import store from 'app/store';
import Application from 'application';
import 'index.scss';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from 'report-web-vitals';
import { GlobalStyles } from 'twin.macro';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <Provider {...{ store }}>
      <Application />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
