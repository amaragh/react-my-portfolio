import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <div className='row justify-content-center'>
            <section className='card col-xs-9 col-md-5'>
                <div className='card-body'>
                    <h1>Send me a message</h1>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className=' mb-2'>
                            <input className='form-input' type="text" defaultValue={name} placeholder='Name' onBlur={handleChange} name="name" />
                        </div>
                        <div className=' mb-2'>
                            <input className='form-input' type="email" defaultValue={email} placeholder='Email' onBlur={handleChange} name="email" />
                        </div>
                        <div className=' mb-2'>
                            <textarea className='form-input' name="message" defaultValue={message} placeholder='Message' onBlur={handleChange} rows="5" />
                        </div>

                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </form>
                </div>
            </section >
        </div>

    )
}

export default Contact;