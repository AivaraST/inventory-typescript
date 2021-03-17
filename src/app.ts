import Inventor from './Inventor/Inventor';
import {itemApple} from './Inventor/ItemList';

(() => {
    const inventor = new Inventor();
    inventor.show();
    inventor.add(itemApple);
    inventor.show();
    if(typeof inventor.items[0].data.use == 'function') inventor.items[0].data.use();
    inventor.show();
})();