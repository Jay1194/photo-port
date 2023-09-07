import React from 'react';

// create objects that contain each category's name and a short description. That way, we can use that same data elsewhere in the app.
const categories = [
    {
        name: "commercial",
        description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    
    {    name: "portraits", description: "Portraits of people in my life" },
    {    name: "food", description: "Delicious delicacies" },
    {
        name:"landscape",
        description: "Fields, farmhouses, waterfalls, and the beuty of nature",
    },
];

// define onclick statement
function categorySelected(name) {
    //It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name)
    console.log(`${name} clicked`);
}

const Nav = () => {

    return(
    <header className='flex-row px-1'>
        <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about">
                        About me
                    </a>
                </li>
                <li>
                  <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li
                    className="mx-1"
                    key={category.name}
                    >
                        <span onClick={() => categorySelected(category.name)} >
                            {category.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    
    );
}

export default Nav;