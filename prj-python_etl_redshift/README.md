# Chron Data ETL to Redshift



# Pre-requisites

Redshift cluster endpoint, such as: `<cluster_name>.xxxxxxxxxxxx.<region>.redshift.amazonaws.com:<port>`
Db connection string, cluster endpoint: `postgres://<username>:<password>@<hostname>:<port>/<db_name> where <hostname>:<port>`

# Develop
```
$ sls create -t aws-python3 -p serverless-etl
$ cd serverless-etl
```

`severless.yml`
Since Redshift is secured by running under a VPC, you'll need to supply the appropriate security groups, subnets, and IAM roles, as shown in  vpc group.


`handler.py`
In the init_tables() method, we first drop the table if it exists, and then create the table, if it does not exist. We are dropping the table each time because we want to store the latest set of data every time we process. If instead you want to append data to the table, do not drop the table.

Comment out database code and test api code with:
`$ sls invoke local -f etlSample`

`$ sls deploy`







END

