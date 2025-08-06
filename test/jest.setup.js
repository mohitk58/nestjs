// Jest setup file to fix expect compatibility
const { expect } = require('@jest/globals');

// Make expect available globally
global.expect = expect;
