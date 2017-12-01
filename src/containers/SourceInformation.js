import React from 'react';
import Box from 'Box';
import Location from 'Location';
import PageTitle from 'PageTitle';
import moment from 'moment';
import PropTypes from 'prop-types';

const SourceInformation = props => {
  const transformDate = date => {
    return moment(date * 1000).format('YYYY-MM-DD');
  }
  return (
    <div id="sourceInformation" className="page">
      <PageTitle title="Source Information" />
      <Box label="Name" val={props.articleSourceName} />
      <Location location={props.articleSourceLocation} locations={props.locations} />
      <Box label="Description" val={props.articleSourceDescription} />
      <Box label="Article Date" val={transformDate(props.articleDate)} />
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