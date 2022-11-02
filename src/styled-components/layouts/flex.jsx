import styled from 'styled-components';
import Container from './containers';
import { rem } from '../../helpers/units';


const Flexbox = styled(Container)`
    display: flex;
    ${({ $direction }) => $direction && `flex-direction: ${$direction}`};
`;

export default Flexbox;

export const CenterFlexbox = styled(Flexbox)`
    padding-inline: ${rem(32)};
    align-items: center;
    justify-content: center;
`;