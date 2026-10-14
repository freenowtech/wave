import { version } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { App, EXPECTED_TEXT } from './App';

// Server-render the app and fail on missing output or any React warning (e.g. props leaking to the DOM)
const consoleMessages: string[] = [];
for (const method of ['error', 'warn'] as const) {
    const original = console[method];
    console[method] = (...args: unknown[]) => {
        consoleMessages.push(args.map(String).join(' '));
        original(...args);
    };
}

const sheet = new ServerStyleSheet();

try {
    const html = renderToString(sheet.collectStyles(<App />));
    const styleTags = sheet.getStyleTags();

    const missingText = EXPECTED_TEXT.filter(text => !html.includes(text));
    if (missingText.length > 0) {
        throw new Error(`Server-rendered HTML is missing: ${missingText.join(', ')}`);
    }
    if (!styleTags.includes('<style')) {
        throw new Error('styled-components collected no styles during server rendering');
    }
    if (consoleMessages.length > 0) {
        throw new Error(`Server rendering logged ${consoleMessages.length} warning(s):\n${consoleMessages.join('\n')}`);
    }

    console.log(`SSR OK with React ${version}: ${html.length} bytes of HTML, ${styleTags.length} bytes of styles`);
} finally {
    sheet.seal();
}
