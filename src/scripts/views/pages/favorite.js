/* eslint-disable no-return-assign */
import '../component/restaurant-list';
import '../component/empty-favorite-element';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createLoaderTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="container" id="container-favorite">
                <div class="recomend">
                    <div>
                        <h2 tabindex="0">Restaurant Favorited</h2>
                    </div>
                </div>

                ${document.querySelector('#mainContent').innerHTML = createLoaderTemplate.show()}
                <div id="list-restaurant">
                    <restaurant-list></restaurant-list>
                </div>
            </div>
        `;
    },

    async afterRender() {
        try {
            const mainContent = document.getElementById('mainContent');
            const restaurantList = document.querySelector('restaurant-list');
            const restaurantsFavorite = await FavoriteRestaurantIdb.getAllRestaurants();
            if (restaurantsFavorite.length > 0) {
                restaurantList.restaurants = restaurantsFavorite;
            } else {
                mainContent.innerHTML = '<empty-favorite-element></empty-favorite-element>';
            }
            createLoaderTemplate.remove();
        } catch (error) {
            console.log(error);
        }
    },
};

export default Favorite;