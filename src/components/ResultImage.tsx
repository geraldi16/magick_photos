import React from 'react';

type Props = { resultURL: string | ArrayBuffer | null };

export const ResultImage: React.FC<Props> = ({ resultURL }) => {
    const downloadResultImage = () => {
        var link = document.createElement('a');
        link.download = 'your-new-photo.jpg';
        link.href = resultURL as string;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div>
            <img style={{ maxWidth: 1200, maxHeight: 960}} src={resultURL as string} alt="" />
            <button onClick={downloadResultImage}>Download</button>
        </div>
    );
}