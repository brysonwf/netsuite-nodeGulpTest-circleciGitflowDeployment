/**
 * SuiteScript example api
 *
 * @module N/exampleApi
 * @NApiVersion 2.x
 *
 */
function exampleApi() {}
/**
 * Passes two variables to underlying Java Method.
 *
 * @param {Object} options
 * @param {string} options.stringParam - testing string parameter
 * @param {int} options.intParam - testing int parameter
 * @return {string} Testing string
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if not enough parameters supplied
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if parameter is not object
 * @since 2016.2
 */
function methodWithConvenientParameterUnwrapping() {
}

/**
 * Passes native JavaScript object to underlying Java Method.
 *
 * @param {Object} jsObject Native JavaScript object
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if argument is missing
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if argument is not object
 * @since 2016.2
 */
function methodAcceptingJsObject() {
}

/**
 * Returns JavaScript object constructed in Java method
 *
 * @return {Object} JavaScript object
 * @since 2016.2
 */
function methodReturningJsObject() {
}

/**
 * Returns Example object
 *
 * @return {Example} Example object
 * @since 2016.2
 */
function createExample() {
}

/**
 * Return a new instance of exampleModule.Example used for demonstration purposes
 *
 * @param {Object} options
 * @param {string} options.stringProperty - testing string parameter
 * @param {int} options.numberProperty - testing number parameter
 * @protected
 * @class Example
 * @classdesc Example dummy object
 * @alias exampleModule.Example
 * @throws {SuiteScriptError} WRONG_PARAMETER_TYPE if parameters aren't string and number
 * @throws {SuiteScriptError} MISSING_REQD_ARGUMENT if not enough parameters supplied
 * @since 2016.2
 */
function Example() {
    
    /**
     * @name Example#readonlyProperty
     * @type String
     * @readonly
     * @since 2016.2
     */    
    this.prototype.readonlyProperty = undefined;    
    /**
     * @name Example#writeableProperty
     * @type Number
     * @since 2016.2
     */    
    this.prototype.writeableProperty = undefined;    
    /**
     * Method returning module variable in underlying Java Class
     * @return {Number} Module variable
     * @since 2016.2
     */    
    this.prototype.simpleGet = function(options) {};    
    
    /**
     * Passes native JavaScript object to underlying Java Method.
     * @param {Object} options.value - value which should be assigned in underlying Java Class
     * @since 2016.2
     */    
    this.prototype.simpleSet = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     *
     * @returns {{type: string, string: *, number: *}}
     */    
    this.prototype.toJSON = function(options) {};    
    
    /**
     * Returns the object type name (exampleModule.Example)
     *
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
}

exampleApi = new exampleApi();
/**
 * @type {exampleApi}
 */
N.prototype.exampleApi = exampleApi;