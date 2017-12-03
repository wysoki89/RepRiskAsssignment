import React from 'react';
import ReactDOM from 'react-dom';
import Assesment from 'Assesment';
import { shallow } from 'enzyme';

beforeAll(() => {
  console.error = (error) => {
    throw new Error(error);
  };
});

it('renders without crashing', () => {
  shallow(<Assesment />)
});
