const _ = require('lodash');

const arr = [1,[2,3,4,[45,6,7,[55]]]]
const newArr = _.flattenDeep(arr)
console.log(newArr)