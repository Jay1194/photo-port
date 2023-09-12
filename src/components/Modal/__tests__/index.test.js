import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

//declare a constant,currentPhoto, that's assigned one element of hardcoded values from the PhotoList array photos
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

const mockToggleModal = jest.fn()
const mockSetToggleModal = jest.fn()

//we can use these mock functions as props for the Nav component to render
describe('Modal Component', () => {
    it('renders', () => { <Modal 
        //baseline render component test
        currentPhoto={currentPhoto}
        mockSetToggleModal={mockSetToggleModal}
        toggleModal={mockToggleModal}
        />
    });
    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        const { asFragment } = render( <Modal 
        currentPhoto={currentPhoto}
        mockSetToggleModal={mockSetToggleModal}
        toggleModal={mockToggleModal} 
        />); 
        // Assert the match
    expect(asFragment()).toMatchSnapshot();
    })
});

describe('ClickEvent', () => {
    it('calls onClose handler', () => {
         //  Render Modal
         const { getByText } = render(<Modal 
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'));
        // Assert: Expected matcher 
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})

afterEach(cleanup)

