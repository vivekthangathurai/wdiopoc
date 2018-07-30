# set the base image to Debian
# https://www.brianchristner.io/docker-image-base-os-size-comparison/
# https://hub.docker.com/_/debian/
FROM java:latest

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get upgrade -y
#RUN apt-get install -y -q --no-install-recommends \
 #       apt-transport-https \
  #      build-essential \
   #     ca-certificates \
    #    curl \
     #   git \
      #  libssl-dev \
       # python \
        #rsync \
   #     software-properties-common \
    #    devscripts \
     #   autoconf \
      #  ssl-cert \
    #&& apt-get clean

# update the repository sources list
# and install dependencies
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# confirm installation
RUN node -v
RUN npm -v

# Use latest npm
RUN npm i npm@latest -g


RUN mkdir /usr/wdio/

COPY package.json /usr/wdio
COPY wdio.conf.js /usr/wdio
COPY test /usr/wdio/test
COPY start.sh /usr/wdio/start.sh
RUN chmod 777 /usr/wdio/start.sh 
RUN cd /usr/wdio && npm install

RUN npm install selenium-standalone@latest -g
RUN selenium-standalone install
RUN selenium-standalone start

ENTRYPOINT ["/usr/wdio/start.sh"]
