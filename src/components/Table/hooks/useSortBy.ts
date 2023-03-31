import { useCallback, useMemo, useState } from 'react';
import type { SortingDirection } from '../types';

type Sorting = {
    direction: SortingDirection;
    field: string;
};

interface SortBy {
    sortBy: Sorting;
    setSortBy: (targetField: string) => void;
}

/**
 * This hook holds the state of the current field and the direction in which that field should be sorted.
 * When a field is active, updating the sorting (with the same field key), will make the state cycle through "DESC" => "ASC" => and then inactive (clears the field, and `active` will turn false).
 * The default initial sorting direction is ASC (ascending order).
 * @param  {string} (defaultField) the name/key of the field that will be sorted by default (following BE response, most probably).
 * @param  {string} (initialDirection) the sorting order/direction to use initially when a field is not yet being used for sorting.
 */
function useSortBy(defaultField: Sorting['field'] = '', initialDirection: SortingDirection = 'ASC'): SortBy {
    const [field, setField] = useState(defaultField);
    const [direction, setDirection] = useState<SortingDirection>(initialDirection);

    /**
     * If no field is currently being sorted, or the target field is different from the current field, the target field will become the current field and the sorting order/direction will be set to the initial direction.
     * If the target field matches the current field being sorted, the sorting direction will toggle from DESC to ASC and vice-versa.
     * If the sorting direction is already ASC, and the target field matches the current field, then the sorting will be reset.
     * @param  {string} (targetField) the name/key of the field to apply sorting to.
     */
    const setSortBy = useCallback(
        (targetField: string) => {
            if (field === '') {
                // if not sorting by a field, use the incoming field and reset to initial direction
                setField(targetField);
                setDirection(initialDirection);
            } else if (field === targetField && direction === initialDirection) {
                // if sorting by a field switch to the next direction
                setDirection(initialDirection === 'ASC' ? 'DESC' : 'ASC');
            } else if (field !== targetField) {
                // if sorting by a different field, use the incoming field and reset to initial direction
                setField(targetField);
                setDirection(initialDirection);
            } else if (field && direction !== initialDirection) {
                // if sorting by a field and direction is not initial, reset direction and field to initial
                setField(defaultField);
                setDirection(initialDirection);
            }
        },
        [field, direction, defaultField, initialDirection]
    );

    const sortBy = useMemo(
        () => ({
            direction,
            field
        }),
        [direction, field]
    );

    return {
        setSortBy,
        sortBy
    };
}

export { useSortBy, SortingDirection };
