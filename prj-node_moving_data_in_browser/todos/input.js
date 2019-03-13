'use strict';
/*
sls invoke -f inputParam --data '{ "queryStringParameters": {"name":"Serverless"}}'

curl https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/inputParam?name=Serverless

(browser) https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/inputEvent?name=NEW_TEXT

sls invoke local -f inputContext

curl -X POST https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/input --data '{ "data": "Learn Serverless" }'
*/

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.inputParam = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
            message: `Hello, ${event.queryStringParameters.name}!`
        })
    };
    callback(null, response);
};

module.exports.inputEvent = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
            msg: "Here is the event data",
            data: event
        })
    };
    callback(null, response);
};

module.exports.inputContext = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({
            msg: "Here is the context data",
            data: context
        })
    };
    callback(null, response);
};






module.exports.input = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    console.log(data);

    if (typeof data.data !== 'string') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*'
            },
            body: 'Couldn\'t accept the data.',
        });
        return;
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            id: uuid.v1(),
            text: data.data,
            checked: false,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };

    // write the todo to the database
    dynamoDb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*'
                },
                body: 'Couldn\'t create item record.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
};