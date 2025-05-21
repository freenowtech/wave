import React from 'react';

export interface FieldProps {
    label?: string;
    leadingIcon?: React.ReactNode;
    actionIcon?: React.ReactNode;
    description?: string;
    errorMessage?: string;
    /* If text field shouldn't lose visual focus */
    isVisuallyFocused?: boolean;
}
