import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

//describe function to declare what this test suite will be testing (checks for components rendering)
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

//test if the camera emoji is visible(check for individual elements rendering) 
describe('emoji is visible', () => {
    //test will check if the emoji haws been inserted into the <h2> element in the Nav component
    it('inserts emoji into the h2', () => {
        //Arrange (The query to return the element containing the emoji )
        const { getByLabelText } = render(<Nav />);

        //Assert (use the getByLabelText method and query by the aria-label value)
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})


//check to see if some of our links are visible.
describe('links are visible', () => {
    it('insert text into the links', () => {
        //Arrange the queries
        const { getByTestId } = render(<Nav />);

        //Assert  the valid outcomes using the matcher, toHaveTextContent (asserts that both links must have their text contents inserted. If either assertion fails, this test will fail)
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me')
    });
})