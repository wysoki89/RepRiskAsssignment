import React from 'react';
import Box from 'Box';
import Location from 'Location';
import PageTitle from 'PageTitle';
import moment from 'moment';
import PropTypes from 'prop-types';

const SourceInformation = ({articleSourceLocation, articleSourceName, articleSourceDescription, articleDate, locations}) => {
  const transformDate = date => {
    return moment(date * 1000).format('YYYY-MM-DD');
  }
  return (
    <div className="body__page body__page--paddingHorizontal">
      <PageTitle title="Source Information" />
      <Box label="Name" value={articleSourceName} />
      <Location location={articleSourceLocation} locations={locations} />
      <Box label="Description" value={articleSourceDescription} />
      <Box label="Article Date" value={transformDate(articleDate)} />
    </div>
  )
}

SourceInformation.propTypes = {
  articleSourceLocation: PropTypes.string.isRequired,
  articleSourceName: PropTypes.string.isRequired,
  articleSourceDescription: PropTypes.string.isRequired,
  articleDate: PropTypes.number.isRequired,
  locations: PropTypes.array.isRequired,
}

export default SourceInformation;