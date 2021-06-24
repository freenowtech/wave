/* tslint:disable:no-submodule-imports */
import '@testing-library/jest-dom/extend-expect';
import { RenderResult } from '@testing-library/react';
import 'jest-axe/extend-expect';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
import 'jest-styled-components';
import { setDefaultOptions } from 'jsdom-screenshot';
import CustomMatcherResult = jest.CustomMatcherResult;

declare global {
    namespace jest {
        interface Matchers<R, T> {
            toMatchHtmlTag(expectedTag: string): R;

            toMatchImageSnapshot(): R;
        }
    }
}

// TravisCI and Linux OS require --no-sandbox to be able to run the tests
// https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-on-travis-ci
setDefaultOptions({
    launch: { args: process.env.CI === 'true' ? ['--no-sandbox'] : [] }
});

// mock the source of randomness in all the tests
jest.mock('./ids');

expect.extend({
    toMatchImageSnapshot,
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
