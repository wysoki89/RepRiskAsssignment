import React from 'react';
import ReactDOM from 'react-dom';
import SourceInformation from 'SourceInformation';
import { mount } from 'enzyme';
import Box from 'Box';

it('checks if box childs are rendered', () => {
  const location = "PL"
  const name = "BBC News";
  const date = 1505813937;
  const convertedDate="2017-09-19";
  const description = "some description";
  const locations = [{ "name": "Poland", "code": "PL" }];
  const wrapper = mount(<SourceInformation
    articleSourceLocation= {location}
    articleSourceName= {name}
    articleSourceDescription={description}
    articleDate={date}
    locations={locations} />);
  expect(wrapper).toContainReact(<Box label="Name" val={name}/>)
  expect(wrapper).toContainReact(<Box label="Description" val={description}/>)
  expect(wrapper).toContainReact(<Box label="Article Date" val={convertedDate}/>)
});
