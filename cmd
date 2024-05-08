#!/bin/bash

IMAGE_NAME=community-web:latest
SERVICE_PORT=9995
CONTAINER_PORT=4321
SERVICE_NAME=community-web

case $1 in 
    build)
        docker build -t $IMAGE_NAME .
        ;;
    start)
        docker run -d -it -p $SERVICE_PORT:$CONTAINER_PORT --restart=always --name $SERVICE_NAME $IMAGE_NAME
        ;;
    stop)
        docker stop $SERVICE_NAME && docker rm $SERVICE_NAME
        ;;
    restart)
        ./cmd build
        ./cmd stop
        ./cmd start
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|build}"
        exit 1
        ;;
esac