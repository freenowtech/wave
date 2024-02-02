import { CloseIcon, getSemanticValue } from '@freenow/wave';

export const CloseIconWrapper = () => (
    <CloseIcon data-testid="dismissBanner" color={getSemanticValue('foreground-primary')} cursor="pointer" size={18} />
);
