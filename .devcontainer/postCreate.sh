#!/bin/bash -i
nvm install

npm install -g @angular/cli
SHELL=/bin/bash ng completion
ng analytics off --global

if [ ! -d node_modules ]; then
  npm ci
fi
