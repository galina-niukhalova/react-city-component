import React from 'react';
import ReactDOM from 'react-dom';
import Cities from './containers/Cities';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

require('./style/main.scss');

const client = new ApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Cities />
  </ApolloProvider>
  , document.getElementById('root'));
