docker container rm broker
docker build -f ./server/Dockerfile --tag broker .
docker container rm producer-1
docker container rm producer-2
docker build -f ./producer/Dockerfile --tag producer .
docker-compose up
