#!/bin/sh

clear

docker ps --format "{{.ID}}" --filter name=gelight/user-interface-engine-service-test

#export CONTAINER_ID=$(CONTAINER_ID=docker ps -a | awk '{ print $1,$2 }' | grep gelight/user-interface-engine-service-test | awk '{print $1 }')
#docker container rm $CONTAINER_ID -f

#export IMAGE_ID=$(docker images | awk '{ print $1, $2, $3 }' | grep gelight/user-interface-engine-service-test | awk '{ print $3 }')
#docker image rm $IMAGE_ID
