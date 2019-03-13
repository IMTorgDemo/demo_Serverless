# Convert Express App to Serverless

[blog, serverless express](https://serverless.com/blog/serverless-express-rest-api/)


# Pre-requisites for local testing

```
$ npm install --save express serverless-http
$ npm install --save-dev serverless-offline
$ npm install --save-dev serverless-dynamodb-local

$ npm remove serverless-dynamodb-local
$ npm add serverless-dynamodb-local@0.2.35
$ sls dynamodb install

$ sls offline start

$ sls deploy
```






# Usage

GET /users/:userId for getting a User
POST /users for creating a new User

```
#let's create a user:
$ curl -H "Content-Type: application/json" -X POST ${BASE_DOMAIN}/users -d '{"userId": "alexdebrie1", "name": "Alex DeBrie"}'
#{"userId":"alexdebrie1","name":"Alex DeBrie"}

#Nice! We've created a new user! Now, let's retrieve the user with the GET /users/:userId` endpoint:
$ curl -H "Content-Type: application/json" -X GET ${BASE_DOMAIN}/users/alexdebrie1
#{"userId":"alexdebrie1","name":"Alex DeBrie"}
```