CONTAINER_NAME="onbridge-frontend-container"
DOCKER_TAG="onbridge-frontend"

docker build -t $DOCKER_TAG --build-arg REACT_APP_API_HOST="" --build-arg REACT_APP_L1_CHAIN_ID=97 --build-arg REACT_APP_L2_CHAIN_ID=80001 .
docker rm -f $CONTAINER_NAME
docker run  -p 3000:80 --name $CONTAINER_NAME $DOCKER_TAG
