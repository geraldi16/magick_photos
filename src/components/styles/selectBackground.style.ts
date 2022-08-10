import styled from 'styled-components';
import { CardWrapper } from './general.style.js';

export const SelectBackgroundWrapper = styled(CardWrapper)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2vw;
`

export const BackgroundImage = styled.img`
    width: 16vw;
    height: 12vw;
    margin: 1vh 1vw;
    ${props => props.isSelected && 'box-shadow: 1px 1px 15px #363636'}
`;

export const BackgroundDiv = styled.div`
    width: 16vw;
    height: 12vw;
    margin: 1vh 1vw;
    ${props => props.isSelected && 'box-shadow: 1px 1px 15px #363636'}
`;
