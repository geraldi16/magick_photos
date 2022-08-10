import React from 'react';
import { FaUpload } from 'react-icons/fa';
import {
    InputImagePreview,
    Input,
    UploadImageText,
    UploadImage,
} from './styles/inputImage.style.ts';
import { CardWrapper } from './styles/general.style.js';

type Props = {
    imageURL: string | ArrayBuffer | null,
    changeFile: Function,
};

export const InputImage: React.FC<Props> = ({ imageURL, changeFile }) => {
    var inputElement;

    const onChangeFile = (e) => changeFile(e);

    const openUploadFile = () => inputElement.click();

    return (
        <div>
            <p>1. Upload your image</p>
            <CardWrapper>
                {imageURL ? 
                    (<InputImagePreview
                        style={{ maxWidth: 1200, maxHeight: 960}}
                        src={imageURL as string} alt="upload image"
                        onClick={openUploadFile}
                    />)
                : 
                    (<UploadImage onClick={openUploadFile}>
                        <UploadImageText>
                            <FaUpload style={{ marginRight: 5 }} />
                            Upload your image
                        </UploadImageText>
                    </UploadImage>)
                }
                <Input type="file" onChange={onChangeFile} accept="image/*" ref={input => inputElement = input}/>
            </CardWrapper>
        </div>
    );
}
