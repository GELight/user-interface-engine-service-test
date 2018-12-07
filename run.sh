#!/bin/sh

clear

docker run --name user-interface-engine-service-test -p 3000:8080 -d gelight/user-interface-engine-service-test
