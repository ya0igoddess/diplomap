export class ItemCard {
    private itemName:string
    private aritstNames:string[]
    private imgUrl:string
    private href:string


    constructor(itemName: string, artistNames: string[], imgUrl: string, href:string) {
        this.itemName = itemName;
        this.aritstNames = artistNames;
        this.imgUrl = imgUrl;
        this.href = href
    }

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