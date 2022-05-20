import React from 'react';
import { IItem } from './Item';

export function ItemCard(props: {item: IItem}) {
    return <div className='item-card'>
        <a>
            <img src={props.item.imgUrl} className='item-card-img'/>
            <p>{props.item.itemName}</p>
            <p>{props.item.aritstNames.reduce((prev, cur) => prev+= (cur+', '), '').slice(0,-2)}</p>
        </a>
    </div>
}