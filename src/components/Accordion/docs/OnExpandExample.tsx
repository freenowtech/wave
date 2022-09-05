import React, { ReactElement, useState } from 'react';
import { Accordion } from '../Accordion';

export const OnExpandExample = (): ReactElement => {
    const [label, setLabel] = useState('Close');

    return (
        <Accordion
            heading="some header"
            description="Description"
            buttonLabel={label}
            info="Secondary info"
            onExpand={() => setLabel('Open')}
            onCollapse={() => setLabel('Close')}
        >
            <div>This is just a placeholder</div>
        </Accordion>
    );
};
