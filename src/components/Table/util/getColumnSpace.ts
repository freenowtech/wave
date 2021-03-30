export function getColumnSpace(columnSpaceValue) {
    if (columnSpaceValue == 'normal') {
        return '1.5rem';
    }

    if (columnSpaceValue == 'small') {
        return '1rem';
    }

    return columnSpaceValue;
}
