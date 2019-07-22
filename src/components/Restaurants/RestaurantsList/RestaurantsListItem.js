import React from 'react';
import PropTypes from 'prop-types';

const RestaurantsListItem = ({ name, location, selected, onClick }) => {
  const className = `restaurants-list-item ${selected ? 'selected' : ''}`;

  return (
    <li className={className} onClick={onClick}>
      <h3 className="name">{name}</h3>
      <address className="address">{`${location.address1}, ${location.city}`}</address>
    </li>
  );
};

RestaurantsListItem.propTypes = {
  name: PropTypes.string,
  location: PropTypes.object,
};

export default RestaurantsListItem;
