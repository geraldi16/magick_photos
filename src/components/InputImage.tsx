import React from 'react';

type Props = {
    imageURL: string | ArrayBuffer | null,
    changeFile: Function,
};

export const InputImage: React.FC<Props> = ({ imageURL, changeFile }) => {

    const onChangeFile = (e) => changeFile(e);

    return (
        <div>
            <input type="file" onChange={onChangeFile} accept="image/*"/>
            <img style={{ maxWidth: 1200, maxHeight: 960}} src={imageURL as string} alt=""/>
        </div>
    );
}
