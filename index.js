function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    // some code
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    // some code
  };
}
