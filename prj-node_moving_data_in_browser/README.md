<!--
title: 'AWS Serverless Node REST API with React Frontend'
description: 'This example demonstrates how to setup a RESTful Web Service with a React Frontend.  The REST and Frontend allows for input using: parameters, event data, and context data.  The REST API allows you to: create, list, get, update and delete Todos. DynamoDB is used to store the data.'

original authorLink: 'https://github.com/ozbillwang'
-->
# Serverless REST API

This example demonstrates how to setup a [RESTful Web Services](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services).  The REST and Frontend allows for input using: parameters, event data, and context data.  The REST API allows you to: create, list, get, update and delete Todos. DynamoDB is used to store the data.'


## Structure

Frontend with REST API:
- input
 + inputParam
 + inputEvent
 + inputContext
 + input
 + output

REST API with DynamoDb:
- create
- delete
- get
- list



## Setup

```bash
npm install
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```


## Usage

### Frontend

The fronted files are maintained in `/frontend` and `/todos/input.js`

```
sls invoke -f inputParam --data '{ "queryStringParameters": {"name":"Serverless"}}'

curl https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/inputParam?name=Serverless

(browser) https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/inputEvent?name=NEW_TEXT

sls invoke local -f inputContext

curl -X POST https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/input --data '{ "data": "Learn Serverless" }'
```
`(browser) https://o0kzk23kf3.execute-api.us-east-1.amazonaws.com/dev/home`


### REST API with DynamoDb

The REST API is maintained in a separate file for each route in `/todos`: create, retrieve, update, or delete todos with the following commands.

_Create_

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos --data '{ "text": "Learn Serverless" }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

_List all Todo_

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90feaa11e6-9ede-afdfa051af86","checked":true,"updatedAt":1479139961304},{"text":"Learn Serverless","id":"206793aa11e6-9ede-afdfa051af86","createdAt":1479139943241,"checked":false,"updatedAt":1479139943241}]%
```

_Get one Todo_

```bash
# Replace the <id> part with a real id from your todos table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":false,"updatedAt":1479138570824}%
```

_Update a Todo_

```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":true,"updatedAt":1479138570824}%
```

_Delete a Todo_

```bash
# Replace the <id> part with a real id from your todos table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

No output


