import React, { FC, useState } from 'react';
import { Password, PasswordProps } from '../Password';

const ControlledPassword: FC<Omit<PasswordProps, 'ref'>> = (props: Omit<PasswordProps, 'ref'>) => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return <Password {...props} value={value} onChange={handleChange} />;
};

export { ControlledPassword };
