# Useful

[![QB-Soft](https://circleci.com/gh/QB-Soft/useful.svg?style=shield)](https://www.npmjs.com/package/@qarun-qb/useful) ![npm](https://img.shields.io/npm/dm/@qarun-qb/useful) ![npm (scoped)](https://img.shields.io/npm/v/@qarun-qb/useful)
<!-- ![NPM](https://img.shields.io/npm/l/@qarun-qb/useful) -->

A library containing useful functions to work with Object, Strings, Arrays and more

## Installation 

Run `npm install @qarun-qb/useful@latest --save`

## Usage

There are currently 4 major categories of useful functions:

- Objects
- Arrays
- Strings
- Numbers

For a regular JavaScript project, simply require the functions you need directly.

```
const { selectRandomlyFromArray } = require('@qarun-qb/useful/arrays'); // import array function
const { removeFalsyValues } = require('@qarun-qb/useful/objects'); // import object function

const arrayFunctions = require('@qarun-qb/useful/arrays'); // import all array functions
```

Imports for TypeScript projects work as they normally do as well.

```
import { selectRandomlyFromArray } from '@qarun-qb/useful/arrays'; 
import * as arrayFunctions from '@qarun-qb/useful/arrays';
```

## Function List

### Objects

- selectRandomlyFromArray

### Arrays 

### Numbers

### Strings

## Testing

Tests are written in jest and can be found in the tests folder. Each category will have it's own testing file. 

Test files are named by their category. For example, all tests for array functions will go inside `arrays.spec.ts`. General structure for writing tests is: 

```
// Each function gets its own describe block
describe('Function name', () => {

    it('test scenario 1', () => {
        // test code goes here
    });

    it('test scenario 2', () => {
        // test code goes here
    });

    ...

})

```

Clone the repository and run `npm run test`. A coverage report is automatically generated.