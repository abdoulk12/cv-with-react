#!/bin/bash

set -e

aplication_name="cv-with-react-run"

check_latest_commit_exist(){
  latest_commit=$(git log --format="%h" -n 1)
  check_latest_commit_docker=$(curl -fsS 'https://hub.docker.com/api/audit/v1/build/?include_related=true&offset=0&limit=10&object=%2Fapi%2Frepo%2Fv1%2Frepository%2Fabdoulk12%2Fcv-with-react%2F' | jq ".objects| map (select(.commit|startswith(\"$latest_commit\")))|length")
}


check_latest_commit_exist
# if the commit id from Docker is the same commit id from git we can download the latest image and use it to deploy our application
while (( check_latest_commit_docker != 1 )); do
  check_latest_commit_exist
  sleep 10;
  echo "The docker container is not ready yet !"
done

echo "The docker container is ready !"

# Deploy the application (code from git +  react js activated in docker)
application_version=$(jq -r .version package.json)
docker build -t "aboulk12/cv-with-react-run:$application_version" -f Dockerfile_run .
[[ $(docker ps -aq -f status=running -f name=$aaplication_name) ]] &&  docker stop "$aplication_name"
[[ $(docker ps -aq -f status=exited -f name=$aaplication_name) ]] && docker rm "$aplication_name"
docker run -p 8080:3000 -d "aboulk12/cv-with-react-run:$application_version" -name "$aplication_name"

# Bump semantical version
# Backup the application on docker hub registry
latest_commit_message=$(git log -1 --pretty=%B)
echo "$latest_commit_message"
if [[ $latest_commit_message != "Bump from gitlab to version "* ]]; then
  npm version minor -m "Bump from gitlab to version %s"
  git add package.json
  application_version=$(jq -r .version package.json)
  git commit -m "Bump from gitlab to version $application_version"
  git remote add github git@github.com:abdoulk12/cv-with-react.git
  git fetch --all
#  git push github
else
  echo "Nothing to do !"
fi

