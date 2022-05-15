import { ItemCard } from "./ItemCard.js";

export class ItemList {

    name: string;
    items: ItemCard[];

    constructor(name:string, items: ItemCard[]) {
        this.name = name;
        this.items = items;
    }

    render(): DocumentFragment {
        let fragment = document.createDocumentFragment();

        let h2 = document.createElement('h2');
        h2.textContent = this.name;
        fragment.appendChild(h2);

        let div = document.createElement('div');
        div.classList.add('category-container');
        this.items.forEach(item => div.appendChild(item.render()));
        fragment.appendChild(div);

        return fragment;
    }
}