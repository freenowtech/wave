import React, { forwardRef } from 'react';

import { Password } from '../Password/Password';
import { InputProps } from './InputProps';
import { InputWrapperProps } from './InputWrapper';
import { InnerInput } from './InnerInput';

const Input = forwardRef<HTMLInputElement, InputWrapperProps & InputProps>(
    ({ size = 'medium', variant = 'boxed', type = 'text', ...rest }: InputWrapperProps & InputProps, ref) => {
        if (type === 'password') {
            return <Password size={size} variant={variant} type={type} {...rest} ref={ref} />;
        }

        return <InnerInput size={size} variant={variant} type={type} {...rest} ref={ref} />;
    }
);

export { Input, InputProps };
