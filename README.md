# typescript-starter
[![Build Status](https://travis-ci.org/bennetthardwick/typescript-starter.svg?branch=master)](https://travis-ci.org/bennetthardwick/typescript-starter) [![codecov](https://codecov.io/gh/bennetthardwick/typescript-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/bennetthardwick/typescript-starter)  
A starter for building your application with Typescript. Pre-configured for webpack, tslint, karma, codecov and travis.

## Getting Started

To get started, clone the repo and start developing!

### Running Tests
```
npm test
```

### Code Coverage
Karma will automagically detect code coverage during `npm test`. If you want an interactive look at your code coverage, navigate to the `coverage` folder and have a look inside. The `codecov` command will then be called. If you've allowed Codecov access to your repository, it will comment on every PR that is made, with details about how that PR changes code coverage. This can be disabled by removing the `codecov.yml` file.

### Building
#### Local
To run a local build issue the command:
```
npm run build`
```
If you'd like webpack to restart after you make changes to your files, issue the command:
```
npm run build:watch
```
If you want webpack to watch your files and serve them (with hot reloading), issue the command: 
```
npm start
```
#### Production
To build for production, issue the command:
```
npm run build:prod
```

### Style
This project is pre-configured with tslint and sonarts and will run checks against your project every commit. You can easily select which rules you want to disable inside the `tslint.json` file. By default, the project will not allow a commit that failes any of these rules, but this can be disabled with the `defaultSeverity` option inside `tslint.json`.
