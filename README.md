# Dockerized node + nginx + postgres app

This sample project includes a basic node (express) app, spawned on 2 instances, load-balanced via nginx. Refresh the page to see round-robin in action with a custom message from each container.

## Installation

* Install [Docker](https://docs.docker.com/docker-for-mac/install/)
* `cp .env.sample .env` and modify if necessary (read on)

## Create machine (optional)

* Run `docker-machine create -d virtualbox my-project` to create a machine on virtualbox
* View the [machine docs](https://docs.docker.com/v17.12/machine/drivers/) for specific commands for other drivers
* Setup shared folders on VirtualBox app with project name `/my-project`
* Run `eval $(docker-machine env my-project)` to run commands against the new machine
  - If you created a machine on a remote host you'll need to copy files there
    <!-- * Find pwd of ssh user: `docker-machine ssh my-project pwd` (for me, `/root`) -->
    * Modify .env to specify the shared folder on host `ROOT=/my-project`

  - If you have permission issues
    * Copy files to a temp directory: `docker-machine scp -r ./ my-project:/tmp/`
    * Change group: `docker-machine ssh my-project sudo chgrp -R root /tmp`
    * Copy files manually: `docker-machine ssh my-project sudo cp -a /tmp/. /root/`

## Start

* Run `docker-compose -f docker-compose.yml up` to start the containers

## Connecting

* (optional) Run `docker-machine ip my-project` to find the machine ip
* Point your browser to the ip (localhost:80) or use curl
