import styled from 'styled-components';

type Props = {
  bgColor?: string;
  bgActive?: string;
  gridColumn?: number;
  borderRadius?: string;
}

export const ButtonContainer = styled.button<Props>`
  cursor: pointer;
    color: #f1f1f1;
    font-size: 1.5rem;
    border: 1px solid #444;
    background-color: ${({ bgColor }) => bgColor || '#333'};
    &:active{
      background-color: ${({ bgActive }) => bgActive || '#444'};
    }
    grid-column:  ${({ gridColumn }) => gridColumn && `span ${gridColumn}`};
    border-radius: ${({ borderRadius }) => borderRadius || '0px'};
`;


export const ImageIcon = styled.img`
  width: 15px;
  height: 15px;
`;

