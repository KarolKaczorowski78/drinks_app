import React, { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap, { TimelineLite } from 'gsap';
import './home_section.scss';

const HomeSection = (props: { children: ReactNode }) => {

    const [isDisplayed, setIsDisplayed] = useState<boolean>(false);
    const [ref, inView, entry] = useInView({ threshold: .6 });

    useEffect(() => {
        (inView && !isDisplayed) && showSection();
    });

    const showSection = () => {
        if (entry?.target !== undefined) {
            const tl: TimelineLite = gsap.timeline({ defaults: { stagger: .3 } });

            const images: HTMLImageElement[] = Array.from(entry.target.getElementsByTagName('img'));
            const headlings: HTMLHeadingElement[] = Array.from(entry.target.getElementsByTagName('h1'));
            const buttons: HTMLButtonElement[] = Array.from(entry.target.getElementsByTagName('button'));
            const paragraphs: HTMLParagraphElement[] = Array.from(entry.target.getElementsByTagName('p'));
            const divs: Element[] = Array.from(entry.target.getElementsByClassName('filters-introduction-container-image-container'));

            const elements = [images, headlings, paragraphs, buttons, divs].flat();

            elements.forEach(el => {
                const isDiv = el.tagName === 'DIV';

                el && tl.to(el, { autoAlpha: 1, x: 0, y: 0, duration: (isDiv ? .2 : .5) })
            })

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
