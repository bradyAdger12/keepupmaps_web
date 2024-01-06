#!/bin/bash

docker build -t keepupmaps .
docker tag keepupmaps:latest public.ecr.aws/k3a3u8l3/keepupmaps:latest
docker push public.ecr.aws/k3a3u8l3/keepupmaps:latest
