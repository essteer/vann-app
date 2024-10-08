import React, { useState } from 'react';
import "../../styles/Page.css";
import "../../styles/pages/Contact.css";

const Contact = () => {

    const title = 'Contact';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [sendConfirmation, setSendConfirmation] = useState('')
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSendConfirmation("We'll be in touch soon!")
    };


    return (
        <div className="page">
            <div className="spacing" >&nbsp;</div>
            <div className="contact-container">
                <div className="contact-lead-container">
                    <h2 className="contact-lead">{title}</h2>
                    <div className="spacing" >&nbsp;</div>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form-button-container">
                        <button className="contact-form-button" type="submit">Send</button>
                        </div>
                    </form>
                    <div>
                        <p className="sendConfirmation" >{sendConfirmation}</p>
                    </div>
                </div>
            </div>
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default Contact


