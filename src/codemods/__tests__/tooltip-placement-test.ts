jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

const tests = ['basic-usage', 'no-placement', 'multi-usage', 'local-rename'];

describe('tooltip-placement', () => {
    tests.forEach(test =>
        defineTest(__dirname, 'tooltip-placement', { quote: 'single' }, `tooltip-placement/${test}`, {
            parser: 'tsx'
        })
    );
});
