echo "start deploy"
docker build -t oronasaf123/mulit-client:latest  -t oronasaf123/mulit-client:$SHA -f ./client/Dockerfile ./client
docker build -t oronasaf123/multi-server:latest  -t oronasaf123/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t oronasaf123/multi-worker:latest  -t oronasaf123/multi-worker:$SHA-f ./worker/Dockerfile ./worker
docker push oronasaf123/multi-client:latest
docker push oronasaf123/multi-server:latest
docker push oronasaf123/multi-worker:latest
docker push oronasaf123/multi-client:$SHA
docker push oronasaf123/multi-server:$SHA
docker push oronasaf123/multi-worker:$SHA
kubectl apply -f k8s
kubectl set image deployment/client-deployment client=oronasaf123/multi-client:$SHA
kubectl set image deployment/server-deployment server=oronasaf123/multi-server:$SHA
kubectl set image deployment/worker-deployment worker=oronasaf123/multi-worker:$SHA
echo "end deploy"
