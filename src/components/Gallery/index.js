import React from 'react';
// capitalizeFirstLetter() helper function to capitalize the name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers'
// import function
import PhotoList from '../PhotoList';

function Gallery(props) {
    // it gets the name and description from an object, rather than from hardcoded placeholder values
    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{ currentCategory.description }</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;