#!/bin/bash

API="http://localhost:7165"
URL_PATH="/messages"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "amount": "'"50"'",
      "to": "'"2"'"
  }'


echo
