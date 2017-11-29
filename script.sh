#!/bin/bash
cd client
npm run build
cd ..
npm install
npm test
