import { FC } from 'react';
import * as React from 'react';

import { styled } from 'styled-components';
import { Elevation } from '../../essentials';
import { getSemanticValue } from '../../utils/cssVariables';
import { XCrossIcon, MagnifierIcon } from '../../icons';
import { useControlledState } from '../../utils/hooks/useControlledState';
import { Box, BoxProps } from '../Box/Box';

import { Input, type InputProps } from '../Input/Input';

const ActiveStyle = `
    background-color: ${getSemanticValue('background-element-info-default')};
    color: ${getSemanticValue('foreground-info-faded')};
`;

const SearchResultsContainer = styled(Box)`
    position: absolute;
    z-index: ${Elevation.SUGGESTIONS_LIST};
    margin-top: 0.0625rem;
    padding: 0.25rem 0;
    width: inherit;
    background-color: ${getSemanticValue('background-page-elevation-1')};
    box-shadow: 0 0.125rem 0.5rem 0.0625rem ${getSemanticValue('shadow-default')};
    border-radius: 0.25rem;
    cursor: pointer;
`;

const ActiveBox = styled(Box)`
    &[aria-selected='true'] > div {
        ${ActiveStyle}
    }
`;

interface SearchInputContainerProps extends BoxProps {
    isInFocus: boolean;
}

const SearchInputContainer = styled(Box)<SearchInputContainerProps>`
    box-sizing: border-box;
    background: ${getSemanticValue('background-page-default')};
    border-radius: 0.25rem;
    border: ${p => `0.0625rem solid ${getSemanticValue(p.isInFocus ? 'border-focus' : 'border-neutral-default')}`};
    box-shadow: ${p => (p.isInFocus ? `inset 0 0 0 0.0625rem ${getSemanticValue('border-focus')}` : 'none')};
    height: ${p => (p.size === 'small' ? '2.2rem' : '3.2rem')};
    transition: box-shadow 100ms ease, border 100ms ease;
`;

const StyledInput = styled(Input)`
    width: 100%;

    input {
        caret-color: ${getSemanticValue('foreground-info-faded')};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${p => getSemanticValue(p.disabled ? 'foreground-disabled' : 'foreground-neutral-default')};
            opacity: 1;
        }

        &:focus,
        &:active {
            outline: 0;
            border: 0;
            box-shadow: unset;
        }

        text-overflow: ellipsis;

        ::-webkit-search-cancel-button {
            display: none;
        }
    }
`;

export interface SearchProps extends Omit<InputProps, 'results'> {
    results?: React.ReactNode[];
    /**
     * Sets the value
     */
    value?: string;
    /**
     * Function to set the value
     */
    setValue?: (value: string) => void;
    /**
     * show results dropdown
     */
    showResults?: boolean;
    /**
     * Function to show and hide the dropdown
     */
    setShowResults?: (value: boolean) => void;
    /**
     * Sets the width of the search box
     */
    width?: string;
    /**
     * This function is called when the "Enter" key is pressed or the search icon is clicked
     */
    onEnter?: (value: string) => void;
    /**
     * This function is called when the selection is changed. It emits the selected index
     */
    onChangeSelection?: (index: number) => void;
    /**
     * This function is called when the value in the search box changes
     */
    onInputChange?: (value: string) => void;
    /**
     * This function is called when the search box is cleared
     */
    onClear?: () => void;
}

const prefix = 'result-item';

