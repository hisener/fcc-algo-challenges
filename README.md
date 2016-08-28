# freeCodeCamp Algorithm Challenges
freeCodeCamp Algorithm Challenges in one package with test cases.

*Note:* This repo contains only advanced algorithm scripting section.

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

### Why?
Just don't want to use freeCodeCamp's code editor.

### Install
Clone this repository.
```bash
git clone https://github.com/hisener/fcc-algo-challenges.git
cd fcc-algo-challenges
```
And install dependencies(only mocha for testing).
```bash
npm install
```

### Usage

For solving challenges, edit its file(for example: pairwise) and run its test(See examples below).

##### Testing a challenge (for example 'Validate US Telephone Numbers'):

```bash
npm test test/validate-us-telephone-numbers
```

##### Watching the file for changes:

```bash
npm test test/validate-us-telephone-numbers -- --watch
```

##### Specifying the reporter:

```bash
npm test test/validate-us-telephone-numbers -- --reporter nyan
```

##### Testing all challenges at the same time:

```bash
npm test
```
### TODO

- Make A Person
- Intermediate Algorithm Scripting Challenges
- Basic Algorithm Scripting Challenges
