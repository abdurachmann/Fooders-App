class EmptyFavoriteElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="empty-favorite">
                <img class="lazyload" data-src="./images/empty-logo-large.jpg" 
                    srcset="/images/empty-logo-small.jpg 480w, /images/empty-logo-large.jpg 800w"
                    sizes="(max-width: 600px) 480px, 800px"    
                    alt="empty-logo">
                <h3>Oops!!</h3>
                <p class="empty-favorite-paragraph">Its empty in here.</p>
            </div>
        `;
    }
}

customElements.define('empty-favorite-element', EmptyFavoriteElement);