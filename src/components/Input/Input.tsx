import React, { forwardRef } from 'react';

import { Password } from '../Password/Password';
import { InputProps } from './InputProps';
import { InputWrapperProps } from './InputWrapper';
import { InnerInput } from './InnerInput';

const Input = forwardRef<HTMLDivElement, InputWrapperProps & InputProps>((props, ref) => {
    if (props.type === 'password') {
        return <Password {...props} ref={ref} />;
    }

    return <InnerInput {...props} ref={ref} />;
});

Input.defaultProps = {
    size: 'medium',
    variant: 'boxed',
    type: 'text'
};

export { Input, InputProps };
