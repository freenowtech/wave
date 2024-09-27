import React, { ReactElement } from 'react';
import { Dialog, DialogTrigger, Popover as BasePopover, PopoverProps as BasePopoverProps } from 'react-aria-components';
import styled from 'styled-components';
import { getSemanticValue } from '../../../essentials/experimental';
import { get } from '../../../utils/experimental/themeGet';

interface PopoverProps extends Omit<BasePopoverProps, 'children'> {
    children: React.ReactNode;
}

const StyledPopover = styled(BasePopover)`
    background: ${getSemanticValue('surface')};
    padding: ${get('space.4')};
    box-shadow: 0 2px 4px -1px hsla(0, 0%, 0%, 0.2), 0 1px 10px 0 hsla(0, 0%, 0%, 0.12),
        0 4px 5px 0 hsla(0, 0%, 0%, 0.14);
    border-radius: ${get('radii.4')};
`;

const FocusTrap = styled(Dialog)`
    outline: 0;
`;

function Popover({ children, placement = 'bottom', offset = 8, ...props }: PopoverProps): ReactElement {
    return (
        <StyledPopover placement={placement} offset={offset} {...props}>
            <FocusTrap>{children}</FocusTrap>
        </StyledPopover>
    );
}

export { Popover, DialogTrigger as PopoverTrigger };
