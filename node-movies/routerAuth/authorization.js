(function(authorization) {
    'use strict';

    authorization.authorize = function(req, res, next) {
        console.log('This is authorization router.');
        next();
    };
})(module.exports);
