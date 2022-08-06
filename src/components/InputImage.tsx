import React from 'react';
import { FaUpload } from 'react-icons/fa';
import { InputImagePreview, InputImageWrapper, Input, UploadImageText } from './styles/inputImage.style.ts';

type Props = {
    imageURL: string | ArrayBuffer | null,
    changeFile: Function,
};

export const InputImage: React.FC<Props> = ({ imageURL, changeFile }) => {
    var inputElement;

    const onChangeFile = (e) => changeFile(e);

    const openUploadFile = () => inputElement.click();

    return (
        <InputImageWrapper>
            {imageURL ? 
                (<InputImagePreview
                    style={{ maxWidth: 1200, maxHeight: 960}}
                    src={imageURL as string} alt="upload image"
                    onClick={openUploadFile}
                />)
            : 
                (<UploadImageText onClick={openUploadFile}>
                    <FaUpload style={{ marginRight: 5 }} />
                    Upload your image
                </UploadImageText>)
            }
            <Input type="file" onChange={onChangeFile} accept="image/*" ref={input => inputElement = input}/>
        </InputImageWrapper>
    );
}
