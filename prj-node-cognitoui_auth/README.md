# Serverless Cognito

## Setup

1. `serverless deploy`

Besides deploying the service, we need to manually configure some details, since CloudFormation falls short. So, in the Cognito Dashboard, select the User Pool and follow the steps below:

2. Go to Cognito and select User Pool with userPoolName and userPoolClientName

3. Select "App client settings", enable Cognito User Pool as a provider and enter the 
    * callback as: http://localhost:3000
    * sign out URLs: http://localhost:3000
    * "Implicit grant" as allowed OAuth flow and tick all the scopes
    * note the App Client ID (top of page) (ex.`ID melmnh82pii7nuhjc921ru2i3`)
4. Select "Domain name" and just use the one from your deployed endpoint

**PROBLEM:** when sls creates user pool, it does not have permissions - only when I do through console


## Usage

1. Open a web browser and go to `https://<your_domain>/login?response_type=token&client_id=<your_app_client_id>&redirect_uri=<your_callback_url>`
2. After signing-up and logging-in successfully (with email), you'll be redirected to your calback URL with `id_token` in the query string
3. Put `id_token`  in the `Authorization` HTTP header when submitting requests to the API


## Work Area

Send
```
https://bi5foc6qlj.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=melmnh82pii7nuhjc921ru2i3&redirect_uri=http://localhost:3000
```

Receive
```
http://localhost:3000/
#id_token=
eyJraWQiOiJOOTYzQjhIbWJmSjNqMXdvT0RXOCt4U0tkaG5GZFVvWHBcL1VpVndnSEtEVT0iLCJhbGciOiJSUzI1NiJ9....
&
access_token=eyJraWQiOiIxRkRNTGVrR1Q4TmVKOCtXQVZqcDM3eDFwMWVRU2E5aUJPQW5WU1wvWXczTT0iLCJhbG...
expires_in=3600&token_type=Bearer
```

Validated Request
```
curl -X GET \
  https://zagz0u4kp0.execute-api.us-east-1.amazonaws.com/dev/hiAll \
  -H 'Authorization: Bearer eyJraWQiOiJOOTYzQjhIbWJmSjNqMXdvT0RXOCt4U0tkaG5GZFVvWHBcL1VpVndnSEtEVT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiRXVOanA5NU56ckV2X3pMeEF6c0FEUSIsInN1YiI6ImYzY2ZmMDQzLTVhZmMtNDM0My04OGQ3LThiYjE0MDA0NWFhYyIsImF1ZCI6Im9zNWdwbGIycHJnNXFkNmtiZzRjNm1lcDciLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZXZlbnRfaWQiOiJlZDgyY2Y0Yi00MWNiLTExZTktYmQ0YS1kMTUzNmQxYzkxOTMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU1MjA2Nzk3MywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfblZXbWVUNEtlIiwiY29nbml0bzp1c2VybmFtZSI6IlRlc3QiLCJleHAiOjE1NTIwNzE1NzMsImlhdCI6MTU1MjA2Nzk3MywiZW1haWwiOiJxMjA0Mjc1QG53eXRnLm5ldCJ9.s9N-1obEADKAFnHwQka9si9_UhUb0Dazrc_reakabXZVdjOAnBVvKVYkGu9cUwnkrwKEnQvoY6wmVkY4S4P8CX8xC8qJ2sLvUOvWGG0eubCJOwyMNhO5nvCgO9PO4BucbK6Rw4UWtyFL9vrQvPI6TZHE2qeF-SIL-X6s8KgYzX_8jIfhYR4LB_hmebpJI3PFM1VFzcVu-ld9FBKTDv-JyNzHsGzc8BFSbtThga7PnqORY02AUiIyRXxUUk-eH6g8CpkYULTEDIlYv6ZzXFQQlc9B1Iumg1uAjiSOZthC4hnx14B-eam0s7PXT5g4mqALlZ7QR9UvpXzcigLfYd9LXw' \
  -H 'Postman-Token: ba2ec3ab-89f0-49b3-80ac-d99712be26b8' \
  -H 'cache-control: no-cache'
```



