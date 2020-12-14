class FooterElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="footer-content" tabindex="0">
                <div class="copyright">
                    <p>Copyright &copy; 2020 - Fooders Apps</p>
                </div>
            </div>
        `;
    }
}

customElements.define('footer-element', FooterElement);