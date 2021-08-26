import * as React from 'react';
import { Link, Text } from '../components';

const mapping = {
    margin: 'space',
    width: 'layout',
    height: 'layout',
    borderradius: 'border'
};

export const StyledSystemLinks = ({ component, supportedProps, ...rest }) => {
    const propToLink = prop => {
        const lowercaseProp = prop.toLowerCase();
        const anchor = mapping[lowercaseProp] ? mapping[lowercaseProp] : lowercaseProp;

        return (
            <Link href={`https://styled-system.com/table/#${anchor}`} target="_blank" rel="noreferrer noopener">
                {prop}
            </Link>
        );
    };

    const supportedPropsTextParts = supportedProps.map(propToLink).reduce((acc, prop, index) => {
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
                <React.Fragment key={index}>{c}</React.Fragment>
            ))}{' '}
            styled-system props.
        </Text>
    );
};
