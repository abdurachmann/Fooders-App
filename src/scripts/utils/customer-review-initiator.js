/* eslint-disable no-restricted-syntax */
import TheRestaurantDbSource from '../data/therestaurantdb-source';
import { createCustomerReviewTemplate } from '../views/templates/template-creator';

const CustomerReviewInitiator = {
    init({ consumerReview, listConsumerReviews }) {
        consumerReview.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validateDataReview(consumerReview, listConsumerReviews);
        });
    },

    setDataReview(consumerReview) {
        const data = new FormData(consumerReview);
        const dataConsumerReview = {};
        for (const key of data.keys()) {
            dataConsumerReview[key] = data.get(key);
        }
        return dataConsumerReview;
    },

    validateDataReview(consumerReview, listConsumerReviews) {
        const data = this.setDataReview(consumerReview);
        const newData = {
            consumer_name: 'name',
            consumer_review: 'review',
        };
        const renameData = this.renameKeys(data, newData);
        const error = {
            status: false,
            keys: [],
        };

        for (const key in renameData) {
            if (renameData[key] === '') {
                error.status = true;
                error.keys.push(key);
            }
        }

        if (error.status === false) {
            this.sendDataReview({
                data: renameData,
                consumerReview,
                listConsumerReviews,
            });
        } else {
            this.errorHandler(error, consumerReview);
        }
    },

    errorHandler(error, consumerReview) {
        consumerReview.querySelectorAll('p').forEach((elem) => {
            elem.remove();
        });

        error.keys.forEach((key) => {
            const element = document.querySelector(`#consumer_${key}`);
            const errorElement = document.createElement('p');
            errorElement.setAttribute('class', 'field-required');
            errorElement.innerText = `*The ${this.capitalizeFirstLetter(key.substring(9))} field is required`;
            element.after(errorElement);
        });
    },

    renameKeys(oldKeys, newKeys) {
        const keyValues = Object.keys(oldKeys).map((key) => {
            const newKey = newKeys[key] || key;
            return { [newKey]: oldKeys[key] };
        });
        return Object.assign({}, ...keyValues);
    },

    capitalizeFirstLetter(key) {
        return key.charAt(0).toUpperCase() + key.slice(1);
    },

    successHandler(consumerReview) {
        const formElement = consumerReview;
        formElement.querySelectorAll('p').forEach((elem) => {
            elem.remove();
        });

        const messageElement = document.createElement('div');
        messageElement.classList.add('success-message');
        messageElement.innerHTML = '<p>review submitted successfully</p>';
        formElement.prepend(messageElement);
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    },

    async sendDataReview({ data, consumerReview, listConsumerReviews }) {
        try {
            const response = await TheRestaurantDbSource.addConsumerReview(data);
            this.successHandler(consumerReview);
            listConsumerReviews.appendChild(createCustomerReviewTemplate(response));
            location.reload();
        } catch (error) {
            console.log(error);
        }
    },
};

export default CustomerReviewInitiator;