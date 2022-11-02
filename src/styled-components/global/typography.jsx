import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, em } from '../../helpers/units';


export const H1 = styled(animated.h1)`
    position: relative;    
    font-size: clamp(${rem(48)}, 9.2vw, ${rem(96)});
    font-family: 'Poppins Black';
    letter-spacing: 0.1ch;
    display: flex;
    transform-style: preserve-3d;
    perspective: 1000px;
    z-index: inherit;

    &>[data-text=' ']{
        width: ${em(3)};
    }
`;

export const H2 = styled(animated.h2)`
    position: relative;
    z-index: inherit;
`;

export const H3 = styled(animated.h3)`
    position: relative;
    z-index: inherit;
`;

export const H4 = styled(animated.h4)`
    position: relative;
    z-index: inherit;
`;

export const H5 = styled(animated.h5)`
    position: relative;
    z-index: inherit;
`;

export const H6 = styled(animated.h6)`
    position: relative;
    z-index: inherit;
`;

export const Small = styled(animated.small)`
    position: relative;
    z-index: inherit;
`;

export const P = styled(animated.p)`
    position: relative;
    z-index: inherit;
`;