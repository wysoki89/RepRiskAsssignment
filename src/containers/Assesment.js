import React, { Component } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import './Assesment.css';
import Body from 'Body';
import config from '../config'
import Footer from 'Footer';
import Header from 'Header';

const client = new ApolloClient({
  link: new HttpLink(config.uri),
  cache: new InMemoryCache()
});

class Assesment extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="assesment">
          <Header />
          <Body />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default Assesment;