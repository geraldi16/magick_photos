import React from 'react';
import { Image, DownloadButton, Wrapper } from './styles/resultImage.style.ts';

type Props = { resultURL: string | ArrayBuffer | null };

export const ResultImage: React.FC<Props> = ({ resultURL = null }) => {
    const downloadResultImage = () => {
        var link = document.createElement('a');
        link.download = 'your-new-photo.jpg';
        link.href = resultURL as string;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <Wrapper hide={!resultURL}>
            <h3>Result Image</h3>
            <Image src={resultURL as string} alt="" />
            <br/>
            <DownloadButton onClick={downloadResultImage}>
                Download
            </DownloadButton>
        </Wrapper>
    );
}