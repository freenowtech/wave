import React, { FC, useState } from 'react';
import { Tag } from '../Tag';

const DismissibleTag: FC = () => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && <Tag onDismiss={() => setVisible(false)}>Filter</Tag>}
            {!visible && (
                <button type="button" onClick={() => setVisible(true)}>
                    Show again
                </button>
            )}
        </>
    );
};

export { DismissibleTag };
