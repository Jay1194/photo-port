import React, { useEffect} from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"

//passed props fom app.js lifted state (New props also cause components to re-render)
const Nav = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    
    // we can use the useEffect Hook by invoking the function (Assign the DOM node in the function body of the callback function)
    useEffect(() => {
        //the first argument is the callback function
        document.title = capitalizeFirstLetter(currentCategory.name);
        //The second argument directs the hook to re-render the component on changes to the value of this state. (if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.)
    }, [currentCategory]);

    return(
    <header className='flex-row px-1'>
        <h2>
            <a data-testid="link" href="/">
                <span role="img" aria-label="camera">
                    {" "} 
                    📸
                </span>{" "}
                Oh Snap!
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" 
                    href="#about"
                    >
                      About me
                    </a>
                </li>
                <li>
                  <span>Contact</span>
                </li>
                {categories.map((category) => (
                    <li className={`mx-1 ${
                        currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                    <span 
                        onClick={() => {
                            setCurrentCategory(category) 
                        }}
                    >
                        {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    );
}

export default Nav;