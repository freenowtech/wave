export function getRowSize(rowSizeValue: 'large' | 'normal' | 'small' | string): string {
    if (rowSizeValue === 'large') {
        return '4.5rem';
    }

    if (rowSizeValue === 'normal') {
        return '3.5rem';
    }

    if (rowSizeValue === 'small') {
        return '3rem';
    }

    return rowSizeValue;
}
