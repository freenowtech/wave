import React from 'react';

interface ITableContext {
    rowStyle: 'lines' | 'zebra' | 'blank';
    rowSize: string;
    columnSpace: string;
}

export const TableContext = React.createContext<ITableContext>({
    columnSpace: '24px',
    rowSize: '56px',
    rowStyle: 'lines'
});
