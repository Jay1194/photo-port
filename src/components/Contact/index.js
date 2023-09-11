//import useState from react by modifying the import statement at the top of the file
import React, { useState } from 'react';
// validate the email format, let's import the utility function validateEmail from the utils/helpers directory 
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // create a form with three inputs (name, email, and message) in JSX markup
const [formState, setFormState] = useState({ name: '', email: '', message: ''});

// the useState Hook to handle the error state
const [errorMessage, setErrorMessage] = useState('');

//A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading.(initial state to empty strings)
const { name, email, message } = formState;

//function will sync the internal state of the component formState with the user input from the DOM.
function handleChange(e) {
    
    // validate the value of the email input field
    if(e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);

        //isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your Email is invalid!');
        }else{
            setErrorMessage('');
        }
        //we're checking the message and name form element values are blank
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }else {
                setErrorMessage('');
            }
        }
    
    //The preceding conditional statement only allows the state to update with the user input if there is no error message
    if (!errorMessage) {
        //make the property name a dynamic variable that's determined by the form element. ( we can target the different properties of the formState, email and message)
        setFormState({...formState, [e.target.name]:  e.target.value})
    }
    //error messages by testing the input fields in the user interface
    //console.log('errorMessage', errorMessage);
}

// located outside the handleChange function declaration—because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync. 
//console.log(formState);

//declare the handleSubmit function
function handleSubmit(e) {
    //prevent the default action of the form Submit button
    e.preventDefault();
    console.log(formState);
}
    return (
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
            <h1>ContactMe</h1>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <input type="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;