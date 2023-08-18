import React from 'react';

export const ColorMode = ({ dark = true, children }: { dark?: boolean; children: React.ReactNode }) => (
    <div className={dark ? 'dark-theme' : 'light-theme'}>{children}</div>
);
