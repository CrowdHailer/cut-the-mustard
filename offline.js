'use strict';

module.exports = function (context) {
    context = context || window;
    return 'serviceWorker' in context.navigator;
};
