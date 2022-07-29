import backgroundData from '../data/background-data.json';
// this is logic because image is provided in local instead of api
import images from '../images/backgrounds/index.ts';

export function getBackgroundList() {
    const mappedList: any = {};
    backgroundData.forEach((bg) => {
        if (bg.type === 'image') {
            mappedList[bg.id] = { ...bg, image: images[bg.name], isSelected: false };
        } else {
            mappedList[bg.id] = { ...bg, isSelected: false };
        }
    });
    console.log(mappedList)
    return mappedList;
}