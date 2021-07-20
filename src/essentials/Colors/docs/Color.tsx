import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Text } from '../../../components';
import { Colors } from '../Colors';

interface ColorProps {
    name?: string;
    colorCode?: Colors;
    invertedText?: boolean;
}

const ColorWrapper = styled.div<ColorProps>`
    box-sizing: border-box;
    display: inline-block;
    padding: 1.25rem;
    width: 100%;
    height: 5.75rem;
    background-color: ${p => p.colorCode};
    transition: transform 75ms;
    border-width: 0.0625rem;
    border-style: solid;
    border-color: ${p => (p.colorCode == '#FFFFFF' ? Colors.AUTHENTIC_BLUE_200 : p.colorCode)};
    cursor: pointer;

    &:hover {
        transform: scale(1.025);
    }
`;

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
    } finally {
        document.body.removeChild(textArea);
    }
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }

    navigator.clipboard.writeText(text);
}

const Color: FC<ColorProps> = props => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleClick = () => {
        copyTextToClipboard(props.colorCode.replace('#', ''));
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <ColorWrapper {...props} onClick={handleClick}>
            {hasCopied == true ? (
                <Text as="p" inverted={props.invertedText} fontWeight="semibold">
                    Copied!
                </Text>
            ) : (
                <>
                    <Text as="p" inverted={props.invertedText} fontWeight="semibold" mb={1}>
                        {props.name}
                    </Text>
                    <Text as="p" inverted={props.invertedText} fontSize={1} style={{ fontFamily: 'monospace' }}>
                        {props.colorCode}
                    </Text>
                </>
            )}
        </ColorWrapper>
    );
};

export { Color, ColorProps };
