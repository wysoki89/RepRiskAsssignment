import React from 'react';
import PageTitle from 'PageTitle';
import Company from 'Company';
import PropTypes from 'prop-types';

const CompaniesList = props => {
  const getFlag = code => {
    if (code) {
      return require(`../images/Flags/${code.toLowerCase()}.svg`)
    }
  }
  return (
    <div className="page" style={{ padding: "20px" }}>
      <PageTitle title="Companies" />
      <hr className="underline" />
      {props.companies.map(company => <Company key={company.id} companyName={company.name} flagUrl={getFlag(company.location)} companyUrl={company.website} />
      )}
    </div>
  )
}


CompaniesList.propTypes = {
  locations: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
}

export default CompaniesList;