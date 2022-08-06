import styled from 'styled-components';

export const SelectBackgroundWrapper = styled.div`
    width: 40vw;
    height: 600px;
    border-style: dashed;
    border-color: #818181;
    border-radius: 8px; 
    overflow-y: auto;
`

export const BackgroundImage = styled.img`
    width: 400px;
    height: 300px;
    margin-top: 5px;
    ${props => props.isSelected && 'box-shadow: 1px 1px 15px #363636'}
`;

export const BackgroundDiv = styled.div`
    width: 400px;
    height: 300px;
    margin: auto;
    margin-top: 5px;
    ${props => props.isSelected && 'box-shadow: 1px 1px 15px #363636'}
`;
