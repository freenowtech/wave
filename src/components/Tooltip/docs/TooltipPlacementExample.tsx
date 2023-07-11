import { FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Placement } from '@popperjs/core/lib/enums';
import { RadioButton, Tooltip } from '../..';
import { MediaQueries } from '../../../essentials';
import { getSemanticValue } from '../../../utils/cssVariables';

const TargetSquare = styled.div`
    background: ${getSemanticValue('background-highlight')};
    color: ${getSemanticValue('text-primaryInverted')};
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
    const [placement, setPlacement] = React.useState<Placement>('top');

    const availablePlacements: Placement[] = [
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
