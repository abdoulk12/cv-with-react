# This is a my CV created with REACT

## GOAL
```The goal of this repository is to create ! ```

## TECHNOLOGIES
```
Gitlab
GitHub
CircleCI #curl --request POST --header "PRIVATE-TOKEN: my_token" https://gitlab.com/api/v4/projects/abdoulayeke12%2Fcv-with-react/mirror/pull
REACT
Dockerhub
Let's encrypt to secure connections
```
## INFRASTRUCTURE
```
Router: to manage firewall rules
Raspberry PI: to host docker image
```
## Instalation
#### Gitlab
```
curl -fsSO https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_armhf.deb
sudo dpkg -i gitlab-runner_armhf.deb
gitlab-runner register
sudo service gitlab-runner start

For information from https://docs.gitlab.com/runner/install/docker.html ===> Note: No arm/arm64 images are provided for GitLab Runner. See the related issue for more information. If needed, you can install arm/arm64 versions manually via binary file.
```
