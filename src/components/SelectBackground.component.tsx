import React, { useEffect, useState } from 'react';
import { getBackgroundList } from '../services/selectBackground.service.ts';

type Props = { setSelectedImage: Function };

export const SelectBackground: React.FC<Props> = ({ setSelectedImage }) => {
    const [backgrounds, setBackgrounds] = useState<any>({});
    const [selectedImageId, setSelectedImageId] = useState<number>(-1);

    useEffect(() => {
        setBackgrounds(getBackgroundList());
    }, []);

    const selectImage = (e) => {
        const selectedId = parseInt(e.target.id, 10);
        const background = backgrounds[selectedId];
        setSelectedImage(background);

        // set isSelected in the data
        if (selectedImageId !== -1) backgrounds[selectedImageId].isSelected = false;
        backgrounds[selectedId].isSelected = true;

        // resetting backgrounds to trigger rerendering
        setSelectedImageId(selectedId);
        setBackgrounds(backgrounds);
    }

    const renderImages = () => {
        return Object.values(backgrounds).map((bg) => {
            if (bg.type === 'image') {
                return (
                    <>
                        <img
                            id={bg.id}
                            src={bg.image}
                            onClick={selectImage}
                            className={`background${selectedImageId === bg.id ? '_selected' : ''}`}
                        />
                    </>
                );
            }
            return (
                <div
                    id={bg.id}
                    style={{ width: 600, height: 400, backgroundColor: bg.color }}
                    onClick={selectImage}
                    className={`background${selectedImageId === bg.id ? '_selected' : ''}`}
                />
            )
        })
    }

    return (
        <div>
            {renderImages()}
        </div>
    );
}