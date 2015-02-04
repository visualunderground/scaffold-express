#!/bin/bash

# "Automatic deploys from GitHub" are enabled in Heroku monitoring the 'deploy' branch.

git checkout deploy
# git rebase master
git merge master
grunt build
git add .
git add -f ./app/public
git commit -m 'Merging master into deploy and adding public files'
git push
git checkout master