#!/bin/bash

# Check if .env file exists:
if [ -f .env ]; then
  # Load environment variables from the .env file:
  source .env

  # Delete the .npmrc file:
  rm .npmrc

  # Update the .npmrc file:
  echo "@vivant-grupa:registry=https://npm.pkg.github.com" >> .npmrc
  echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> .npmrc
else
  # Delete the .npmrc file:
  rm .npmrc

  # Update the .npmrc file:
  echo "@vivant-grupa:registry=https://npm.pkg.github.com" >> .npmrc
  echo "//npm.pkg.github.com/:_authToken=$GH_TOKEN" >> .npmrc
fi
