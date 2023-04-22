import { FunctionComponent } from 'react';

import { prefixCss } from '../utils';

export interface Status {
    status: 'in' | 'out' | 'new' | 'stay';
    cssClassPrefix?: string;
}

export const Status: FunctionComponent<Status> = ({
    status,
    cssClassPrefix,
}) => {
    const className = prefixCss(`status_${status}`, cssClassPrefix);
    switch(status) {
        case 'in':
            return (
                <path className={className} d="M8.54 8.54a4.98 4.98 0 0 1-7.08 0l.71-.71a3.99 3.99 0 0 0 5.66 0l.7.7Z"/>
            );
        case 'out':
            return (
                <path className={className} d="M2.17 2.17a3.99 3.99 0 0 1 5.66 0l.7-.7a4.98 4.98 0 0 0-7.07 0l.71.7Z"/>
            );
        case 'new':
            return (
                <path className={className} fill-rule="evenodd" d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
            );
        default:
            return null;
    }
}; 