import React, { useState } from 'react';
import base64js from 'base64-js';
import { AiOutlineLoading } from 'react-icons/ai';

import { SelectBackground } from '../components/SelectBackground.component.tsx';
import { changeBackground } from '../services/changeBackground.service.ts';
import { ResultImage } from '../components/ResultImage.tsx';
import { InputImage } from '../components/InputImage.tsx';
import { Title } from '../components/Title.tsx';
import {
    InputWrapper,
    InputWrapperFlex,
    Wrapper,
    UploadButton,
    LoadingScreen,
    LoadingIcon,
    LeftArrow,
    RightArrow,
} from './styles/main.style.ts';

export const MainPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [background, setBackground] = useState<any>(null);
    const [file, setFile] = useState<any>(null);
    const [fileURL, setFileURL] = useState<string | ArrayBuffer | null>('');
    const [resultURL, setResultURL] = useState<string | ArrayBuffer | null>('');
    const [disableUpload, setDisableUpload] = useState<boolean>(true);
    const [hideLeft, setHideLeft] = useState<boolean>(true);
    const [hideRight, setHideRight] = useState<boolean>(true);

    const changeFile = (event) => {
        if (event.target.files.length === 0) {
            setFileURL(null);
            setHideRight(true);
            return;
        }
        
        setFile(event.target.files[0]);
        
        var reader = new FileReader();
        reader.onload = function (e) {
            setFileURL(e.target?.result || null);
            setHideRight(false);
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

    const moveLeft = () => {
        setHideLeft(true);
        setHideRight(fileURL ? false : true);
        setDisableUpload(true);
        document.getElementById('input')?.scrollBy(-44 * window.innerWidth/100, 0);
    }

    const moveRight = () => {
        setHideLeft(false);
        setHideRight(true);
        setDisableUpload(background ? false : true);
        document.getElementById('input')?.scrollBy(44 * window.innerWidth/100, 0);
    }

    return (
        <Wrapper>
            {loading && (
                <>
                    <LoadingScreen/>
                    <LoadingIcon><AiOutlineLoading size={50} color="#fff"/></LoadingIcon>
                </>
            )}
            <InputWrapper>
                <Title>Magick Photo</Title>
                <InputWrapperFlex id="input">
                    <InputImage imageURL={fileURL} changeFile={changeFile} />
                    <SelectBackground setSelectedImage={setSelectedImage} />
                </InputWrapperFlex>
                <div>
                    <LeftArrow
                        onClick={moveLeft}
                        hidden={hideLeft}
                        color="white"
                        size="40"
                    />
                    <RightArrow
                        onClick={moveRight}
                        hidden={hideRight}
                        color="white"
                        size="40"
                    />
                </div>
                <UploadButton disabled={disableUpload} onClick={submitChangeImageBackground}>Upload</UploadButton>
            </InputWrapper>
            <ResultImage resultURL={resultURL}/>
        </Wrapper>
    )
};
