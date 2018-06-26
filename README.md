# AWS-Amplify-Ionic-Sample

This is a sample application demonstrating the use of the AWS Amplify library with Ionic 4.  

## Getting Started

The branches of this project correspond to tutorials that walk you through the development of this application.  For specific information about running these branches, check out the tutorials <ADD LINKS WHEN COMPLETE>.

The following instructions are meant to be used with the master branch, which is the final version of the app.

Install the Ionic 4 CLI:
```
npm i -g ionic@rc
```

Create the Ionic 4 starter project:
```
ionic start <your-app-name> tabs --type=angular
```

Install the AWS Mobile CLI (if you haven't already):
```
npm i -g awsmobile-cli
```

Make sure that you have an AWS Access Key ID, Secret Access Key, and region where you want your project to be created.  Then, run the following command (again, if you haven't already done so):
```
awsmobile configure
```
...and follow the prompts to enter your AWS information.


Create the AWS Mobile Hub project by running the following commands and entering information when prompted:
```
cd <your-app-name>
awsmobile init
```

Setup your Amazon Pinpoint and Cognito resources:
```
awsmobile analyics enable
awsmobile user-signin enable
```

Setup your Amazon DynamoDB Table:
```
awsmobile database enable
awsmobile database configure
```
You will then be promted with several questions. Select 'Create a new table', specificy that it is 'Open' and name it 'ToDoItems'.
Then, add three columns when prompted:
userId: string
items: list
Select 'userId' as the primary key. Do not create a sort key or an index.
Disclaimer: this is a very quick-and-dirty data model for Amazon DynamoDB. For more information on how to configure a production-grade DyanmoDB implementation, see the best practices documentation.


Create a Lambda to Access your Amazon DynamoDB Table:
```
awsmobile cloud-api enable
awsmobile cloud-api configure
```
When prompted, select 'Create CRUD API for an existing Amazon DynamoDB table", and then select 'ToDoItems' and restrict access to signed-in users.

Deploy the resources to AWS
```
awsmobile push
```

Run the application:
```
ionic serve
```


### Prerequisites

In addition to the setup listed above, this app will require a modern version of NodeJS.


## License

This project is licensed under the Apache License - see the [LICENSE.md](LICENSE.md) file for details
