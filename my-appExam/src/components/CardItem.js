// @ts-nocheck
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import React, { useContext, useState } from 'react';

import Context from '../Context';

import { ToggleStateEdit, ToggleStateDesc } from './AllToggles';


function CardItem({ id, card, editCard }) {
    const [isEditing, toggleEditForm] = ToggleStateEdit(false);
    const [isDescription, toggleDescription] = ToggleStateDesc(false);
    const [inputPicture, updateInputPicture] = useState(card.picture);
    const [inputName, updateInputName] = useState(card.name);
    const [inputArticle, updateInputArticle] = useState(card.article);
    const [inputCount, updateInputCount] = useState(card.count);
    const [inputPrice, updateInputPrice] = useState(card.price);
    const { removeCard } = useContext(Context);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let splitInputArticle = inputArticle.split('');

    function submitHandler(event) {
        event.preventDefault();
        editCard(id, inputName, inputArticle, inputCount, inputPrice, inputPicture, today, dd, mm, yyyy,);
        toggleEditForm();
    };

    const classNamePriceSegmentWrapper = card.priceSegment === 'cheap' ? 'card-item-wrapper__border-color_gray' :
        card.priceSegment === 'optimal' ? 'card-item-wrapper__border-color_green' :
            card.priceSegment === 'premium' ? 'card-item-wrapper__border-color_yellow' : null

    const classNameIsEditingInputArticle = splitInputArticle[0] > 'Z' || isNaN(splitInputArticle[1]) || isNaN(splitInputArticle[2]) ?
        'edit-input-validation' : 'card-item-input_width-130px'

    const classNameCardItemCount = card.count === '1' || inputCount === '1' ? 'card-item__count-color-text-last-one__red' : null;

    const classNameCardItemImgWrapper = card.priceSegment === 'cheap' ? 'card-item-wrapper__img-style_gray' :
        card.priceSegment === 'optimal' ? 'card-item-wrapper__img-style_green' :
            card.priceSegment === 'premium' ? 'card-item-wrapper__img-style_yellow' : 'card-item-wrapper__img-style';

    const cardPicture = card.picture ?
        <div className='card-item__block-margin'><img className={classNameCardItemImgWrapper} src={card.picture} alt=''></img>
        </div>
        :
        <div className='card-item__block-margin'><img className={classNameCardItemImgWrapper} src={'https://i.ibb.co/1dzHH7k/photoeditorsdk-export.png'} alt=''></img>
        </div>

    const cardDescription =
        <div className='card-item-wrapper__description' >
            <div className='card-item-wrapper__description-text'>{card.description}</div>
            <div className='card-item__button-description'>
                <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                    onClick={toggleDescription}>Hide description
                </Button>
            </div>
        </div>

    const cardItem =
        <>
            <div className='card-item-wrapper'>
                {cardPicture}
                <div>{'Name: ' + card.name}</div>
                <div>{'Article: ' + card.article}</div>
                <div className={classNameCardItemCount} >
                    {'Count: '} {card.count === '1' || inputCount === '1' ? 'LAST ONE' : card.count}
                </div>
                <div>{'Price: ' + card.price}</div>
                <div>{'Date: ' + card.creationDate}</div>
            </div>
            &nbsp;
            <div className="card-item__buttons">
                <Button
                    startIcon={<EditIcon />}
                    color="primary"
                    variant="outlined"
                    onClick={toggleEditForm}>
                </Button>

                {card.description === '' ? null :
                    <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        onClick={toggleDescription}>Description
                    </Button>}
            </div>
        </>

    const cardEdit = <div className='card-item-wrapper' >

        {cardPicture}

        <form onSubmit={submitHandler} >

            <div className='card-item-input-wrap'>
                {'Picture: '}
                <input className='card-item-input_width-130px'
                    value={inputPicture}
                    onChange={event => { updateInputPicture(event.target.value) }}
                />
            </div>

            <div className='card-item-input-wrap'>
                {'Name: '}
                <input className={inputName.length < 5 ? 'edit-input-validation' : 'card-item-input_width-130px'}
                    value={inputName}
                    minLength='5'
                    required
                    onChange={event => { updateInputName(event.target.value) }}
                />
            </div>

            <div className='card-item-input-wrap'>
                {'Article: '}
                <input
                    className={classNameIsEditingInputArticle}
                    value={inputArticle}
                    minLength='3'
                    required
                    pattern='[A-ZА-Я]{1}[0-9]{2,}'
                    onChange={event => { updateInputArticle(event.target.value) }}
                />
            </div>

            <div className='card-item-input-wrap'>
                {'Count: '}
                <input
                    className='card-item-input_width-130px'
                    type='number'
                    value={inputCount}
                    min='1'
                    onChange={event => { updateInputCount(event.target.value) }}
                />
            </div>

            <div className='card-item-input-wrap'>
                {'Price: '}
                <input
                    className='card-item-input_width-130px'
                    type='number'
                    min='1'
                    value={inputPrice}
                    onChange={event => { updateInputPrice(event.target.value) }}
                />
            </div>

            <div className="card-item__edit-buttons-wrap">
                <Button
                    size="small"
                    type='submit'
                    color="primary"
                    variant="outlined"
                >Save</Button>
                <Button
                    startIcon={<DeleteIcon />} size="small" color="secondary" variant="outlined"
                    onClick={() => removeCard(card.id)}
                ></Button>
            </div>
        </form>
    </div>

    return (
        <div className={classNamePriceSegmentWrapper}>
            {isEditing ? cardEdit :
                isDescription ? cardDescription : cardItem}
        </div >
    )
};

export default CardItem;
