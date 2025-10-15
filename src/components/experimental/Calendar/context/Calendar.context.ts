import React from 'react';

export type SelectionType = 'single' | 'range' | 'multiple';

export const SelectionTypeContext = React.createContext<SelectionType>('single');
