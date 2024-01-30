import { CloseIcon, themeGet } from '@freenow/wave';

export const CloseIconWrapper = () => (
    <CloseIcon data-testid="dismissBanner" color={themeGet('semanticColors.text.primary')} cursor="pointer" size={18} />
);
