// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const KeyboardAlphabeticalIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M22 5v2H4v10h16V9h2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h18zm-4.6 9.4a.6.6 0 010 1.2H6.6a.6.6 0 010-1.2h10.8zm-.72-4.737c.9 0 1.436.483 1.5 1.283h-.952c-.044-.304-.231-.486-.548-.486-.404 0-.61.302-.61.905 0 .61.209.914.61.914.31 0 .501-.158.548-.463h.952c-.061.78-.615 1.26-1.5 1.26-1.075 0-1.65-.597-1.65-1.71 0-1.108.575-1.703 1.65-1.703zm-4.45-1.145v1.746h.056c.158-.364.51-.575.958-.575.826 0 1.3.616 1.3 1.68 0 1.057-.483 1.68-1.3 1.68-.463 0-.83-.207-.985-.559h-.055V13h-1.008V8.518h1.034zm-3.1.254L10.551 13H9.38l-.263-.929h-1.38L7.463 13H6.397l1.418-4.228H9.13zm3.727 1.732c-.387 0-.63.334-.633.867.003.533.243.864.633.864.387 0 .624-.33.624-.867 0-.53-.24-.864-.624-.864zm-4.397-.78h-.056l-.463 1.574h.973L8.46 9.725z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

KeyboardAlphabeticalIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default KeyboardAlphabeticalIcon;