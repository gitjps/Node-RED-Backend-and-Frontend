** UNDER CONSTRUCTION **

# Motivation

Node-RED based applications are often used in hackathons and prototypes and I thought it would be nice to have a starter kit, consisting of a simple backend and a database to 
- store, retrieve and change data, and
- integrate with other systems.

# Overview
This solution consists of 
- a database (in this case a Cloudant database, could be a different as well)
- a backend app (business logic, interfaces to external systems, CRUD requests to a Cloudant database).

For testing and demonstration purposes it als has
- a simple Node-RED frontend to invoke the CRUD requests, and
- a simple forwarding server.

![Architecture](Node-RED-Backend.jpg)

# Prequisites
- IBM Cloud account
- basic Node-RED & Docker knowledge

# Backend app
The backend app receives https requests, performs some actions and returns the result.
## Installation
- on the IBM Cloud install Node-RED, create a Cloudant service and bind the Cloudant service to the Node-RED app, see [A SHORT INTRODUCTION OF THE NODE-RED STARTER KIT ON IBM CLOUD FOR HACKATHONS](https://suedbroecker.net/2020/03/09/a-short-introduction-of-the-node-red-starter-kit-on-ibm-cloud-for-hackathons/)
- import the [Node-RED flow](https://github.com/gitjps/Node-RED-Cloudant-CRUD/blob/master/Node-RED.json) 
- deploy the flow

## Endpoints

- Create doc
- Get all docs
- Get/read doc
- Update doc
- Delete doc

![Node-RED flow](node-red-crud.jpg)

The backend app could also integrate with external systems or perform some data processing, but this is not implemented yet.

## How it works
The API key is set when the flow starts (initialization node). When a request is received (e.g. *Create doc*), the header parameter *apikey*  is checked first. If it is not correct, a 401 error is thrown. Otherwise the requested CRUD action is performed.

A REST calls in Node-RED flows cannot be invoked directly from a web application, a simple [forward server](/simple_forward_server) is needed. Once it is implemented you can use the simple Node-RED or any other web frontend.

## Next steps

Use the [Postman collection](https://github.com/gitjps/Node-RED-Backend-and-Frontend/blob/master/NODE-RED-Cloudant-CRUD.postman_collection.json) to test the backend. Then go ahead and install the [simple forwarding server](https://github.com/gitjps/Node-RED-Backend-and-Frontend/tree/master/simple_forward_server).
