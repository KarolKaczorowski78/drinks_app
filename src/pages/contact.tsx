import React, { useEffect, useRef } from 'react';
import '../components/contact/contact_section.scss';
import ContactForm from '../components/contact/contact_form/contactForm';
import SocialMedia from '../components/contact/social_media_button/socialMedia';
import ContactImage from '../img/ContactImg.jpg';
import HomeImage from '../components/home/home_image/homeImage';
import gsap from 'gsap';
import RedirectButton from '../components/universal/browse_drinks_button/browseDrinksButton';

const Contact = () => {

    const sectionContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        showSection();
    }, [sectionContainer]);

    const showSection = () => {
        const elements = sectionContainer.current?.childNodes;
        const tl = gsap.timeline({ defaults: { duration: .5 } });

        elements !== undefined && 
                            tl.to(elements, { autoAlpha: 1, x: 0, y: 0, stagger: .35 });

    }

    return (
        <div className="contact-section" ref={ sectionContainer }>
            <HomeImage side={ 'left' } src={ ContactImage } />
            <h1>Got any questions?</h1>
            <h3>You are few clicks away from answer!</h3>
            <ContactForm />
            <div>
                <SocialMedia icon="fab fa-facebook-f"/>
                <SocialMedia icon="fab fa-instagram" />
                <SocialMedia icon="fab fa-twitter" />
                <SocialMedia icon="fab fa-youtube" />
            </div>
            <RedirectButton side="left" targetPage="" >Home Page</RedirectButton>
            <RedirectButton side="right" targetPage="drinks" >Browse drinks</RedirectButton>
        </div>
    )
}

export default Contact;
