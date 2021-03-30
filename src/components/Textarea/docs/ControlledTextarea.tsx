import React, { useState } from 'react';
import { Textarea } from '../Textarea';

const ControlledTextarea = props => {
    const [value, setValue] = useState('');
    const handleChange = e => {
        setValue(e.target.value);
    };

    return <Textarea {...props} value={value} onChange={handleChange} />;
};

export { ControlledTextarea };
