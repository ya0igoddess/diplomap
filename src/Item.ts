
export interface IItem {
    itemName:string
    aritstNames:string[]
    imgUrl:string
    href:string
}

/**
 * Класс карточки-элемента для коллекции
 */ 
export class Item {
    itemName:string
    aritstNames:string[]
    imgUrl:string
    href:string

    /**
     * @constructor
     * @param itemName - Название трека/альбома
     * @param artistNames - Массив с именами авторов
     * @param imgUrl - URL обложки
     * @param href - Ссылка на трек на официальный сайт
     */
    constructor(itemName: string, artistNames: string[], imgUrl: string, href:string) {
        this.itemName = itemName;
        this.aritstNames = artistNames;
        this.imgUrl = imgUrl;
        this.href = href
    }

    /**
     * Отрисовка карточки
     * @returns {HTMLElement} Верстка карточки
     */
    public render(): HTMLElement {
        let div = document.createElement('div');
        div.classList.add('item-card');
        let aEl = document.createElement('a');
        aEl.setAttribute('src',this.href);
        
        let img = document.createElement('img');
        img.setAttribute('src', this.imgUrl);
        img.classList.add('item-card-img');
        aEl.appendChild(img);

        let nameP = document.createElement('p');
        nameP.textContent = this.itemName;
        aEl.appendChild(nameP);

        let artistP = document.createElement('p');
        artistP.textContent = this.aritstNames.reduce((prev, cur) => prev+= (cur+', '), '').slice(0,-2);
        aEl.appendChild(artistP);
        
        div.appendChild(aEl);
        return div;
    }
}