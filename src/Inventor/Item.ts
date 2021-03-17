import ItemInterface from './Interfaces/ItemInterface';

export default class Item {
    data: ItemInterface;

    constructor(
        data: ItemInterface
    ) {
        this.data = data;
    }
}