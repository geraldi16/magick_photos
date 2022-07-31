import backgroundData from '../data/background-data.json';

export function getBackgroundList() {
    const mappedList: any = {};
    backgroundData.forEach((bg) => {
        mappedList[bg.id] = { ...bg, isSelected: false };
    });

    return mappedList;
}