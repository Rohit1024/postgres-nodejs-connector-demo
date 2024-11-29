
# Connect a Node.js application on Cloud Run to a Cloud SQL for PostgreSQL database

Using [Cloud SQL Node.js connector](https://github.com/GoogleCloudPlatform/cloud-sql-nodejs-connector) to securely connect your Node.js application to your Cloud SQL database. 

This repository will demonstrate how to connect a Node.js application on Cloud Run to a Cloud SQL for PostgreSQL database securely with a service account using IAM Authentication.




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`INSTANCE_CONNECTION_NAME` = "{PROJECT_ID}:{REGION}:{INSTANCE_NAME}"

`DB_USER` = "sql-client-service-account@{PROJECT_ID}.iam"

`DB_PASS` = (optional, if followed the `cloudsql.iam_authentication`)

`PRIVATE_IP` = (conditional) if true it will use PRIVATE_IP is not set it will use PUBLIC_IP to connect to Cloud SQL

`DB_NAME` = your-database


## Supported Documentation

[Connect a Node.js application on Cloud Run to a Cloud SQL for PostgreSQL database](https://codelabs.developers.google.com/codelabs/cloud-sql-nodejs-connector)

