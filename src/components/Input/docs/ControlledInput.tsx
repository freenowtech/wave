import React, { FC, useState } from 'react';
import { Input } from '../Input';

const ControlledInput: FC = props => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Input {...props} value={value} onChange={handleChange} />;
};

export { ControlledInput };
