import styled from 'styled-components';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

export const Wrapper = styled.div`
    margin: 16px;
`;

export const InputWrapper = styled.div`
    background-color: #cecece;
    border-radius: 8px;
    border: 2px solid #bbbbbb;
`;

export const InputWrapperFlex = styled.div`
    display: flex;
    gap: 4vw;
    margin-bottom: 24px;
    width: 42vw;
    overflow: hidden;
    scroll-behavior: smooth;
    margin-left: 28vw;
`;

export const UploadButton = styled.button`
    height: 60px;
    width: 160px;
    background: #cecece;
    border-radius: 2px;
    color: white;
    font-size: 16px;
    border: 5px solid white;
    margin: 24px 0;

    &:disabled {
        visibility: hidden;
    }
    &:hover {
        background: #b1b1b1;
        cursor: pointer;
    }
`;

export const LoadingScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.3
`;

export const LoadingIcon = styled.div`
    position: absolute;
    top: 40vh;
    left: 50vw;
    -webkit-animation: icon-spin 1s infinite linear;
    animation: icon-spin 1s infinite linear;

    @-webkit-keyframes icon-spin {
        0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
        }
  }
  
  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
    }
  }
`

export const LeftArrow = styled(FiChevronsLeft)`
    border: 3px solid white;
    border-radius: 6px;
    &:hover {
        cursor: pointer;
    }
    margin-right: 15vw;

    ${props => props.hidden && 'display: none;'}
`

export const RightArrow = styled(FiChevronsRight)`
    border: 3px solid white;
    border-radius: 6px;
    &:hover {
        cursor: pointer;
    }
    margin-left: 15vw;

    ${props => props.hidden && 'display: none;'}
`