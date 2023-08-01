import React, { Suspense } from 'react';
import styled from 'styled-components';

import { isSSR } from '../utils/isSSR';
import { FlagErrorBoundary } from './FlagErrorBoundary';
import { FlagProps } from './FlagProps';
import { getSemanticValue } from '../utils/cssVariables';

const Loading = styled.div`
    background-color: ${getSemanticValue('background-surface-neutral-faded')};
    border-radius: 0.125rem;
    display: inline-block;
    height: 1.25rem;
    width: 1.75rem;
`;

const Flag: React.FC<FlagProps> = React.memo(({ code, className }) => {
    const Component = React.lazy(() => import(`./flags/${code}`));

    return (
        <FlagErrorBoundary className={className} code={code}>
            {!isSSR() && (
                <Suspense fallback={<Loading className={className} />}>
                    <Component className={className} />
                </Suspense>
            )}
        </FlagErrorBoundary>
    );
});

export { Flag, FlagProps };
