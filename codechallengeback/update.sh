#!/bin/bash

API="http://localhost:7165"
URL_PATH="/users/2/d"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
      "amount": "'"20"'"
  }'


echo
