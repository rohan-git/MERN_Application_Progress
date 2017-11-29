#!/bin/bash
set -ev
cd client
npm run build
cd ..
npm install
npm test
