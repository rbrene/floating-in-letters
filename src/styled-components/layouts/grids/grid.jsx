import styled from 'styled-components';
import Container from '../containers';


const Grid = styled(Container)`
    display: grid;
    ${({ $areas }) => $areas && `grid-template-areas: ${$areas}`};
    ${({ $columns }) => $columns && `grid-template-rows: ${$columns}`};
    ${({ $rows }) => $rows && `grid-template-rows: ${$rows}`};
`;

export default Grid;