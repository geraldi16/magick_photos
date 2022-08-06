import styled from 'styled-components';

export const Wrapper = styled.div`
    ${props => props.hide ? 'display: none;' : ''}
    border-top: 1px solid #818181;
    margin-top: 16px
`;

export const Image = styled.img`
    max-width: 800px;
    max-height: 800px;
`;

export const DownloadButton = styled.button`
    height: 60px;
    width: 160px;
    background: #23c123;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    border: none;
    box-shadow: 0 1px 5px black;
    margin-bottom: 24px;

    &:hover {
        background: green;
        cursor: pointer;
    }
`;