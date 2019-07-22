import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = props => (
  <header className="header">
    <h1 className="heading">{props.heading}</h1>
  </header>
);

Header.propTypes = {
  heading: PropTypes.string.isRequired
}


export default React.memo(Header);
