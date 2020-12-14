/* eslint-disable no-return-assign */
import '../component/detail-restaurant';
import '../component/connection-failed';
import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createLoaderTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            ${document.querySelector('#mainContent').innerHTML = createLoaderTemplate.show()}
            <div id="detail_restaurant" class="detail_restaurant">
                <detail-restaurant></detail-restaurant> 
            </div>
        `;
    },

    async afterRender() {
        try {
            const url = UrlParser.parseActiveUrlWithoutCombiner();
            const restaurantData = await TheRestaurantDbSource.detail(url.id);
            const restaurantContainer = document.querySelector('detail-restaurant');

            restaurantContainer.detail = restaurantData.restaurant;
            createLoaderTemplate.remove();
        } catch (error) {
            const mainContent = document.querySelector('#mainContent');
            mainContent.innerHTML = '<connection-failed></connection-failed>';
        }
    },
};

export default Detail;