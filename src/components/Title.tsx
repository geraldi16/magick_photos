import React, { PropsWithChildren } from 'react';
import { TitleWrapper } from './styles/title.style.ts';

export const Title: React.FC<PropsWithChildren> = (props) => {
    const titleName = props.children;
    return (
        <TitleWrapper>{ titleName }</TitleWrapper>
    );
}