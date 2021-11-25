import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import 'jest-styled-components';
import { RenderResult } from '@testing-library/react';
import CustomMatcherResult = jest.CustomMatcherResult;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace jest {
        interface Matchers<R> {
            toMatchHtmlTag(expectedTag: string): R;
        }
    }
}

// mock the source of randomness in all the tests
jest.mock('./ids');

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
