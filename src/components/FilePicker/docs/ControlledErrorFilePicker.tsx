import React, { FC, useState } from 'react';
import { Box } from '../../Box/Box';
import { FilePicker } from '../FilePicker';
import { HelperText } from '../../HelperText/HelperText';

const ControlledErrorFilePicker: FC = () => {
    const [error, setError] = useState(false);
    const onError = file => {
        // eslint-disable-next-line no-console
        console.log('onError', file);
        setError(!!file);
    };

    return (
        <Box maxWidth="100%" width="30rem">
            <FilePicker
                accept="image/png, image/jpeg"
                buttonText="Browse files"
                label="A picture of you"
                name="avatar"
                error={error}
                onChange={e => {
                    // eslint-disable-next-line no-console
                    console.log('onChange', e);
                }}
                onFileChange={(eventFile, e) => {
                    // eslint-disable-next-line no-console
                    console.log('onFileChange', eventFile, e);
                    try {
                        if (eventFile.size > 0) {
                            throw new Error('Oops! I need a file with no size');
                        }
                    } catch {
                        onError(eventFile);
                    }
                }}
            />
            {error && (
                <HelperText mt={1} variant="danger">
                    I need a file with no size!
                </HelperText>
            )}
        </Box>
    );
};

export { ControlledErrorFilePicker };
