import styled from 'styled-components';

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
    padding: 0 10vw;
    gap: 5vw;
    margin-bottom: 24px;
`;

export const UploadButton = styled.button`
    height: 60px;
    width: 160px;
    background: #cecece;
    border-radius: 2px;
    color: white;
    font-size: 16px;
    border: 5px solid white;
    margin-bottom: 24px;

    &:disabled {
        &:hover {
            background: #cecece;
            cursor: default;
        }
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