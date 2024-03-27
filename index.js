// receivesAFunction function
function receivesAFunction(callback) {
    //call the callback
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
        //define named function
      console.log("This is a named function");
    }
    return namedFunction;
  }
  //name the returnsAnonymousFunction
  function returnsAnAnonymousFunction() {
    //return the anonymous function
    return function() {
      console.log("This is an anonymous function");
    };
  }
  
  //  showcase the functions
   module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  