import React, { Component } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import Header from 'Header';
import Body from 'Body';
import Footer from 'Footer';

const uri = { uri: 'https://js-assignment.reprisk.com/graphql' };
const client = new ApolloClient({
  link: new HttpLink(uri),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;