/**
 * SuiteScript Map and Reduce Context module
 *
 * @module N/mapReduceContext
 * @NApiVersion 2.x
 *
 */
function mapReduceContext() {}
/**
 * Return a new instance of mapreduce.InputContext
 * @class
 * @classdesc Contains ObjectRefType enum.
 * @return {mapreduce.InputContext}
 * @constructor
 *
 * @since 2015.2
 */
function InputContext() {
    
    /**
     * @name InputContext#ObjectRefType
     * @type {string} value - Enum describing valid "type" attribute values for ObjectRef.
     * @readonly
     */    
    this.prototype.ObjectRefType = undefined;    
    /**
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     */    
    this.prototype.toJSON = function(options) {};    
}

/**
 * Return a new instance of mapreduce.MapContext
 * @class
 * @classdesc Contains the key/value pairs to process through the map stage.
 * @return {mapreduce.MapContext}
 * @constructor
 *
 * @since 2015.2
 */
function MapContext() {
    
    /**
     * @name MapContext#isRestarted
     * @type {boolean} isRestarted - Indicates whether the map(mapContext) function was invoked again
     * @readonly
     */    
    this.prototype.isRestarted = undefined;    
    /**
     * @name MapContext#key
     * @type {string} key - The key to be processed through the map stage
     * @readonly
     */    
    this.prototype.key = undefined;    
    /**
     * @name MapContext#value
     * @type {string} value - The value to be processed through the map stage.
     * @readonly
     */    
    this.prototype.value = undefined;    
    /**
     * Writes the key value pairs
     *
     * @param {string} key - The key to write
     * @param {Object} value - The value to write
     */    
    this.prototype.write = function(options) {};    
    
    /**
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     */    
    this.prototype.toJSON = function(options) {};    
}

/**
 * Return a new instance of mapreduce.ReduceContext
 * @class
 * @classdesc Contains the key/values groups to process through the reduce stage.
 * @return {mapreduce.ReduceContext}
 * @constructor
 *
 * @since 2015.2
 */
function ReduceContext() {
    
    /**
     * @name ReduceContext#isRestarted
     * @type {boolean} isRestarted - Indicates whether the Rap(reduceContext) function was invoked again
     * @readonly
     */    
    this.prototype.isRestarted = undefined;    
    /**
     * @name ReduceContext#key
     * @type {string} key - When the map/reduce process includes a map stage, the key is derived from the key written
     *     by MapContext.write(key,value).
    When the map stage is skipped, the key depends on the input type:
     * @readonly
     */    
    this.prototype.key = undefined;    
    /**
     * @name MapContext#value
     * @type {string} values - When the map/reduce process includes a map stage, the values are derived from the values
     *     written by MapContext.write(key,value).
    When the map stage is skipped, the values are already grouped by key into a list, and the value depends on the input type:
     * @readonly
     */    
    this.prototype.values = undefined;    
    /**
     * Writes the key/values groups
     *
     * @param {string} key - The key to write
     * @param {Object} value - The value to write
     */    
    this.prototype.write = function(options) {};    
    
    /**
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     */    
    this.prototype.toJSON = function(options) {};    
}

mapReduceContext = new mapReduceContext();
/**
 * @type {mapReduceContext}
 */
N.prototype.mapReduceContext = mapReduceContext;