export const Search: FC<SearchProps> = ({
    results = [],
    value: propsValue,
    setValue: setPropsValue,
    showResults: propsShowResults,
    setShowResults: setPropsShowResults,
    width,
    placeholder = 'Search...',
    disabled,
    size,
    onInputChange,
    onClear,
    onEnter,
    onChangeSelection,
    ...props
}: SearchProps) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [isInFocus, setIsInFocus] = React.useState<boolean>(false);

    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    const [value, setValue] = useControlledState<string>([propsValue, setPropsValue], '');

    const [showResults, setShowResults] = useControlledState<boolean>([propsShowResults, setPropsShowResults], false);

    // this is to keep track of keypress events (up, down, enter, escape)
    React.useEffect(() => {
        // we're trying to calculate how many search result options will be rendered, to enable moving up and down through them
        // if we specify customResultLength, that will be taken.
        // if not, we'll check if children is an array, and if so take its length
        // if not just assume there is only one child
        const elementLength: number = Array.isArray(results) ? results.length : 1;

        // emits onChangeSelection on ArrowDown and ArrowUp, onEnter on Enter, onBlur on Escape
        const emitKeyEvent = ({ key }: KeyboardEvent) => {
            if (!isInFocus) return;
            switch (key) {
                case 'ArrowUp': {
                    const index = activeIndex > 0 ? (activeIndex - 1) % elementLength : elementLength - 1;
                    setActiveIndex(index);
                    onChangeSelection?.(index);
                    break;
                }

                case 'ArrowDown': {
                    const index = (activeIndex + 1) % elementLength;
                    setActiveIndex(index);
                    onChangeSelection?.(index);
                    break;
                }

                case 'Enter': {
                    const el = document.querySelector(`#${prefix}-${activeIndex}`);
                    (el?.children[0] as HTMLElement)?.click();
                    onEnter?.(value);
                    break;
                }

                case 'Escape':
                    setShowResults(false);
                    break;

                default:
                    break;
            }
        };
        document.addEventListener('keydown', emitKeyEvent);
        return () => {
            document.removeEventListener('keydown', emitKeyEvent);
        };
    }, [isInFocus, activeIndex, setActiveIndex, onChangeSelection, onEnter, value, propsValue, results]);

    // this is to keep track of clicks outside the component (useful to close the search results)
    React.useEffect(() => {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        const emitIfClickingOutsideSearch = (event: DocumentEventMap['click']) => {
            if (disabled) return;
            if (!containerRef.current.contains(event.target as Element)) {
                setShowResults(false);
            } else {
                setShowResults(true);
            }
        };
        document.addEventListener('click', emitIfClickingOutsideSearch);
        return () => {
            document.removeEventListener('click', emitIfClickingOutsideSearch);
        };
    }, [showResults, setShowResults, disabled]);

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowResults(true);
        const searchText: string = event.target.value;
        setValue?.(searchText);
        onInputChange?.(searchText);
    };

    return (
        // this is a div to make attaching the ref a walk in the park :)
        <div
            ref={containerRef}
            // give it the width passed down to it
            style={{
                width
            }}
            role="search"
        >
            <SearchInputContainer
                isInFocus={isInFocus}
                display="flex"
                flexDirection="row"
                alignItems="center"
                width="100%"
                size={size}
            >
                <Box
                    // passing styled-system props gives "No overload matches this call" lint error.
                    style={{
                        display: 'flex',
                        margin: size === 'small' ? '0.5rem' : '1rem',
                        marginRight: 'auto'
                    }}
                    onClick={() => !disabled && onEnter?.(value)}
                >
                    <MagnifierIcon
                        size={size === 'small' ? 20 : 24}
                        aria-hidden="true"
                        color={getSemanticValue(disabled ? 'foreground-disabled' : 'foreground-neutral-default')}
                    />
                </Box>

                <StyledInput
                    size={size}
                    type="search"
                    disabled={disabled}
                    aria-label={placeholder}
                    autoComplete="off"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChangeValue}
                    onFocus={() => setIsInFocus(true)}
                    onBlur={() => setIsInFocus(false)}
                    {...props}
                />

                {!value ? undefined : (
                    <Box
                        aria-label="clear-search"
                        style={{ margin: '1rem', marginLeft: 'auto', cursor: 'pointer', display: 'flex' }}
                        onClick={() => {
                            setValue?.('');
                            onClear?.();
                        }}
                        role="button"
                    >
                        <XCrossIcon aria-hidden="true" color={getSemanticValue('foreground-neutral-default')} />
                    </Box>
                )}
            </SearchInputContainer>

            {showResults && results.length > 0 && (
                <SearchResultsContainer role="listbox">
                    {results.map((result, index) => (
                        <ActiveBox
                            role="option"
                            id={`${prefix}-${index}`}
                            key={
                                // eslint-disable-next-line react/no-array-index-key
                                index
                            }
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseMove={() => setActiveIndex(index)}
                            aria-selected={activeIndex === index}
                        >
                            {result}
                        </ActiveBox>
                    ))}
                </SearchResultsContainer>
            )}
        </div>
    );
};
