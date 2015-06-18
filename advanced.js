'use strict';

module.exports = function cutTheMustardAdvanced(context) {
    context = context || window;
    return 'visibilityState' in context.document;
};
