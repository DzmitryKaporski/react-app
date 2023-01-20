import CardItem from './CardItem';
import React from 'react';

function CardsList(props) {
    return (
        <div className='card-list-wrapper'>
            {props.cards.map((card) => {
                return (
                    <CardItem
                        id={card.id}
                        card={card}
                        key={card.id}
                        editCard={props.editCard}
                    />
                )
            })}
        </div>
    )
}

export default CardsList;
