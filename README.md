### <b>User-Authorization</b> 
- This repository contains backend code developed for User-Authorization (Signup and Login)

### <b>Functionalities<b>
- Signup
- Login

<br>

<details open="open">
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
      <li> <a href="#built-with">Built With</a> </li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#storage">Storage options</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#functionalities to be implemented">Functionalities to be implemented</a></li>
    <li><a href="#directory-tree">Directory-tree</a></li>


  </ol>
</details>
<br>

### <b>Prerequisites</b>
- Knowledge of Javascript(ES5,ES6)
- Node.js installed on system
- JWT
- Git installed on system
<br>

### <b>Built With</b>
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [REST API](https://restfulapi.net/)
<br>


### <b>Installation</b>
- Open terminal,redirect to the folder where you want this repository.
- Type the following commands in order to ensure,the project is now available on your machine with all the necessary packages installed

1. Clone the repo
   ```sh
   git clone https://github.com/s3kamble/User-Authorization-Backend.git
   ```
2. Install required NPM packages
   ```sh
   npm install
   ```
3. Start with the following command
   ```sh
   npm run start
<br>

## <u><b>Storage</b></u>
<ul>
  <li>
    <ol>
      <li>The data will be stored on cloud(Atlas)</li>
      <li>Advantage:Data available online and can be accesed on any device</li>
    </ol>
  </li>
</ul>


## <u><b>Usage</b></u>

 - To test the  endpoints and check the response,use "Postman" app :
 
   [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17003746-3d08a5d9-0072-4e98-911d-5974cc9fa116?action=collection%2Ffork&collection-url=entityId%3D17003746-3d08a5d9-0072-4e98-911d-5974cc9fa116%26entityType%3Dcollection%26workspaceId%3D29424687-6818-4cf4-8fe6-db66728f90f7)

- URL to use in frontend app
1. Signup:
   ```sh
   localhost:3002/users/signup
   ```
2. Login:
```sh
   localhost:3002/users/login
   ```

<br>

## <u><b>Functionalities to be implemented</b></u>
- User Profile Image
<br>

### <b>Directory-tree</b>
```

├── app.js
├── authentication.js
├── config.env
├── _.config.yml
├── controllers
│   ├── imageController.js
│   └── userController.js
├── data
├── models
│   └── userModel.js
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
├── routes
│   └── userRouter.js
├── sampleConfig.env
├── server.js
└── utils
    └── sendResponse.js


```

