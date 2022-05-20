import React, {useEffect, useState} from 'react'

import { IItem } from "./Item";
import { ItemCard } from "./ItemCard";
 
export function ItemContainer(props: {containerName:string, itemCards: IItem[], refreshMethod: () => Promise<IItem[]>}) {
    const [items, setItems] = useState(props.itemCards);

    useEffect(() => {
        props.refreshMethod()
        .then(res => setItems(res))
    }, [props.refreshMethod, props.itemCards])

    return <div>
        <h2>{props.containerName}</h2>
        <div className='category-container'>
            {items.map(item => <ItemCard key={item.href} item={item}/>)}
        </div>
    </div>
}