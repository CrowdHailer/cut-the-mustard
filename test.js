// Fetch node test library
var assert = require('assert');

// Basic cut the mustard conditions
var ctmBasic = require('cut-the-mustard/basic');

var basicWindow = {
    document: {querySelector: function(){}},
    localStorage: {},
    addEventListener: function(){}
};

assert.equal(true, ctmBasic(basicWindow));

var noQuerySelectorWindow = {
    document: {},
    localStorage: {},
    addEventListener: function(){}
};

assert.equal(false, ctmBasic(noQuerySelectorWindow));

var noLocalStorageWindow = {
    document: {querySelector: function(){}},
    addEventListener: function(){}
};

assert.equal(false, ctmBasic(noLocalStorageWindow));

var noAddEventListener = {
    document: {querySelector: function(){}},
    localStorage: {}
};

assert.equal(false, ctmBasic(noAddEventListener));

// Test is available on collection object
assert.equal(ctmBasic, require('cut-the-mustard').basic);

// Advanced cut the mustard conditions
var ctmAdvanced = require('cut-the-mustard/advanced');

var advancedWindow = {
    document: {visibilityState: 'visible'}
};

assert.equal(true, ctmAdvanced(advancedWindow));


var noVisibilityStateWindow = {
    document: {}
};

assert.equal(false, ctmAdvanced(noVisibilityStateWindow));

// Test is available on collection object
assert.equal(ctmAdvanced, require('cut-the-mustard').advanced);

// Offline cut the mustard conditions
var ctmOffline = require('cut-the-mustard/offline');

var offlineWindow = {
    navigator: {serviceWorker: {}}
};

assert.equal(true, ctmOffline(offlineWindow));


var noServiceWorkerWindow = {
    navigator: {}
};

assert.equal(false, ctmOffline(noServiceWorkerWindow));

// Test is available on collection object
assert.equal(ctmOffline, require('cut-the-mustard').offline);
