#!/bin/bash

yarn tsc \
  --module commonjs \
  --target esnext \
  --esModuleInterop \
  ./benches/*.ts

node --expose-gc ./benches/benchmark-sort-numbers-ascending.js
echo '-----'
node --expose-gc ./benches/benchmark-sort-numbers-descending.js
echo '-----'
node --expose-gc ./benches/benchmark-sort-strings-ascending.js
echo '-----'
node --expose-gc ./benches/benchmark-sort-strings-descending.js

rm ./benches/*.js
