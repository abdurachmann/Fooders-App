class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav>
                <ul class="navigation" tabindex="0">
                    <li class="brand">
                        <h1>Fooders Apps</h1>
                    </li>
                    <li class="menu-nav">
                        <a href="#/home">Home</a>
                    </li>
                    <li class="menu-nav">
                        <a href="#/favorite">Favorite</a>
                    </li>
                    <li class="menu-nav">
                        <a href="https://github.com/abdurachmann" target="_blank" rel="noreferrer">About Us</a>
                    </li>
                    <li class="btn">
                        <button aria-label="humburger button">
                            <i class="fas fa-bars" id="hamburgerButton"></i>
                        </button>
                    </li>
                </ul>
            </nav>

            <div class="jumbotron">
                <div class="wrapper">
                    <div class="text-hero" tabindex="0">
                        <h1>Fooders!</h1>
                        <p lang="id" translate="no">The Best Of Restaurants</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);