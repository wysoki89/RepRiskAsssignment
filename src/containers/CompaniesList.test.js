import React from 'react';
import ReactDOM from 'react-dom';
import SourceInformation from 'SourceInformation';
import { mount } from 'enzyme';
import CompaniesList from 'CompaniesList';
import Company from 'Company';

it('checks if expected company elements are rendered', () => {
  const testCompanies = [
    {
      "id": 221945,
      "name": "Gualas",
      "website": "http://www.gualas.com",
      "location": null
    },
    {
      "id": 90542,
      "name": "Buapel",
      "website": "http://www.buapel.eu",
      "location": "IL"
    },
  ];
  const testLocations = [{ "name": "Poland", "code": "PL" }];
  const wrapper = mount(<CompaniesList companies={testCompanies} locations={testLocations} />);
  expect(wrapper).toContainReact(<Company key={testCompanies[0].id} companyName={testCompanies[0].name} companyUrl={testCompanies[0].website}/>)
});
