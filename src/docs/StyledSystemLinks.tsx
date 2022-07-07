import { FC } from 'react';
import * as React from 'react';
import { Link, Text } from '../components';

interface StyledSystemLinksProps {
    component: string;
    supportedProps: string[];
}

const mapping = {
    margin: 'space',
    width: 'layout',
    height: 'layout',
    borderradius: 'border'
};

export const StyledSystemLinks: FC<StyledSystemLinksProps> = ({
    component,
    supportedProps,
    ...rest
}: StyledSystemLinksProps) => {
    const propToLink = (prop: string) => {
        const lowercaseProp = prop.toLowerCase();
        const anchor: string = mapping[lowercaseProp] ? mapping[lowercaseProp] : lowercaseProp;

        return (
            <Link href={`https://styled-system.com/table/#${anchor}`} target="_blank" rel="noreferrer noopener">
                {prop}
            </Link>
        );
    };

    // eslint-disable-next-line unicorn/no-array-reduce
    const supportedPropsTextParts = supportedProps
        .map(element => propToLink(element))
        // eslint-disable-next-line unicorn/no-array-reduce
        .reduce((acc, prop, index) => {
            acc.push(prop);

            if (index !== supportedProps.length - 1) {
                const join = index === supportedProps.length - 2 ? <span> and </span> : <span>, </span>;
                acc.push(join);
            }

            return acc;
        }, []);

    return (
        <Text {...rest} as="p">
            The {component} supports{' '}
            {supportedPropsTextParts.map((c, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={index}>{c}</React.Fragment>
            ))}{' '}
            styled-system props.
        </Text>
    );
};
