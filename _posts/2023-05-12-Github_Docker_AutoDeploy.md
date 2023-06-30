---
layout: content
title: Github Docker Automatic Deployment
category: github
---

# Concept
- This scripts finally makes "latest, stable, rollback"
- Repository secrets need: `DOCER_USERNAME`, `DOCKER_TOKEN`
- only push to `main` branch will create stable tag
- publish will make `rollback` tag
- push to any branch will create `latests` tag
- suitable for node package yet,



## .github/workflow/deployment.yml

> DOCKER_REPO environment must be edited.

``` yaml
name: AUTO DEPLOYMENT

on:
  push:
    branches: [ main ]
  workflow_dispatch:

# NOTE : DOCKER_REPO 설정.
env:
  DOCKER_REPO: organization_name/repository_name

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@master

      - name: EXTRACT NPM VERSION
        id: extract_version
        uses: Saionaro/extract-package-version@v1.0.6
      -
        name: SETUP QEMUX
        uses: docker/setup-qemu-action@v1
      -
        name: SET UP DOCKERX
        uses: docker/setup-buildx-action@v1
      -
        name: LOGIN TO DOCKERHUB
        uses: docker/login-action@v1 
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      -
        name: Build Docker and Push to DOCEAN_API 
        id: docker_build
        uses: docker/build-push-action@v2
        with:
          push: true
          file: ./Dockerfile
          tags: |
            "$DOCKER_REPO:latest"
            "$DOCKER_REPO:v${{ steps.extract_version.outputs.version }}"
      - 
        name: MAKE RELEASE DATE
        id: date
        run: echo "release_time=$(TZ=Asia/Seoul date +'%Y-%m-%d %H:%M:%S')" >> $GITHUB_ENV
      - 
        name: CREATE RELEASE
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{ steps.extract_version.outputs.version }}
          release_name: Release v${{ steps.extract_version.outputs.version }} [${{ env.release_time }}]
          body: AUTO RELEASE MADE FROM workflows
          draft: true

```
