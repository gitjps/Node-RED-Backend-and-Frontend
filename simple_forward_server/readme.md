The forward server is needed when accessing a Node-RED backend from a web frontend.

I used an [existing solution](https://github.com/thomassuedbroecker/hackathons_and_node-red/tree/master/simple_forward_server) and made the following modifications:
- the URL of the Node-RED backend server is a parameter (*route*) now - was hard-coded before
- an apikey is passed through 
- a Dockerized version is available,  just start the server with `docker run --rm -p 3000:3000 jps99084/simple_forward_server:0.0.2`

The following sections was originally posted [here](https://github.com/thomassuedbroecker/hackathons_and_node-red/tree/master/simple_forward_server).


# Simple forwarding server

In case of that a cors problem using **Node-RED** as **REST server** can not be fixed. I wrote a simple sample **REST forwarding server**, which has **cors enabled**. 
As a simple webapp you can use the static [webapp in this git](../simple_web_app/public/webapp.html)

Related blog post: [cors and Node-RED using a simple forwarding server](https://suedbroecker.net/2019/03/13/cors-and-node-red-using-a-simple-forward-server/)

```javascript
var cors = require("cors"); // Cors
app.use(cors());
```

_Note:_ Static sample web page uses the code from [stackoverfollow](https://stackoverflow.com/questions/49085931/how-to-call-existing-rest-api-from-a-html-form)

## Basic flow

![simple diragram](../images/simple-diagram.png)

## Local installation

```sh
git clone https://github.com/thomassuedbroecker/hackathons_and_node-red.git
cd /hackathons_and_node-red/simple_forward_server
```

```sh
npm install
```

```sh
npm start
```

## Usage

I expect you have a running Node-RED instance on IBM Cloud.

Use **postman** or the **simple webapp** in this github project (simple_web_app/readme.md). 

**postman**

I created a sample for postman. You can import the [postman collection](postman_collection/Node-RED-REST-sample.postman_collection.json) and test the forward server.

Sample output when **postman** is used:

```sh
npm start
> simple_forward_server@1.0.0 start
> node server.js

forward server is running
URL: 
 https://hackathon-node-red-tsuedbro.eu-de.mybluemix.net/getData
send request
in request 

Success: 
 {"name":"hackathon","cloud":"ibm","message":"hello world"}
```

**simple webapp**

Open the [static web page](../simple_web_app/public/webapp.html)


