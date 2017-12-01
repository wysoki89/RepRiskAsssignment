import React from 'react';
import * as _ from 'lodash';
import caretDown from 'caret-down.svg'
import PropTypes from 'prop-types';

const Location = props => {
    const convertCodeToCountry = code => {
        const country = _.find(props.locations, location => location.code === code);
        return country.name;
    };
    const getFlag = code => {
        return require(`../images/Flags/${code.toLowerCase()}.svg`)
    }
    return (
        <div>
            <p className="label">Location</p>
            <div className="box">
                <p>{convertCodeToCountry(props.location)}</p>
                <img className="smallImg pullFlexItemRigth bordered" src={getFlag(props.location)} alt="flag" />
                <img className="smallImg" src={caretDown} alt="caret down" />
            </div>
        </div>
    );
}

Location.propTypes = {
    location: PropTypes.string.isRequired,
    locations: PropTypes.array.isRequired,
  }
  
export default Location;