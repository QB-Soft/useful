# Useful

![npm](https://img.shields.io/npm/dm/@qb-soft/useful)
![NPM](https://img.shields.io/npm/l/@qb-soft/useful) ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)

A library containing useful functions to work with Object, Strings, Arrays and more

## Installation 

Run `npm install @qb-soft/useful@latest --save`

## Usage

There are currently 4 major categories of useful functions:

- Objects
- Arrays
- Strings
- Numbers

For a regular JavaScript project, simply require the functions you need directly.

```
const { selectRandomlyFromArray } = require('@qb-soft/useful/arrays'); // import array function
const { removeFalsyValues } = require('@qb-soft/useful/objects'); // import object function

const arrayFunctions = require('@qb-soft/useful/arrays'); // import all array functions
```

Imports for TypeScript projects work as they normally do as well.

```
import { selectRandomlyFromArray } from '@qb-soft/useful/arrays'; 
import * as arrayFunctions from '@qb-soft/useful/arrays';
```

You can find the full developer documentation <u> [here](https://qb-soft.github.io/useful/) </u>


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

Clone the repository and run `npm run test:local`. A coverage report is automatically generated.
