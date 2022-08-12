import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { RadioButton, Tooltip } from '../..';
import { Colors, MediaQueries } from '../../../essentials';
import { TooltipPlacement } from '../TooltipPlacement';

const TargetSquare = styled.div`
    background: ${Colors.BUMPY_MAGENTA_50};
    color: ${Colors.BUMPY_MAGENTA_1000};
    border: 0.0625rem solid ${Colors.BUMPY_MAGENTA_350};
    font-size: 0.75rem;
    cursor: default;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TargetSquareContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ExampleContainer = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1rem;

    ${MediaQueries.small} {
        grid-template-columns: 20rem auto;
    }
`;

const TooltipPlacementExample: FC = () => {
    const [placement, setPlacement] = React.useState<TooltipPlacement>('top-center');

    const availablePlacements: TooltipPlacement[] = [
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
        'top',
        'bottom',
        'right',
        'left',
        'auto',
        'auto-start',
        'auto-end'
    ];

    return (
        <ExampleContainer>
            <div>
                {availablePlacements.map(p => (
                    <div key={p}>
                        <RadioButton
                            name="tooltip-placement"
                            checked={placement === p}
                            onChange={() => setPlacement(p)}
                            label={<code style={{ fontSize: '1rem' }}>{p}</code>}
                        />
                        <br />
                    </div>
                ))}
            </div>

            <TargetSquareContainer>
                <Tooltip content="This is a very long explanation for the function" placement={placement}>
                    <TargetSquare>Hover me!</TargetSquare>
                </Tooltip>
            </TargetSquareContainer>
        </ExampleContainer>
    );
};

export { TooltipPlacementExample };
