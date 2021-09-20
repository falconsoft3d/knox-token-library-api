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
git clone https://github.com/falconsoft3d/knox-token-library-api
cd knox-token-library-api
mv public.keys keys
npm i
npm run start
```

# Deploy with Docker
```
apt-get update && apt-get upgrade -y
apt  install docker.io docker-compose -y

sudo apt install curl
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo docker–compose --version


git clone https://github.com/falconsoft3d/knox-token-library-api
cd knox-token-library-api
npm i
mv public.keys keys
docker-compose build
docker-compose up -d
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

# Upload Key
```
rsync key.json  root@127.127.127.127:~/knox-token-library-api/keys/key.json
```
