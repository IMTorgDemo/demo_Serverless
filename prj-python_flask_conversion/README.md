# Serverless Flask REST API

[blog tutorial](https://serverless.com/blog/flask-python-rest-api-serverless-lambda-dynamodb/)

# Quickstart Template

```
$ serverless install --url https://github.com/alexdebrie/serverless-flask --name my-flask-app
$ cd my-flask-app && npm run setup
```



# Dependencies

You must have docker available
wsgi module will be added to our deployment package by the serverless-wsgi plugin

configure our serverless.yml to provision the table. This involves three parts:
* Provisioning the table in the resources section;
* Adding the proper IAM permissions; and
* Passing the table name as an environment variable so our functions can use it.


```

$ virtualenv venv --python=python3
$ source venv/bin/activate
(venv) $ pip install flask
(venv) $ pip freeze > requirements.txt
$ pip install boto3
$ pip freeze > requirements.txt
```


```
$ npm init -f
$ npm install --save-dev serverless-wsgi serverless-python-requirements
$ npm install --save-dev serverless-dynamodb-local
$ sls dynamodb install
```


```
sls deploy
```




# Endpoints
* GET /users/:userId for getting a User
* POST /users for creating a new User

```
export BASE_DOMAIN=https://bl4r0gjjv5.execute-api.us-east-1.amazonaws.com/dev
$ curl -H "Content-Type: application/json" -X POST ${BASE_DOMAIN}/users -d '{"userId": "alexdebrie1", "name": "Alex DeBrie"}'
#{"name": "Alex DeBrie","userId": "alexdebrie1"}
$ curl -H "Content-Type: application/json" -X GET ${BASE_DOMAIN}/users/alexdebrie1
#{"name": "Alex DeBrie","userId": "alexdebrie1"}
```


# Test

When developing locally, the serverless-wsgi plugin sets an environment variable of IS_OFFLINE to true, so we'll use that to handle our config. 
```
$ sls dynamodb start
$ sls wsgi serve		#go to localhost:5000
```

