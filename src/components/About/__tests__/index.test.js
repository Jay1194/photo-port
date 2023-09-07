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
    
    // First Test
    it('renders', () => {
    render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        const{ asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})
