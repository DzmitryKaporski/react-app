// @ts-nocheck
import Button from '@material-ui/core/Button';
import React from 'react';
import { ToggleStateSearch } from './AllToggles';

function SearchFilterSort({ sortCards, filterCardsPremium, filterCardsOptimal, filterCardsCheap, getCard }) {

    const [isSearch, toggleSearch] = ToggleStateSearch(false);

    const handlerInput = (event) => {
        getCard(event.target.value);
    };

    const handleSortSegment = (event) => {
        sortCards(event.target.value);
    };

    const handleFilterCheap = (event) => {
        filterCardsCheap(event.target.checked);
    };

    const handleFilterOptimal = (event) => {
        filterCardsOptimal(event.target.checked);
    };

    const handleFilterPremium = (event) => {
        filterCardsPremium(event.target.checked);
    };

    return (
        <>
            {isSearch ?
                <>
                    <p>
                        <Button
                            className='search-filter-sort__button_width-300px'
                            variant='outlined'
                            type='submit'
                            color="secondary"
                            onClick={toggleSearch}
                        >Hide search form card</Button>
                    </p>

                    <form className='search-price-block-wrapper'><b>Search</b>
                        <hr></hr>
                        <div>
                            <label className='add-card__search-label-input' htmlFor='search'>Search</label>
                            <input
                                className='add-card__input'
                                id="search"
                                name="search"
                                type="text"
                                onInput={handlerInput}
                                placeholder='Enter a value to search for'
                            />
                        </div>
                    </form>

                    <legend className='filter-price-block-wrapper'><b>Filter by price segment</b>
                        <hr></hr>
                        <div>
                            <form className='filter-price-block__inner-wrapper'>
                                <div>
                                    <label
                                        className='filter-price-block__checkbox-cheap-color_toggle'
                                        htmlFor='cheapCheckbox'>
                                        Cheap
                                    </label>
                                    <input
                                        type='Checkbox'
                                        id='cheapCheckbox'
                                        name='cheap'
                                        value='filterCheap'
                                        defaultChecked={'filterCheap'}
                                        onChange={handleFilterCheap}
                                    />
                                </div>
                                <div>
                                    <label
                                        className='filter-price-block__checkbox-optimal-color_toggle'
                                        htmlFor='optimalCheckbox'>
                                        Optimal
                                    </label>
                                    <input
                                        type='Checkbox'
                                        id='optimalCheckbox'
                                        name='optimal'
                                        value='filterOptimal'
                                        defaultChecked={'filterOptimal'}
                                        onChange={handleFilterOptimal}
                                    />
                                </div>
                                <div>
                                    <label
                                        className='filter-price-block__checkbox-premium-color_toggle'
                                        htmlFor='premiumCheckbox'>
                                        Premium
                                    </label>
                                    <input
                                        type='Checkbox'
                                        id='premiumCheckbox'
                                        name='premium'
                                        value='filterPremium '
                                        defaultChecked={'filterPremium'}
                                        onChange={handleFilterPremium}
                                    />
                                </div>
                            </form>
                        </div>
                    </legend>

                    <legend className='sort-by-block-wrapper'><b>Sort by</b>
                        <hr></hr>
                        <div>
                            <form className='sort-by-block__radio-wrapper'>
                                <div>
                                    <label className='sort-by-block__radio-label-color' htmlFor='alphabet'>Alphabet</label>
                                    <input
                                        type="radio"
                                        id='alphabet'
                                        name='searchSegment'
                                        value='alphabet'
                                        defaultChecked={'alphabet'}
                                        onChange={handleSortSegment}
                                    />
                                </div>
                                <div>
                                    <label className='sort-by-block__radio-label-color' htmlFor='price'>Price</label>
                                    <input
                                        type="radio"
                                        id='price'
                                        name='searchSegment'
                                        value='price'
                                        onChange={handleSortSegment}
                                    />
                                </div>
                                <div>
                                    <label className='sort-by-block__radio-label-color' htmlFor='count'>Count</label>
                                    <input
                                        type="radio"
                                        id='count'
                                        name='searchSegment'
                                        value='count'
                                        onChange={handleSortSegment}
                                    />
                                </div>
                                <div>
                                    <label className='sort-by-block__radio-label-color' htmlFor='date'>Date</label>
                                    <input
                                        type="radio"
                                        id='date'
                                        name='searchSegment'
                                        value='date'
                                        onChange={handleSortSegment}
                                    />
                                </div>
                            </form>
                        </div>
                    </legend>
                </> :
                <p>
                    <Button
                        className='search-filter-sort__button_width-300px'
                        variant='outlined'
                        type='submit'
                        color="primary"
                        onClick={toggleSearch}
                    >Search - Filter - Sort cards
                    </Button>
                </p>
            }
        </>
    )
}

export default SearchFilterSort;
