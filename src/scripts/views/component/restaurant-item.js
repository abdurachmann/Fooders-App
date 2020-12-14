/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card-recomend">
                <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}" tabindex="0">
                
                <div class="city-recomend" tabindex="0">
                    <h3><i class="fas fa-map-marker-alt"></i>&nbsp; ${this._restaurant.city}</h3>
                </div>

                <div class="desc-recomend">
                    <h3 tabindex="0"><i class="fas fa-star"></i>${this._restaurant.rating}</h3>
                    <h3 tabindex="0" class="restaurant-title"><i class="fas fa-utensils" style="color: #7d0633"></i> ${this._restaurant.name}</h3>
                    <p tabindex="0">Open at 10.00 AM</p>
                    <p tabindex="0">${this._restaurant.description.substring(0, 100)}</p>
                    
                    <form method="GET" action="${`/#/detail/${this._restaurant.id}`}">
                        <button class="button"><span>Show Detail </span></button>
                    </form>
                </div>
            </div>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);