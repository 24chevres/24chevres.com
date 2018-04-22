24chevres.com
=============

[![Build Status](https://travis-ci.org/24chevres/24chevres.com.svg?branch=master)](https://travis-ci.org/24chevres/24chevres.com)

A community for greater good.  
Its main purpose is to gather people with various skillsets to create helpful open-source projects.  
Every idea is welcomed and every one can contribute.


## Goals and Objectives

### Goals

> Goals are long-term aims that we want to accomplish.

- be helpful
- widen the community
- being a mandatory label for open-source and ethic projects

### Objectives

> Objectives are concrete attainments that can be achieved by following a certain number of steps.

- [ ] 25 active members
- [ ] 1 succeed projects
- [ ] 1 existing projects joining 24chevres
- [ ] on the first google search page for keyword "24chevres"


## Tech stack

### Programming languages

- [JavaScript](https://www.javascript.com/): Make dynamic webpages and various scripts
  - [NodeJS](https://nodejs.org): A JavaScript runtime built on Chrome's V8 JavaScript engine
  - [NPM](https://www.npmjs.com/): Install and manage Javascript dependencies on the project
- [Terraform](https://www.terraform.io/): Define infrastructure as code

### Server services

- [AWS Route53](https://aws.amazon.com/route53/): Route internet traffic to AWS S3
- [AWS Lambda](https://aws.amazon.com/lambda/): Handle the bot that merges pull requests
- [AWS S3](https://aws.amazon.com/s3/): Host the website's files

### Databases / Datastores

None

### Continuous integration / delivery / deployment

- [Git](https://git-scm.com/): A distributed version control system that host our code
- [Github-democrat](https://github.com/deuzu/github-democrat): A bot that merges PR based on vote
- [Travis](https://travis-ci.org/): A CI platform that pass tests and deploy to AWS S3


## How to contribute

- fork the project
- do some crazy shit and propose a pull request
- folks in 24chevres organization will vote the PR (with :+1: and :-1: on the PR's description)
- prefix the PR's description with `[RDY]` when the PR is ready to be merged
- wait 24 hours after the last commit
- if vote result is positive, the PR will be merged ([more details here](https://github.com/deuzu/github-democrat))
- code is then automatically deployed upon merge
