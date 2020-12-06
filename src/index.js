import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import filmsData from "./mocks/films";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from "./reducer";

const init = () => {
  const store = createStore(reducer);

  ReactDOM
    .render(<Provider store={store}>
      <App initialData={filmsData}/>
    </Provider>,
    document.querySelector(`#root`));
};

init();
