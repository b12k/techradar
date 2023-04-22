import { FunctionComponent } from 'react';
import { Area } from './Area';

export interface Sector {
    id: string;
    name: string;
    size: number;
    cssClassPrefix?: string;
    areas: Array<Pick<Area, 'name' | 'markers'>>;
}

export const Sector: FunctionComponent<Sector> = ({
    id,
    areas,
    cssClassPrefix,
}) => {
    const className = [cssClassPrefix, 'sector'].filter(Boolean).join('_');
    const children = areas.map((area, idx) => {
        const areaId = `${id}_area${idx + 1}`;
        return (
            <Area
                id={areaId}
                key={areaId}
                {...area}
                cssClassPrefix={cssClassPrefix}
            />
        );
    });

    return (
        <g id={id} className={className}>
            { ...children }
        </g>
    );
};