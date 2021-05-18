import React from 'react';
import styled from 'styled-components';

import { Input } from '../Input/Input';

const PasswordWrapper = styled.div`
    display: inline-block;
    position: relative;
`;

const ToggleButton = styled.button`
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
`;

const Password = props => {
    return (
        <PasswordWrapper>
            <Input {...props} type="password" />
            <ToggleButton>show</ToggleButton>
        </PasswordWrapper>
    );
};

export { Password };
