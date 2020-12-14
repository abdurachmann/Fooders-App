/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class TheRestaurantDbSource {
    static async home() {
        try {
            const response = await fetch(API_ENDPOINT.HOME);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            // return error;
            console.log(error);
        }
    }

    static async detail(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async addConsumerReview(review) {
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': CONFIG.KEY,
            },
            body: JSON.stringify(review),
        });
        const responseJson = await response.json();
        return responseJson;
    }
}

export default TheRestaurantDbSource;