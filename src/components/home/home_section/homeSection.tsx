import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap, { TimelineLite } from 'gsap';
import './home_section.scss';

const HomeSection = (props: { children: ReactNode }) => {

    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    const [ref, inView, entry] = useInView({ threshold: .4 });

    useEffect(() => {
        (inView && !isDisplayed) && showSection();
    });

    const showSection = () => {
        if (entry?.target !== undefined) {
            const tl: TimelineLite = gsap.timeline();
            const elements = Array.from(entry.target.childNodes)

            tl.to(elements, { autoAlpha: 1, x: 0, y: 0, duration: .5, stagger: .2 });

            setIsDisplayed(true);
        }
    }

    return (
        <section className="home-section" ref={ ref }>
            { props.children }
        </section>
    )
}

export default HomeSection;
