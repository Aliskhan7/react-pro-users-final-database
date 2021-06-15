import React from 'react';
import PropTypes from 'prop-types';

function Albom(props) {
  return <li className="list-group-item">{props.albom.title}</li>;
}
Albom.propTypes = {
  albom: PropTypes.object,
};

export default Albom;
