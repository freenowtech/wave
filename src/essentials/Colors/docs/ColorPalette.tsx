import React, { FC } from 'react';
import { Color, ColorProps } from './Color';

interface ColorPaletteProps {
    colors: ColorProps[];
}

const ColorPalette: FC<ColorPaletteProps> = ({ colors }: ColorPaletteProps) => (
    <div>
        {colors.map(color => (
            <Color
                key={color.colorCode}
                name={color.name}
                colorCode={color.colorCode}
                invertedText={color.invertedText}
            />
        ))}
    </div>
);

export { ColorPalette };
