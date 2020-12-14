/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import CONFIG from '../../globals/config';
import CustomerReviewInitiator from '../../utils/customer-review-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

class DetailRestaurant extends HTMLElement {
    set detail(detail) {
        this._detail = detail;
        this.render();
        this.reviewInitiator();
        this.likeButtonPresenter();
    }

    reviewInitiator() {
        CustomerReviewInitiator.init({
            consumerReview: this.querySelector('#restaurant-consumer-review'),
            listConsumerReviews: this.querySelector('#restaurant-list-reviews'),
        });
    }

    async likeButtonPresenter() {
        await LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            notification: document.querySelector('#notif-favorite-container'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: this._detail,
        });
    }

    render() {
        this.innerHTML = `
            <div class="restaurant_poster_container">
                <img class="restaurant_poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + this._detail.pictureId}" alt="${this._detail.name}" />
                <div id="likeButtonContainer"></div>
            </div>

            <div class="restaurant_info">
                <h2 class="restaurant_name">${this._detail.name}</h2>
                <div class="restaurant_address_rating">
                    <ul>
                        <li>
                            <p class="restaurant_address">
                                <i class="fas fa-map-marker-alt fa-lg"></i>
                                ${this._detail.address}, ${this._detail.city}
                            </p>
                        </li>
        
                        <li>
                            <p class="restaurant_rating">
                                <i class="fas fa-star fa-lg"></i>
                                Rating ${this._detail.rating}
                            </p>
                        </li>
                    </ul>
                </div>
        
                <div class="restaurant_description">
                    <h3>Description</h3>
                    <p>${this._detail.description.substring(0, 500)}...</p>
                </div>
            </div>
        
            <div class="category_menus_review">
                <div id="restaurant_category">
                    <h3>Category</h3>
                    ${this._detail.categories.map(
                        (category) => `
                        <span>${category.name}</span>
                        `,
                    )}
                </div>
        
                <div id="restaurants_menus">
                    <h3><i class="fas fa-utensils"></i> Menus <i class="fas fa-utensils"></i></h3>
                    <div class="restaurants_menus_wrapper">
                        <div class="restaurants_menus_category" id="restaurants_menu_foods"> 
                            <h4>Foods:</h4>
                            <ul>
                                ${this._detail.menus.foods.map((food) => `
                                    <li>${food.name}</li>
                                    `).join('')}
                            </ul>
                        </div>
        
                        <div class="restaurants_menus_category" id="restaurants_menu_drinks"> 
                            <h4>Drinks:</h4>
                            <ul>
                                ${this._detail.menus.drinks.map((drink) => `
                                    <li>${drink.name}</li>
                                    `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
        
                <div id="restaurant_customer_reviews">
                    <h3>
                        <i class="fas fa-comment-dots"></i>
                        Customer Reviews
                        <i class="fas fa-comment-dots"></i>
                    </h3>
                    <div class="restaurant_list_reviews" id="restaurant-list-reviews">
                        ${this._detail.customerReviews.map((customerReview) => `
                            <div class="restaurant-reviews">
                                <h4><i class="fas fa-user fa-2x"></i> ${customerReview.name}
                                    <span class="restaurant_reviews_date">${customerReview.date}</span>
                                </h4>
                                <p class="restaurant_review_list">${customerReview.review}</p>
                            </div>
                        `).join('')}
                    </div>
        
                    <div class="add_restaurant_review">
                        <form id="restaurant-consumer-review" class="restaurant-consumer-review">
                            <input type="hidden" name="id" value="${this._detail.id}">

                            <div>
                                <label for="consumer_name">Name</label>
                                <input type="text" id="consumer_name" name="consumer_name" placeholder="Your name..">
                            </div>
                            
                            <label for="consumer_review">Review</label>
                            <div>
                                <textarea id="consumer_review" name="consumer_review" placeholder="Review.."></textarea>
                            </div>

                            <button type="submit" id="add_review_button" class="add_review_button">Add Review</button>
                        </form>
                    </div>
                </div>

                <div id="notif-favorite-container" class="notif-favorite-container"></div>
            </div>
        `;
    }
}

customElements.define('detail-restaurant', DetailRestaurant);