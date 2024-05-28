import '@testing-library/jest-dom';
import 'resize-observer-polyfill';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

Element.prototype.scrollIntoView = jest.fn();
