import Item from './Item';
import ItemInterface from './Interfaces/ItemInterface';

export default class Inventory {
    public items: Item[];

    constructor() {
        this.items = [];
    }

    show(): void {
        console.log(this.items);
    }

    add(item: ItemInterface): void {
        this.items.push(new Item(item));
    }

    truncate(): void {
        this.items = [];
    }
}