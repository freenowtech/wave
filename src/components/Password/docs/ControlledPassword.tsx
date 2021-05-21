import React, { useState } from 'react';
import { Password } from '../Password';

const ControlledPassword = props => {
    const [value, setValue] = useState('');
    const handleChange = e => {
        setValue(e.target.value);
    };

    return <Password {...props} id="password-id" value={value} onChange={handleChange} />;
};

export { ControlledPassword };
