import { FunctionComponent } from 'react';
import { Sector } from './Sector';

export interface RadarData {
    cssClass?: string;
    size?: number;
    sectors: Array<Pick<Sector, 'name' | 'areas'>>;
}


export const Radar: FunctionComponent<RadarData> = ({
    sectors,
    cssClass = 'radar',
    size = 300,
}) => {
    const sectorSize = 360 / sectors.length;

    const children = sectors.map((sector, idx) => {
        const uniqId = `sector${idx + 1}`;
        return (
            <Sector
                {...sector}
                id={uniqId}
                key={uniqId}
                size={sectorSize}
                cssClassPrefix={cssClass}
            />
        );
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`} className={cssClass}>
            { ...children }
        </svg>
    );
}