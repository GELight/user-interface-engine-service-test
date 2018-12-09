#!/bin/sh

clear

SERVICE_NAME='user-interface-engine-service-test'

echo
echo '====================================================================================='
echo

export CONTAINER_ID=$(docker ps -a --no-trunc --format "{{.ID}}" --filter name=^/$SERVICE_NAME$)

if [ $CONTAINER_ID ]
then
    docker container rm $CONTAINER_ID -f
fi

echo

docker ps --all

echo
echo
echo '====================================================================================='
echo

export IMAGE_ID=$(docker images --format "{{.ID}}" --filter "label=gelight/$SERVICE_NAME")

if [ $IMAGE_ID ]
then
    docker image rm $IMAGE_ID
fi

echo

docker images

echo
echo '====================================================================================='
echo