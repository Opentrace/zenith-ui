import styled from 'styled-components';
import { boxShadow, fontFamily, border, palette } from '../globals';

const Card = styled.div`
  ${ border }
  ${ boxShadow }
  ${ fontFamily }
  box-sizing: border-box;
  color: ${ palette.black };
`;

export default Card;
