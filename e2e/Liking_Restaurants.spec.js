/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

const firstCondition = 'Its empty in here.';

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#mainContent');
    I.see(firstCondition, '.empty-favorite-paragraph');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see(firstCondition, '.empty-favorite-paragraph');

    I.amOnPage('/');

    I.seeElement('.button');
    const firstLocateRestaurant = locate('.button').first();
    const firstRestaurant = locate('.restaurant-title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstLocateRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-recomend');

    const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see(firstCondition, '.empty-favorite-paragraph');

    I.amOnPage('/');

    I.seeElement('.button');
    const firstLocateRestaurant = locate('.button').first();
    const firstRestaurant = locate('.restaurant-title').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstLocateRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-recomend');

    const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title');

    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

    // Unlike Restuarant
    I.click(firstLocateRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.empty-favorite-paragraph');

    const unFavoriteRestaurant = await I.grabTextFrom('.empty-favorite-paragraph');

    assert.strictEqual(unFavoriteRestaurant, firstCondition);
});

Scenario('add restaurant review', async ({ I }) => {
    I.see(firstCondition, '.empty-favorite-paragraph');

    I.amOnPage('/');

    I.seeElement('.button');
    I.click(locate('.button').first());

    I.seeElement('.restaurant-consumer-review');

    const consumerReview = 'Testing E2E';
    I.fillField('consumer_name', 'Abdu Rachman Ruchendar');
    I.fillField('consumer_review', consumerReview);

    I.click('#add_review_button');

    const lastReview = locate('.restaurant_review_list').last();
    const lastConsumerReview = await I.grabTextFrom(lastReview);

    assert.strictEqual(consumerReview, lastConsumerReview);
});
