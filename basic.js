'use strict';

module.exports = function cutTheMustardBasic(context) {
    context = context || window;
    return  'querySelector' in context.document &&
    'localStorage' in context &&
    'addEventListener' in context;
};
