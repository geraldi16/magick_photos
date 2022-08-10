import React, { useEffect, useState } from 'react';
import { getBackgroundList } from '../services/selectBackground.service.ts';
import { BackgroundImage, BackgroundDiv, SelectBackgroundWrapper } from './styles/selectBackground.style.ts';

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
                        <BackgroundImage
                            id={bg.id}
                            src={bg.url}
                            onClick={selectImage}
                            isSelected={selectedImageId === bg.id ? true : false}
                            alt="selectimage"
                        />
                    </>
                );
            }
            return (
                <BackgroundDiv
                    id={bg.id}
                    style={{backgroundColor: bg.color }}
                    onClick={selectImage}
                    isSelected={selectedImageId === bg.id ? true : false}
                    alt="selectimage"
                />
            )
        })
    }

    return (
        <div>
            <p>2. Select your Background</p>
            <SelectBackgroundWrapper style={{ overflowY: 'auto' }}>
                {renderImages()}
            </SelectBackgroundWrapper>
        </div>
    );
}