import React from 'react';
import {Card} from '../card/card.component'
import './card-list.component.scss'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => 
                <Card key={monster.id} monster={monster}></Card>
            )}
        </div>
    )
}