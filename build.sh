#!/bin/bash

# build docker image
docker build -t achilis .

# tag with repo
docker tag achilis:latest pankajchandan/achilis:latest

# do docker login here if pushing to remote registry
docker login

# push here
docker push pankajchandan/achilis:latest
