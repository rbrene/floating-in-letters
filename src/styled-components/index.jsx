import styled from 'styled-components';
import { animated } from '@react-spring/web';


export const AppWrapper = styled(animated.main)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Section = styled(animated.section)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

export const Image = styled(animated.img)`
    position: relative;
    width: 100%;
    height: auto;
    object-fit: contain;
    z-index: inherit;
`;