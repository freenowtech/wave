jest.autoMockOff();
import { defineTest } from 'jscodeshift/dist/testUtils';

defineTest(__dirname, 'block-to-width-100', { quote: 'single' }, 'block-to-width-100', { parser: 'tsx' });
