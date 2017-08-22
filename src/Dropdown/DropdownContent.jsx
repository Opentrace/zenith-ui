import styled from 'styled-components';
import { boxShadow, palette } from '../globals';

export default styled.div`
  ${ boxShadow }
  max-height: ${ props => (props.open ? '100%' : 0) };
  transition: max-height 0.2s;
  overflow: hidden;
  right: 12px;
  width: 160px;
  position: absolute;
  background-color: #fff;
  
  > ul {
    margin: 0;
    padding: 12px 0;
    
    > li {
      line-height: 1.5;
      display: flex;


      a {
        color: ${ palette.base };
        text-decoration: none;
        text-align: center;
        flex: 1;
        transition: background-color 0.2s;
        &:hover {
          background-color: ${ palette.gray[2] };
        }
      }
    }
  }
`;
