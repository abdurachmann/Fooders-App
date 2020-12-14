class ConnectionFailed extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="connection_failed">
                <img class="lazyload" data-src="./images/image-disconnected-large.jpg"
                    srcset="./images/image-disconnected-small.jpg 480w, ./images/image-disconnected-large.jpg 800w"
                    sizes="(max-width: 600px) 480px, 800px"
                alt="connection-failed">
                <h3>Error: Connection Timed Out</h3>
            </div>
        `;
    }
}

customElements.define('connection-failed', ConnectionFailed);