import React, { FormEvent } from 'react';
import './contact_form.scss';

const ContactForm = () => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    } 

    return (
        <form className="contact-section-form" onSubmit={ e => handleSubmit(e) }>
            <label htmlFor="email">
                Your e-mail adress:
                <input type="text" id="email" placeholder=""/>
            </label>
            <label htmlFor="message">
                Your message:
                <textarea id="message"></textarea>
            </label>
            <label htmlFor="notes">
                Any notes on Drinkify usage?
                <textarea id="notes"></textarea>
            </label>
            <label htmlFor="send-message">
                <input className="contact-section-form-submit" type="submit" id="send-message" value="Ask question"/>
            </label>
        </form>
    )
}

export default ContactForm;
