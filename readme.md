# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## clone the repo and run the command

```sh
  npm i 
```

## Prerequisites

 What things you need to install the packages and how to install them.Install npm globally using npm (Node Package Manager). Open your terminal and run:

```sh
    npm install express --save
    npm install typescript --save-dev   
    npm install mongoose --save
    npm i cors
    npm i zod
    npm i dotenv
    npm i bcrypt
    npm i jsonwebtoken
    npm i http-status
    npm i -D nodemon
    npm i ts-node-dev --save-dev
```

## Installation of tsconfig

- run the command

```bash
 tsc --init
```

- open tsconfig.json and add the following lines
- find rootDir and outDir set the location of your folders.

## To Install prettier in your environment

- run the command

```bash
 npm install --save-dev prettier
```

## Usage/Examples for setting prettier

```javascript
// .prettierrc.json
{
  "semi": true,
  "singleQuote": true,
}
```

## You can read in the following blog

- [prettier blog link](https://blog.logrocket.com/linting-typescript-eslint-prettier)
- [data blog link](https://chatgpt.com/share/66ee1d1e-908c-8013-831d-32572bd2a30a)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```sh
PORT=5000
DATABASE_ACCESS=mongodb+srv://usrName:password@cluster0.hncbqqn.mongodb.net/databaseName?retryWrites=true&w=majority
NODE_ENV=development
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=130fb4f665d44f20bb19f4e8ae07d44512e2cb04fea8c5492741bf5d496150b7
JWT_REFRESH_SECRET=130fb4f665d44f20bb19f4e8ae
JWT_ACCESS_EXPIRES_IN=1D
JWT_REFRESH_EXPIRES_IN=30D
```
