import React from 'react';
import ReactDOM from 'react-dom'; 
import Main from './index.js';

// for react-hot-loader
if (module.hot) {
  module.hot.accept();
}

const rootElement = document.getElementById('root');
// for non code-splitting
// import Main from './index.js';
//  ReactDOM.hydrate(<Main/>, rootElement)


// for code-splitting
import(/* webpackChunkName: "index" */ './index.js').then(({ default: Main }) => {
  ReactDOM.render(<Main />, rootElement);
});

