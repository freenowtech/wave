import { useEffect } from 'react';

import { Button } from '@freenow/wave';

interface Props {
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

export const ActionItem = ({ label, onClick, disabled = false }: Props): JSX.Element => {
    useEffect(
        () =>
            function cleanUp() {
                // when parsing back from AST to source, function declarations after an arrow function
                // are wrapped in parenthesis, by expecting the output to not have the parenthesis we
                // can test that instead of parsing back we are simply returning the original source
            },
        [],
    )

    return (
        <Button size="small" onClick={onClick} disabled={disabled}>
            {label}
        </Button>
    );
}
