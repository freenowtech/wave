jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = ['basic-usage', 'no-usage'];

describe('block-to-width-100', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'block-to-width-100', { quote: 'single' }, `block-to-width-100/${test}`, {
            parser: 'tsx'
        })
    );
});
