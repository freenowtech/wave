import { TooltipPlacement } from '../TooltipPlacement';

// we need to convert the users `placement` prop to react-tether `attachment` and `targetAttachment`
export const getAttachmentFromPlacement = (
    placement: TooltipPlacement
): { attachment: string; targetAttachment: string } => {
    switch (placement) {
        case 'bottom-left':
            return {
                attachment: 'top left',
                targetAttachment: 'bottom left'
            };

        case 'bottom-center':
            return {
                attachment: 'top center',
                targetAttachment: 'bottom center'
            };
        case 'bottom-right':
            return {
                attachment: 'top right',
                targetAttachment: 'bottom right'
            };
        case 'top-left':
            return {
                attachment: 'bottom left',
                targetAttachment: 'top left'
            };
        case 'top-center':
            return {
                attachment: 'bottom center',
                targetAttachment: 'top center'
            };
        case 'top-right':
            return {
                attachment: 'bottom right',
                targetAttachment: 'top right'
            };
        case 'center-left':
            return {
                attachment: 'middle right',
                targetAttachment: 'middle left'
            };
        case 'center-right':
            return {
                attachment: 'middle left',
                targetAttachment: 'middle right'
            };
        default:
            return {
                attachment: 'bottom center',
                targetAttachment: 'top center'
            };
    }
};
