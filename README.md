# Guitar-Centaur-Carousel-Service 

Title card plus photo viewer/carousel modules for Guitar Centaur shopping UI, backed by Express server & MySQL db.

## Related Projects

  - https://github.com/hrr49-tully
  - https://github.com/dwwr
  - https://github.com/hrr49-tully/Guitar-Centaur-RelatedPurchases-Proxy
  - https://github.com/hrr49-tully/Guitar-Centaur-Reviews-Service
  - https://github.com/hrr49-tully/Guitar-Centaur-Reviews-Proxy
  - https://github.com/hrr49-tully/Guitar-Centaur-Add-to-Cart
  - https://github.com/hrr49-tully/Guitar-Centaur-Add-to-Cart-proxy


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
   Seed sample data, after instantiating schema: "seeder": "node faker/seeder.js"
   
   Development Server "server": "nodemon server/index.js"
   
   Production with PM2: "production": "pm2 start server/index.js"
   
   Development Client: "client": "npx webpack serve"
   
   Build Bundle: "build": "webpack"
   
   Server Test Suite: "testServer": "mocha ./spec/serverSpec.js; RES=$?; kill %1; exit $RES"
   
   Client Test Suite: "testClient": "jest"


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

