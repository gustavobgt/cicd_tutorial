#!/usr/bin/env sh

npm install -g firebase-tools

firebase deploy -P staging --token "$FIREBASE_DEPLOY_TOKEN"