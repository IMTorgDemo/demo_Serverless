'use strict';

module.exports.output = (event, context, callback) => {
    // create a response
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*" // Required for CORS support to work
        },
        body: JSON.stringify('YoMama'),
    };
    callback(null, response);
};