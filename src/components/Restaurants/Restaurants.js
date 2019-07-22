import React, { Component } from 'react';

import RestaurantsList from './RestaurantsList';
import RestaurantDetails from './RestaurantDetails';

import restaurantServices from '../../services/restaurantServices';

import './Restaurants.scss';

// We can also use React context also for this requirement
class Restaurants extends Component {
  state = {
    selectedRestaurant: {},
    total: 0,
    business: []
  }

  componentDidMount() {
    restaurantServices()
      .then(searchResult =>
        this.setState({
          ...searchResult,
          selectedRestaurant: searchResult.business[0]
        }));
  }

  handleSelect = (selectedId) => {
    this.setState(prevState => ({
      selectedRestaurant: prevState.business.find(item => item.id === selectedId)
    }));
  }

  render() {
    const { total, business: restaurants, selectedRestaurant } = this.state;

    return (
      <div className="restaurants">
        <RestaurantsList
          total={total}
          restaurants={restaurants}
          selectedId={selectedRestaurant.id}
          onClick={this.handleSelect}
        />
        <RestaurantDetails {...selectedRestaurant} />
      </div>
    );
  }
}

export default Restaurants;
