const createLoaderTemplate = {
    show() {
        return `
            <div class="loader"></div>
        `;
    },
    remove() {
        document.querySelector('.loader').remove();
    },
};

const createCustomerReviewTemplate = (reviews) => {
    const customerReview = reviews.customerReviews[reviews.customerReviews.length - 1];

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('restaurant-reviews');
    reviewElement.innerHTML = `
        <h4><i class="fas fa-user fa-2x"></i> ${customerReview.name}
            <span class="restaurant_reviews_date">${customerReview.date}</span>
        </h4>
        <p>${customerReview.review}</p>    
    `;
    return reviewElement;
};

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like restaurant" id="likeButton" class="like">
        <i class="far fa-heart fa-2x" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fas fa-heart fa-2x" aria-hidden="true"></i>
    </button>
`;

const createFavoriteNotificationTemplate = {
    show() {
        return `
            <div class="alert-notif">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                <strong>Favorited</strong>
            </div>
        `;
    },

    remove() {
        setTimeout(() => {
            const notif = document.querySelector('.alert-notif');
            if (notif) {
                notif.remove();
            }
        }, 4000);
    },
};

const createUnfavoriteNotificationTemplate = {
    show() {
        return `
            <div class="alert-notif">
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
                <strong>Unfavorited</strong>
            </div>
        `;
    },

    remove() {
        setTimeout(() => {
            const notif = document.querySelector('.alert-notif');
            if (notif) {
                notif.remove();
            }
        }, 4000);
    },
};

export {
    createLoaderTemplate,
    createCustomerReviewTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
    createFavoriteNotificationTemplate,
    createUnfavoriteNotificationTemplate,
};