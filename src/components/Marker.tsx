import type { FunctionComponent, ReactSVGElement } from 'react';

import { prefixCss } from '../utils';
import { Status } from './Status';

export interface Marker {
    name: string;
    id: string;
    x: number;
    y: number;
    status: Status['status'];
    cssClassPrefix?: string;
    size?: number;
    rotate?: number,
}

export const Marker: FunctionComponent<Marker> = ({
    id,
    name,
    cssClassPrefix,
    size = 10,
    status,
    rotate = 0,
}) => {
    const markerClassName = prefixCss('marker', cssClassPrefix);
    const pointClassName = prefixCss('marker_point', cssClassPrefix);
    const textClassName = prefixCss('marker_text', cssClassPrefix);

    const counterRotate = rotate * -1;

    const halfSize = size / 2;

    return (
        <svg id={id} className={markerClassName} viewBox="0 0 10 10" width={size} height={size} transform={`rotate(${rotate} ${halfSize} ${halfSize})`}>
            <g transform={`rotate(${counterRotate} 5 5)`}>
                <path className={pointClassName} d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <text className={textClassName} x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{ name }</text>
            </g>
            <Status status={status} cssClassPrefix={cssClassPrefix} />
        </svg>
    );
};