// @ts-nocheck
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { ToggleStateAdd } from './AllToggles';

function AddCard({ onCreate, id }) {
    const [picture, setPicture] = useState('');
    const [name, setName] = useState('');
    const [article, setArticle] = useState('');
    const [count, setCount] = useState('');
    const [price, setPrice] = useState('');
    const [creationDate, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [priceSegment, setPriceSegment] = useState('');
    const [isAdd, toggleAddForm] = ToggleStateAdd(false);

    function submitHandler(event) {
        event.preventDefault();
        toggleAddForm();
        setName('');
        setArticle('');
        setCount('');
        setPrice('');
        setDate('');
        setDescription('');
        setPicture('');
        setPriceSegment('');
        onCreate(id, name, article, count, price, creationDate, priceSegment, description, picture);
    };

    const handlePriceSegment = (event) => {
        setPriceSegment(event.target.value);
    };

    let splitArticleInput = article.split('');

    const classNameIsAddMainInformationBlockWrapper = name === '' || name.length < 5 || article === '' || count === '' || price === '' || creationDate === '' ||
        splitArticleInput[0] > 'Z' || isNaN(splitArticleInput[1]) || isNaN(splitArticleInput[2]) ?
        'add-card-form-wrap-walidation' : 'add-card-form-wrap-walidation-success'

    const classNameIsAddMainInformationArticleInput = splitArticleInput[0] > 'Z' || isNaN(splitArticleInput[1]) || isNaN(splitArticleInput[2]) ?
        'add-card__input-validation' : 'add-card__input-validation-success'

    const classNameIsAddPriceSegmentBlockWrapper = priceSegment === 'cheap' || priceSegment === 'optimal' || priceSegment === 'premium' ?
        'price-segment-block-wrapper-walidation' : 'price-segment-block-wrapper'

    const classNameIsAddSecondaryInformationBlockWrapper = description !== '' || picture !== '' ?
        'secondary-information-block-wrapper-validation' : 'secondary-information-block-wrapper'

    const classNameIsPicture = picture === '' ?
        'secondary-information-block__input' : 'secondary-information-block__input-validation'

    const classNameDescription = description === '' ? 'secondary-information-block__texteria' : 'secondary-information-block__texteria-validation'

    return (
        <>
            {isAdd ?
                <form onSubmit={submitHandler}>

                    <div>
                        <Button
                            className='add-card__button-submit_width-300px'
                            variant='outlined'
                            type='submit'
                            color="secondary"
                            onClick={toggleAddForm}
                        >Hide a form to add card
                        </Button>
                    </div>

                    <div className={classNameIsAddMainInformationBlockWrapper}>
                        <b>Main information</b>
                        <hr></hr>

                        {name.length < 5 ?
                            <label className='add-card__label-input-validation' htmlFor='name'>Name</label> :
                            <label className='add-card__label-input-validation-success' htmlFor='name'>Name</label>}
                        <input
                            className={name.length < 5 ? 'add-card__input-validation' : 'add-card__input-validation-success'}
                            type="text"
                            id='name'
                            minLength='5'
                            required
                            value={name}
                            placeholder='The name must include at least five characters'
                            onChange={event => setName(event.target.value)}
                        />

                        {splitArticleInput[0] > 'Z' || isNaN(splitArticleInput[1]) || isNaN(splitArticleInput[2]) ?
                            <label className='add-card__label-input-validation' htmlFor='article' > Article</label> :
                            <label className='add-card__label-input-validation-success' htmlFor='article'>Article</label>}
                        <input
                            className={classNameIsAddMainInformationArticleInput}
                            id='article'
                            minLength='3'
                            required
                            value={article}
                            placeholder='A12'
                            pattern='[A-ZА-Я]{1}[0-9]{2,}'
                            onChange={event => setArticle(event.target.value)}
                        />

                        {count === '' ?
                            <label className='add-card__label-input-validation' htmlFor='count'>Count</label> :
                            <label className='add-card__label-input-validation-success' htmlFor='count'>Count</label>}
                        <input
                            className={count === '' ? 'add-card__input-validation' : 'add-card__input-validation-success'}
                            type="number"
                            id='count'
                            required
                            value={count}
                            min='1'
                            placeholder='Add count'
                            onChange={event => setCount(event.target.value)}
                        />

                        {price === '' ?
                            <label className='add-card__label-input-validation' htmlFor='price'>Price</label> :
                            <label className='add-card__label-input-validation-success' htmlFor='price'>Price</label>}
                        <input
                            className={price === '' ? 'add-card__input-validation' : 'add-card__input-validation-success'}
                            type="number"
                            id='price'
                            required
                            value={price}
                            min='1'
                            placeholder='Add price'
                            onChange={event => setPrice(event.target.value)}
                        />

                        {creationDate === '' ?
                            <label className='add-card__label-input-validation' htmlFor='date'>Date</label> :
                            <label className='add-card__label-input-validation-success' htmlFor='date'>Date</label>}
                        <input
                            className={creationDate === '' ? 'add-card__input-validation' : 'add-card__input-validation-success'}
                            type='date'
                            id='date'
                            required
                            value={creationDate}
                            onChange={event => setDate(event.target.value)}
                        />
                    </div>

                    <div className={classNameIsAddPriceSegmentBlockWrapper}><b>Price segment</b>
                        <hr></hr>
                        <div className='price-segment-block__inner-wrapper'>

                            <div >
                                <label
                                    className='price-segment-block__radio-cheap-color'
                                    htmlFor='cheap'>
                                    Cheap
                                </label>

                                <input
                                    name='segment'
                                    required
                                    type="radio"
                                    id='cheap'
                                    value='cheap'
                                    onChange={handlePriceSegment}
                                />
                            </div>

                            <div>
                                <label
                                    className='price-segment-block__radio-optimal-color'
                                    htmlFor='optimal'>
                                    Optimal
                                </label>

                                <input
                                    name='segment'
                                    required
                                    type="radio"
                                    id='optimal'
                                    value='optimal'
                                    onChange={handlePriceSegment}
                                />
                            </div>

                            <div>
                                <label className='price-segment-block__radio-premiuml-color'
                                    htmlFor='premium'>
                                    Premium
                                </label>

                                <input
                                    name='segment'
                                    required
                                    type="radio"
                                    id='premium'
                                    value='premium'
                                    onChange={handlePriceSegment}
                                />
                            </div>

                        </div>

                    </div>

                    <div className={classNameIsAddSecondaryInformationBlockWrapper}><b>Secondary information</b>
                        <hr></hr>

                        <label className='secondary-information-block__label-input'
                            htmlFor='pictureID'>Picture</label>
                        <input
                            className={classNameIsPicture}
                            id='pictureID'
                            value={picture}
                            placeholder='https://clck.ru/Naesg'
                            onChange={event => setPicture(event.target.value)}
                        />

                        <label className='secondary-information-block__label-input' htmlFor='description'>Description</label>
                        <textarea
                            className={classNameDescription}
                            id='description'
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        ></textarea>

                    </div>

                    <p>
                        <Button
                            className='add-card__button-submit_width-300px'
                            variant='outlined'
                            type='submit'
                            color="primary"
                        >Add card
                        </Button>
                    </p>
                </form>
                :
                <>
                    <p>
                        <Button
                            className='add-card__button-submit_width-300px'
                            variant='outlined'
                            type='submit'
                            color="primary"
                            onClick={toggleAddForm}
                        >Add card
                        </Button>
                    </p >
                </>
            }
        </>
    )
}

export default AddCard;
