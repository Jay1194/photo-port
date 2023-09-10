//import useState from react by modifying the import statement at the top of the file
import React, { useState } from 'react'


function ContactForm() {
    // create a form with three inputs (name, email, and message) in JSX markup
const [formState, setFormState] = useState({ name: '', email: '', message: ''});

//A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading.(initial state to empty strings)
const { name, email, message } = formState;

//function will sync the internal state of the component formState with the user input from the DOM.
function handleChange(e) {
    //make the property name a dynamic variable that's determined by the form element. ( we can target the different properties of the formState, email and message)
    setFormState({...formState, [e.target.name]:  e.target.value})
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
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <input type="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;