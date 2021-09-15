# knox-token-library-api

# Dev 
```
git clone git@github.com:falconsoft3d/knox-token-library-api.git
cd knox-token-library-api
mv public.keys keys
npm i
npm run dev
```

# Run 
```
git clone git@github.com:falconsoft3d/knox-token-library-api.git
cd knox-token-library-api
mv public.keys keys
npm i
npm run start
```

# Deploy with Docker
```
sudo apt update
sudo apt upgrade
sudo apt install curl
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker–compose --version

git clone git@github.com:falconsoft3d/knox-token-library-api.git
cd knox-token-library-api
mv public.keys keys
docker-compose build
docker-compose up
```
# Docker Commands
```
$ docker-compose stop
```

# EndPoint from http
```
http://localhost:3000/api/getsignedclientid/demo/your-demo-hash
http://localhost:3000/api/getsignedclientid/demo/your-demo-hash
```

# EndPoint with curl
```
curl http://localhost:3000/api/getsignedclientid/demo/your-hash
```