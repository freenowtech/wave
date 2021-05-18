import React, { useState } from 'react';
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
    const [isHidden, setIsHidden] = useState<boolean>(true);
    return (
        <PasswordWrapper>
            <Input {...props} type={isHidden ? 'password' : 'text'} />
            <ToggleButton
                onClick={() => {
                    setIsHidden(prevValue => !prevValue);
                }}
            >
                {isHidden ? 'show' : 'hide'}
            </ToggleButton>
        </PasswordWrapper>
    );
};

export { Password };
