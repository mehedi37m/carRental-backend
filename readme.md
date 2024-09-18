# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

 What things you need to install the packages and how to install them.Install npm globally using npm (Node Package Manager). Open your terminal and run:

```sh
    npm install express --save
    npm install typescript --save-dev   
    npm install mongoose --save
    npm i cors
    npm i zod
    npm i dotenv
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

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```sh
PORT
DATABASE_ACCESS
NODE_ENV
```
