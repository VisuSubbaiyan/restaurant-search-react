import React from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

import Heading from './Heading';
import Photos from './Photos';
import Reviews from './Reviews';

const RestaurantDetails = props => {
  const headingProps = pick(props,
    ['name', 'url', 'location', 'phone', 'display_phone', 'rating']
  );

  return (
    <div className="restaurant-details">
      <Heading {...headingProps} />
      <Photos name={props.name} photos={props.photos} />
      <Reviews reviews={props.reviews} />
    </div>
  );
};

RestaurantDetails.propTypes = {
  name: PropTypes.string,
  location: PropTypes.object,
  phone: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.string),
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default React.memo(RestaurantDetails);
