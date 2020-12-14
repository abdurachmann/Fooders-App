/* eslint-disable no-underscore-dangle */
import './restaurant-item';

class RestaurantList extends HTMLElement {
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this._render();
    }

    _render() {
        this._restaurants.forEach((restaurant) => {
            const restaurantItem = document.createElement('restaurant-item');
            this.appendChild(restaurantItem);
            restaurantItem.restaurant = restaurant;
        });
    }
}

customElements.define('restaurant-list', RestaurantList);
