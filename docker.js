//use the following instead of local host
192.168.99.100
//ports -p ext port : int port
docker run -p 5080:8080 michal/simpleweb
//attach to container
docker exec -it cb423d656cb8  sh
// clear images and containers
docker-clear.bat
// launch container group in background using compose
docker-compose up -d
// stop container group
docker-compose down
// see running containers
docker-compose ps
// docker volumes
docker run -p 3000UJ:3000 -v /app/node_modules -v pwd:/app <image id>
docker run -p 3000UJ:3000 -v /app/node_modules -v pwd:/app <image id>
// stop all containers in docker tools 
docker stop $(docker ps -a -q)
// stop in powershell
docker ps -q | % { docker stop $_ }
//
//Kubernetes
//

// start minikube simulator
minkube status

minkube start
   
// start pod
kubectl apply -f client-pod.yml
// start service
kubectl apply -f client-node-port.yml
// get vm ip 
minikube ip
// see the containers inside the pod
kubectl describe pod client-pod
// delete an object
kubectl delete -f client-pod.yml
// see pod internal ip address
kubectl get pods -o wide
// chnage container to specific version in pod
kubectl set image deployment/client-deployment client=stephengrider/multi-client:v5
// connect to docker server in k8 node 
eval $(minikube docker-env) 
// interesting
minikube docker-envdecoker 
// apply multiple k8 files in the k8 dir
kubectl apply -f k8  
// get logs of a pod
kubectl logs <pod-id>
// see volume claims
kubectl get pv
// create a secret
kubectl create secret generic pgpassword --from-literal PGPASSWORD=12345asdf 
// see secrets
kubectl get secrets


