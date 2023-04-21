import React, { FC, useState } from 'react';
import { Box } from '../../Box/Box';
import { FilePicker } from '../FilePicker';
import { HelperText } from '../../HelperText/HelperText';

const ControlledErrorFilePicker: FC = () => {
    const [error, setError] = useState(false);

    return (
        <Box maxWidth="100%" width="30rem">
            <FilePicker
                buttonText="Browse files"
                label="A picture of you"
                name="avatar"
                error={error}
                onFileChange={() => {
                    setError(true);
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
