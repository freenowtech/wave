export default {
    light: {
        plain: {
            fontFamily:
                "'Hack', 'Fira Code', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', monospace",
            color: '#001E3E',
            backgroundColor: '#F1F2F4',
            fontSize: '1rem'
        },
        styles: [
            {
                types: ['comment', 'prolog', 'doctype', 'cdata'],
                style: {
                    color: '#05763B',
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
                    color: '#001E3E'
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
                    color: '#069D4F'
                }
            },
            {
                types: ['atrule', 'keyword', 'attr-name', 'selector'],
                style: {
                    color: '#BF0820'
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
                    color: '#6f42c1'
                }
            },
            {
                types: ['tag', 'selector', 'keyword'],
                style: {
                    color: '#0750A4'
                }
            }
        ]
    }
};
