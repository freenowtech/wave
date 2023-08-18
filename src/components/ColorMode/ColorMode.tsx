import React from 'react';
import { getSemanticValue } from '../../utils/cssVariables';

export const ColorMode = ({ dark, children }: { dark: boolean; children: React.ReactNode }) => (
    <div className={dark ? 'dark-theme' : 'light-theme'}>
        <div style={{ backgroundColor: getSemanticValue('background-page') }}>{children}</div>
    </div>
);
