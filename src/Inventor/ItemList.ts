import ItemInterface from './Interfaces/ItemInterface';
import md5 from 'md5';

export const itemApple: ItemInterface = {
    name: 'Obuolys',
    name_hash: md5('obuolys'),
    amount: 2,
    size: 100,
    stack: 1,
    use: function () {
        console.log("Minus before", this.amount);
        this.amount --;
        console.log("Minus after", this.amount);
    }
};