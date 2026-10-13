import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import 'jest-styled-components';
import { type RenderResult } from '@testing-library/react';
import CustomMatcherResult = jest.CustomMatcherResult;

// Fail any test that logs a console error or warning (e.g. React warnings about unknown DOM props).
// A test that expects a log opts out by installing its own implementation: jest.spyOn(console, 'error').mockImplementation()
const FAIL_ON_CONSOLE_METHODS = ['error', 'warn'] as const;
const originalConsole = { error: console.error, warn: console.warn };
let unexpectedConsoleCalls: string[] = [];

// Applies printf-style substitutions (%s, %d, ...) the way console does, as React warnings rely on them
const formatConsoleArgs = ([message, ...args]: unknown[]): string => {
    if (typeof message !== 'string') {
        return [message, ...args].map(String).join(' ');
    }

    const formatted = message.replaceAll(/%[cdfiOos]/g, () => (args.length > 0 ? String(args.shift()) : ''));

    return [formatted, ...args.map(String)].join(' ');
};

beforeEach(() => {
    unexpectedConsoleCalls = [];

    // Plain wrappers instead of jest spies, so specs calling jest.restoreAllMocks() keep the guard
    FAIL_ON_CONSOLE_METHODS.forEach(method => {
        console[method] = (...args: unknown[]) => {
            unexpectedConsoleCalls.push(`console.${method}: ${formatConsoleArgs(args)}`);
            originalConsole[method](...args);
        };
    });
});

afterEach(() => {
    FAIL_ON_CONSOLE_METHODS.forEach(method => {
        console[method] = originalConsole[method];
    });

    if (unexpectedConsoleCalls.length > 0) {
        throw new Error(
            `Expected no console errors or warnings, received ${unexpectedConsoleCalls.length}:\n\n${unexpectedConsoleCalls.join('\n\n')}`
        );
    }
});

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace jest {
        interface Matchers<R> {
            toMatchHtmlTag(expectedTag: string): R;
        }
    }
}

expect.extend({
    toMatchHtmlTag(wrapper: RenderResult, expectedTag: string): CustomMatcherResult {
        const { firstChild } = wrapper.container;

        if (!firstChild) {
            return {
                pass: false,
                message: () => `error finding container.firstChild within given wrapper`
            };
        }

        const actualTag = firstChild.nodeName.toLowerCase();
        const pass = actualTag === expectedTag.toLowerCase();

        return {
            pass,
            message: () => `html tag <${actualTag}> does not match <${expectedTag.toLowerCase()}>`
        };
    }
});
