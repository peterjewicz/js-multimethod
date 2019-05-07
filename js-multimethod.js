let MultiMethod = function() {
  this.methods = {} // Holds the reference to the various actions and methods

  /**
  * @param {when} String - action to match to function call
  * @param {args} Any - arguments to pass to the function call
  * Base method to call that looks for a When and passes args to matching function
  */
  let returnFunctions = (when, args) => {
    if (this.methods[when]) {
      this.methods[when](args);
    } else if (this.methods.default) {
      this.methods.default(args)
    } else {
      console.warn(`No method of type ${when}`)
    }
  }

  /**
  * @param {when} String - action to match to function call
  * @param {func} Function - Func to call on matching request
  * MultiMethod.addCase() - adds a new case to check for the multimethod
  */
  returnFunctions['addCase'] = (when, func) => {
    this.methods[when] = func
  }

  return returnFunctions // returns all our nice functions
}

export default MultiMethod;
