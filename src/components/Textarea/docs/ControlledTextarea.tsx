import React, { FC, useState } from 'react';
import { Textarea, TextAreaProps } from '../Textarea';

const ControlledTextarea: FC<TextAreaProps> = (props: TextAreaProps) => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    return <Textarea {...props} value={value} onChange={handleChange} />;
};

export { ControlledTextarea };
