import { CloseIcon, getSemanticValue } from '@freenow/wave';

export const CloseIconWrapper = () => (
    // TODO find equivalent colors
    <CloseIcon data-testid="dismissBanner" color={getSemanticValue('SemanticColors.button.primary.backgroundDisabled')} cursor="pointer" size={18} />
);
