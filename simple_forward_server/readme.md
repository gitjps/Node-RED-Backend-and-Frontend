# Introduction
The forwarding server is needed when accessing a Node-RED backend from a web frontend, see  [this tutorial](https://github.com/thomassuedbroecker/hackathons_and_node-red/tree/master/simple_forward_server) for more details. 

# Overview

I made some modifications to the orginial solution to make it more secure and simpler to deploy:
- the URL of the Node-RED backend server is a parameter (*route*) now - was hard-coded before,
- an apikey is passed through in the header section of the http request, and
- a Dockerized version is available.

# Prerequisites
Docker or Docker Desktop needs to be installed on the machine. The forwarding server can run on any machine as long it is accessible. 

# Installation
Just start the server with `docker run --rm -p 3000:3000 jps99084/simple_forward_server:0.0.2`

# Remark
If you are considering deploying this modified forwarding server as a Cloud Foudnry app on the IBM Cloud: I wasn't able to deploy the forwarding server as header parameters are not visible to CF apps there.
