import React from 'react';
import ReactDOM from 'react-dom';
import SourceInformation from 'SourceInformation';
import { mount } from 'enzyme';
import Location from 'Location';

it('checks if proper country name is displayed', () => {
    const myLocation = "PL"
    const myLocations = [{ "name": "Oman", "code": "OM" }, { "name": "Poland", "code": "PL" }];
    const wrapper = mount(<Location location={myLocation} locations={myLocations} />);
    expect(wrapper.find('.box p')).toHaveText('Poland')
});
