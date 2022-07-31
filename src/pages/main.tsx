import React, { useState } from 'react';
import base64js from 'base64-js';

import { SelectBackground } from '../components/SelectBackground.component.tsx';
import { changeBackground } from '../services/changeBackground.service.ts';
import { ResultImage } from '../components/ResultImage.tsx';
import { InputImage } from '../components/InputImage.tsx';
import { Title } from '../components/Title.tsx';

export const MainPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [background, setBackground] = useState<any>(null);
    const [file, setFile] = useState<any>(null);
    const [fileURL, setFileURL] = useState<string | ArrayBuffer | null>('');
    const [resultURL, setResultURL] = useState<string | ArrayBuffer | null>('');
    const [disableUpload, setDisableUpload] = useState<boolean>(true);

    const changeFile = (event) => {
        if (event.target.files.length === 0) {
            setFileURL(null);
            setDisableUpload(true);
            return;
        }
        
        setFile(event.target.files[0]);
        
        var reader = new FileReader();
        reader.onload = function (e) {
            setFileURL(e.target?.result || null);
            setDisableUpload(!(background && true));
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    const setSelectedImage = (value) => {
        setBackground(value);
        setDisableUpload(!(true && fileURL));
    }

    const submitChangeImageBackground = async (): Promise<void> => {
        setLoading(true);
        const { data } = await changeBackground(file, background);
        if (data) {
            const bytes: Uint8Array = new Uint8Array(data);

            // store to result preview/download immediately
            setResultURL(`data:image/png;base64,${base64js.fromByteArray(bytes)}`);
        } else {
            // return error message to UI
        }
        setLoading(false);
    }

    if (loading) return (<div>Loading...</div>);

    return (
        <div>
            <Title>Magick Photo</Title>
            <InputImage imageURL={fileURL} changeFile={changeFile} />
            <SelectBackground setSelectedImage={setSelectedImage} />
            <button disabled={disableUpload} onClick={submitChangeImageBackground}>Upload</button>
            <ResultImage resultURL={resultURL}/>
        </div>
    )
};
