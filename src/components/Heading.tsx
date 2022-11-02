import React from 'react';
import { HeadingProps } from '../interfaces/index';
import useLetters from '../hooks/useLetters';
import { H1 } from '../styled-components/global/typography';
import { useTrail, animated } from '@react-spring/web';


const Heading = ({ text }: HeadingProps) => {
    const letters = useLetters(text);
    const trail = useTrail(letters.length, {
        from: {
            y: -64,
            x: 64,
            z: 64,
            scaleX: 0.5,
            rotateY: '360deg',
            rotateX: '360deg',
            rotateZ: '360deg',
            opacity: 0,
        },
        to: {
            y: 0,
            x: 0,
            z: 0,
            scaleX: 1,
            rotateY: '0deg',
            rotateX: '0deg',
            rotateZ: '0deg',
            opacity: 1
        },
        delay: 500
    })

    return (
        <H1>
            {trail.map((props, index) => <animated.span key={index} style={props} data-text={letters[index]}>{letters[index]}</animated.span>)}
        </H1>
    )
}

export default Heading;