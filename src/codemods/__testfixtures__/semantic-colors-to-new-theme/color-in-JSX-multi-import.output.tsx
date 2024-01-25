import { CloseIcon, getSemanticValue } from '@freenow/wave';

export const CloseIconWrapper = () => (
    <CloseIcon data-testid="dismissBanner" color={getSemanticValue('background-element-disabled-default')} cursor="pointer" size={18} />
);
