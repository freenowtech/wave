export const theme = {
    plain: {
        fontSize: '1rem',
        fontFamily: 'Hack, "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        color: '#001E3E',
        backgroundColor: '#F1F2F4',
        borderRadius: '0.25rem'
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#9CA7B4',
                fontStyle: 'italic'
            }
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7
            }
        },
        {
            types: ['string', 'attr-value'],
            style: {
                color: '#BF4704'
            }
        },
        {
            types: ['punctuation', 'operator'],
            style: {
                color: '#637689'
            }
        },
        {
            types: [
                'entity',
                'url',
                'symbol',
                'number',
                'boolean',
                'variable',
                'constant',
                'property',
                'regex',
                'inserted'
            ],
            style: {
                color: '#05763B'
            }
        },
        {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: {
                color: '#0750A4',
                fontWeight: 'bold'
            }
        },
        {
            types: ['function', 'deleted', 'tag'],
            style: {
                color: '#BF0820'
            }
        },
        {
            types: ['function-variable'],
            style: {
                color: '#BF00B9'
            }
        },
        {
            types: ['tag', 'selector'],
            style: {
                color: '#096BDB'
            }
        }
    ]
};
