import { FunctionComponent } from 'react';

import { Marker } from './Marker';

export interface Area {
    id: string;
    name: string;
    markers: Array<Pick<Marker, 'name' | 'status'>>;
    cssClassPrefix?: string;
}

export const Area: FunctionComponent<Area> = ({
    id,
    markers,
    cssClassPrefix,
}) => {
    const className = [cssClassPrefix, 'area'].filter(Boolean).join('_');
    const children = markers.map((marker, idx) => {
        const uniqId = `${id}_marker${idx + 1}`;
        return (
            <Marker
                id={uniqId}
                key={uniqId}
                {...marker}
                cssClassPrefix={cssClassPrefix}
                size={20}
                rotate={15}
            />
        );
    });
    return (
        <g id={id} className={className}>
            { ...children }
        </g>
    );
};