import React, { PropsWithChildren } from 'react';

export const Title: React.FC<PropsWithChildren> = (props) => {
    const titleName = props.children;
    return (
        <div>{ titleName }</div>
    );
}