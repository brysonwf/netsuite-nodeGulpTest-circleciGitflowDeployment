/**
 * SuiteScript https module (Server Side)
 *
 * @module N/https
 * @NApiVersion 2.x
 *
 */
function https() {}
/**
 * Enum for HTTP methods.
 * @enum {string}
 */
function httpsMethod() {
    this.GET = 'GET';
    this.POST = 'POST';
    this.PUT = 'PUT';
    this.DELETE = 'DELETE';
    this.HEAD = 'HEAD';
}
https.prototype.Method = httpsMethod;

/**
 * Enum describing available Commerce API Cache Durations.
 * @enum {string}
 * @readonly
 */
function httpsCacheDuration() {
    this.UNIQUE = 'UNIQUE';
    this.SHORT = 'SHORT';
    this.MEDIUM = 'MEDIUM';
    this.LONG = 'LONG';
}
https.prototype.CacheDuration = httpsCacheDuration;

/**
 * Send a HTTPS GET request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype['get'] = function(options) {};

/**
 * Send a HTTPS POST request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body POST data
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype.post = function(options) {};

/**
 * Send a HTTPS PUT request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body PUT data
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype.put = function(options) {};

/**
 * Send a HTTPS DELETE request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.url the HTTP URL being requested
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype['delete'] = function(options) {};

/**
 * Send a HTTP request and return server response.
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {http.Method} options.method HTTP method of the request
 * @param {string} options.url the HTTP URL being requested
 * @param {string|Object} options.body POST data; must be present if and only if method is POST
 * @param {Object} options.headers (optional) request HTTP headers
 * @return {ClientResponse}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
 * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
 *
 * @since 2015.2
 */
https.prototype.request = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.guid
 * @param {string} options.encoding
 * @return {SecretKey}
 */
https.prototype.createSecretKey = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.input
 * @param {string} [options.inputEncoding] (Optional) defaults to UTF_8
 * @returns {SecureString}
 */
https.prototype.createSecureString = function(options) {};

/**
 * @enum
 */
function httpsEncoding() {
    this.UTF_8 = 'UTF_8';
    this.BASE_16 = 'BASE_16';
    this.BASE_32 = 'BASE_32';
    this.BASE_64 = 'BASE_64';
    this.BASE_64_URL_SAFE = 'BASE_64_URL_SAFE';
    this.HEX = 'HEX';
}
https.prototype.Encoding = httpsEncoding;

/**
 * @enum
 */
function httpsHashAlg() {
    this.SHA1 = 'SHA1';
    this.SHA256 = 'SHA256';
    this.SHA512 = 'SHA512';
    this.MD5 = 'MD5';
}
https.prototype.HashAlg = httpsHashAlg;

/**
 * @enum
 */
function httpsRedirectType() {
    this.RECORD = 'RECORD';
    this.SUITELET = 'SUITELET';
    this.RESTLET = 'RESTLET';
    this.MEDIA_ITEM = 'MEDIAITEM';
    this.TASK_LINK = 'TASKLINK';
}
https.prototype.RedirectType = httpsRedirectType;

/**
 *
 * @protected
 * @constructor
 */
function SecureString() {
    
    /**
     *
     * @param {Object} options
     * @param {string} options.toEncoding
     * @returns {SecureString}
     */    
    this.prototype.convertEncoding = function(options) {};    
    
    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     * @returns {SecureString}
     */    
    this.prototype.appendString = function(options) {};    
    
    /**
     *
     * @param {Object} options
     * @param {SecureString} options.secureString
     * @returns {SecureString}
     */    
    this.prototype.appendSecureString = function(options) {};    
    
    /**
     *
     * @param {Object} options
     * @param {string} options.algorithm
     * @returns {SecureString}
     */    
    this.prototype.hash = function(options) {};    
    
    /**
     *
     * @param {Object}options
     * @param {string} options.algorithm
     * @param {SecretKey} options.key
     * @returns {SecureString}
     */    
    this.prototype.hmac = function(options) {};    
}

/**
 * Return a new instance of ClientResponse used to store the result of a HTTP request.
 *
 * @protected
 * @classDescription Encapsulation of the response returned by a web server as a response to our HTTP request.
 * @return {http.ClientResponse}
 * @constructor
 *
 * @since 2015.2
 */
function ClientResponse() {
    
    /**
     * Response code.
     * @name ClientResponse#code
     * @type number
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.code = undefined;    
    /**
     * Response headers.
     * @name ClientResponse#headers
     * @type Object
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.headers = undefined;    
    /**
     * Response body.
     * @name ClientResponse#body
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.body = undefined;    
    /**
     * Returns the object type name (http.ClientResponse)
     *
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     *
     * @returns {{type: string, code: *, headers: *, body: *}}
     */    
    this.prototype.toJSON = function(options) {};    
}

/**
 * Returns a new instance of SecretKey used for hmac, cipher and decipher
 *
 * @protected
 * @class
 * @classdesc
 * @param guid
 * @param encoding
 * @return {crypto.SecretKey}
 *
 * @constructor
 */
function SecretKey() {
    
    /**
     * @type string
     */    
    this.prototype.guid = undefined;    
    /**
     * @type string
     */    
    this.prototype.encoding = undefined;}

https = new https();
/**
 * @type {https}
 */
N.prototype.https = https;