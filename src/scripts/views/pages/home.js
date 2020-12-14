/* eslint-disable no-return-assign */
import '../component/restaurant-list';
import '../component/connection-failed';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createLoaderTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="container">
                <div class="recomend">
                    <div>
                        <h2 tabindex="0">Restaurant Recommendations</h2>
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
            const restaurantList = document.querySelector('restaurant-list');
            const restaurants = await TheRestaurantDbSource.home();
            restaurantList.restaurants = restaurants.restaurants;
            createLoaderTemplate.remove();
        } catch (error) {
            const container = document.querySelector('.container');
            container.remove();
            const mainContent = document.querySelector('#mainContent');
            mainContent.innerHTML = '<connection-failed></connection-failed>';
        }
    },
};

export default Home;