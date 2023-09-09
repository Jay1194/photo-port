import React from 'react';
// capitalizeFirstLetter() helper function to capitalize the name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers'
// import jpg
import photo from "../../assets/small/commercial/0.jpg"

function Gallery(props) {
    // it gets the name and description from an object, rather than from hardcoded placeholder values
        const currentCategory = {
            name: "comercial",
            description:
            "photos of gocery stores, food trucks, and other commercial projects",
        };
    
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{ currentCategory.name }</p>
            <div className="flex-row">
                <img
                src={photo}
                alt="Comercial Example"
                classsName="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;