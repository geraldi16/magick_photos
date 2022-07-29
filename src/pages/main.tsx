import React, { useState } from 'react';
import { SelectBackground } from '../components/SelectBackground.component.tsx';
import { changeBackground } from '../services/changeBackground.service.ts';

export const MainPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [background, setBackground] = useState<any>(null);
    const [file, setFile] = useState<any>(null);
    const [fileURL, setFileURL] = useState<string | ArrayBuffer | null>('');

    const changeFile = (event) => {
        setFile(event.target.files[0]);
        
        var reader = new FileReader();
        reader.onload = function (e) {
            setFileURL(e.target?.result || null);
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    const submitChangeImageBackground = async () => {
        const newImage = changeBackground(file, background);

        // store to result preview/download immediately
    }

    if (loading) return (<div>Loading...</div>);

    return (
        <div>
            Magick Photo
            <div>
                <input type="file" onChange={changeFile}/>
            </div>
            <img style={{ maxWidth: 1200, maxHeight: 960}} src={fileURL as string} />
            <SelectBackground setSelectedImage={setBackground} />
            <button onClick={submitChangeImageBackground}>Upload</button>
        </div>
    )
};
