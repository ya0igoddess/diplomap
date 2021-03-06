import { Item } from "./Item";

/**
 * Класс-контейнер для карточек
 */
export class ItemList {

    name: string;
    items: Item[];

    /**
     * @constructor
     * @param name {} - Заголовок раздела-контейнера
     * @param items {Item[]} - Набор карточек в контейнере
     */
    constructor(name:string, items: Item[]) {
        this.name = name;
        this.items = items;
    }

    /**
     * Отрисовка контейнера
     * @returns {DocumentFragment} - Фрагмент с версткой контейнера
     */
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