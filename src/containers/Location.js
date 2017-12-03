import React from 'react';
import * as _ from 'lodash';
import caretDown from 'caret-down.svg'
import PropTypes from 'prop-types';

const Location = ({locations, location}) => {
    const convertCodeToCountry = code => {
        const country = _.find(locations, loc => loc.code === code);
        return country.name;
    };
    const getFlag = code => {
        return require(`../images/Flags/${code.toLowerCase()}.svg`)
    }
    return (
        <div>
            <p className="label">Location</p>
            <div className="box">
                <p>{convertCodeToCountry(location)}</p>
                <img className="img--small img--flag" src={getFlag(location)} alt="flag" />
                <img className="img--small" src={caretDown} alt="caret down" />
            </div>
        </div>
    );
}

Location.propTypes = {
    location: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
  }
  
export default Location;