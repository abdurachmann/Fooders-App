/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-useless-path-segments */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../views/component/app-bar';
import '../views/component/footer-element';

class App {
    constructor({ button, drawer, listMenu, content }) {
        this._button = button;
        this._drawer = drawer;
        this._listMenu = listMenu;
        this._content = content;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            listMenu: this._listMenu,
            content: this._content,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;