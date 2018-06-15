import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

require('./style/main.scss');

const client = new ApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
