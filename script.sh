#!/bin/bash
set -ev
cd client
npm install
npm run build
cd ..
npm install
npm test
