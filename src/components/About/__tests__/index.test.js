//need react to enable the components to function properly so we can test them
import React from 'react';
//  retrieve functions from the React Testing Library
import { render, cleanup } from '@testing-library/react';
// access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
//import the component we will be testing
import About from '..';


//ensure that after each test, we won't have any leftover memory data that could give us false results.
    afterEach(cleanup);

// use the describe function to declare the component we're testing
describe('About component', () => {
    
    // First Test (verify that the component is rendering without errors) first argument, a string declares what is being tested.
    it('renders', () => {
        //second argument, a callback function runs the test
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        //returns a snapshot of the About component
        const{ asFragment } = render(<About />);
        //use the toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    });
})

/* Inside the test function, render(<About />); is used to render the "About" component
, and asFragment() is called to get a representation of the rendered component. 
Then, the toMatchSnapshot() matcher is used to assert that the current rendering 
matches the stored snapshot.*/