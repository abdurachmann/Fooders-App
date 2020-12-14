import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelectorAll('.menu-nav'),
    content: document.querySelector('#mainContent'),
    listMenu: document.querySelector('nav ul li.btn'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});