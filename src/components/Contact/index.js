import React from 'react'

function ContactForm() {

    // create a form with three inputs (name, email, and message) in JSX markup
    return (
        <section>
            <h1>ContactMe</h1>
            <form id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <input type="message"rows="5" />
            </div>
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;