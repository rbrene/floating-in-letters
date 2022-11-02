import styled from 'styled-components';
import { animated } from '@react-spring/web';
import Container from '../containers';


const GridCell = styled(Container)`
    ${($area) => $area ? `grid-area: ${$area}` : null};
    ${($column) => $column ? `grid-column: ${$column}` : null};
    ${($row) => $row ? `grid-row: ${$row}` : null};
`;

export default GridCell;