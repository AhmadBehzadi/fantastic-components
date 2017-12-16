/**
 * Created by Programmer1 on 12/4/2017.
 */
import styled from 'styled-components';


import { getColor, getBgColor, getBorderColor  } from './statics';

const TextAriaWrapper = styled.textarea`    
              box-sizing: border-box; 
              width: 100%;              
              padding: 6px 12px;
              font-size: 14px;
              line-height: 1.42857143;
              color: ${(props) => getColor(props)};   
              background-color:  ${(props) => getBgColor(props)};
              background-image: none;
              border: 1px solid  ${(props) => getBorderColor(props)};   
              border-radius: 4px;         
              box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
              height: auto;
              transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
               &:focus{
                border-color: ${(props) => getBorderColor(props)};   
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }
               }
               
                ${props => props.icon ?
                `padding-${props.theme.rtl ? 'right' : 'left'}:30px;`
                : `10px`
  }
               
              `;

export default TextAriaWrapper;
