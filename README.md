# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @benjaminmeng/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*  ` head `:  returns the first item of an array 
*  ` tail `:   returns the every item of an array except for the first one 
*  ` middle `:  returns the middle item of an array
*  ` countLetters `:   returns the counts of each letter
*  ` countOnly `: returns the counts for the given word  
*  ` findKey `:   returns the first key of an object 
*  ` findKeyByValue `:  returns the value of a key that matches the given value
*  ` flatten `:   returns a single array for nested arrays
*  ` letterPositions `:   returns the indexes of the letters in a string
*  ` map `:   creates an array with the modification of each element of the callback function
*  ` takeUntil `:   returns an array that contains all elements from the begining of the original array before the call of the callback function
*  ` without `:   removes items from an array
*  ` assertArraysEqual `:   compare two arrays to see if they are equal
*  ` assertEqual `:    compare two values to see if they are equal
*  ` assertObjectsEqual `: compare two objects to see if they are equal