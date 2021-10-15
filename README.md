# Mow Lawn API
A one-endpoint API to mow a Lawn. Originally made for an interview process this is a project to get familiar with Typescript.

The core of the exercise **required by the interview** is witheld in the ```src/services/mowLawn``` folder

## Pre-requisities
Runs on Node versions >= 12

Install dependencies using npm
```
npm install
```

## How to run
Make sure the port 3000 is free (suggested) or pass another port in the environment variable "API_PORT"
Run the API using the command
```
npm run start
```
Run the TESTS using the command
```
npm run test
```

## Documentation
Once the server is running locally visit ```localhost:PORT/docs``` to take a look at the API documentation and test it. There you can also download a postman collection where you only have to attach a valid input file to the API call

## Real world
This is far to be production ready in a real world, i decided to skip some trivial things including:
- environments: in a real world you would have the api served in at least 3 environments with config changing between environments
- a ci / cd pipeline should be added to the project
- there is no authentication
- etc..

## Notes
**ts-node-dev** is the Typescript replacement for Nodemon. It allows to run the ts file directly. This is to avoid having to stop the server to run tsc && node ./index.ts

**Typescript** this project is a way for me to get used to Typescript coming from JS, dont hesitate to point wrong use of types or other programming patterns.
## License
MIT
