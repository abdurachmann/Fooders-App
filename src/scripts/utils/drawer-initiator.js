/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
    init({ button, drawer, listMenu, content }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer, listMenu);
        });
        content.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer, listMenu);
        });
    },

    _toggleDrawer(event, drawer, listMenu) {
        event.stopPropagation();
        for (let index = 0; index < drawer.length; index += 1) {
            drawer[index].classList.toggle('open');
        }
        listMenu.classList.toggle('hide');
    },

    _closeDrawer(event, drawer, listMenu) {
        event.stopPropagation();
        for (let index = 0; index < drawer.length; index += 1) {
            drawer[index].classList.remove('open');
        }
        listMenu.classList.remove('hide');
    },
};

export default DrawerInitiator;