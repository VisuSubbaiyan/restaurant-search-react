import React from 'react';
import PropTypes from 'prop-types';

import RestaurantsListItem from './RestaurantsListItem';

const RestaurantsList = ({ total, restaurants, selectedId, onClick }) => (
  <div className="restaurants-list">
    <h3 className="total-result">{`${total} Restaurants`}</h3>
    <ul>
      {restaurants.map(
        restaurant => {
          const selected = restaurant.id === selectedId;
          // onClick is muted for selected item, to avoid unnecessary rerendering
          return (
            <RestaurantsListItem
              key={restaurant.id}
              {...restaurant}
              selected={selected}
              onClick={!selected ? () => onClick(restaurant.id) : () => null}
            />);
        })
      }
    </ul>
  </div>
);

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object)
}

export default React.memo(RestaurantsList);