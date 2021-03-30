import React, { useState } from 'react';
import { Input } from '../Input';

const ControlledInput = props => {
    const [value, setValue] = useState('');
    const handleChange = e => {
        setValue(e.target.value);
    };

    return <Input {...props} value={value} onChange={handleChange} />;
};

export { ControlledInput };
