import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { shallow } from 'enzyme';

beforeAll(() => {
  console.error = (error) => {
    throw new Error(error);
  };
});

it('renders without crashing', () => {
  shallow(<App />)
});
