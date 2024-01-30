import { CloseIcon, SemanticColors } from '@freenow/wave';

export const CloseIconWrapper = () => (
    <CloseIcon data-testid="dismissBanner" color={SemanticColors.button.primary.backgroundDisabled} cursor="pointer" size={18} />
);
