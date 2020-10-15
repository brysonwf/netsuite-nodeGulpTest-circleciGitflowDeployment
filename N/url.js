/**
 * SuiteScript module
 *
 * @module N/url
 * @NApiVersion 2.x
 *
 */
function url() {}
/**
 * @param {Object} opts
 * @param {string} opts.recordType
 * @param {string} opts.recordId
 * @param {boolean} opts.isEditMode
 * @param {Object} opts.params Per url.format({query
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveRecord = function(options) {};

/**
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {Map} options.params (optional) url parameters
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveTaskLink = function(options) {};

/**
 * @param {Object} opts
 * @param {string} opts.scriptId
 * @param {string} opts.deploymentId
 * @param {boolean} opts.returnExternalUrl
 * @param {Object} opts.params Per url.format({query
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.resolveScript = function(options) {};

/**
 * @param {Object} opts
 * @param {string} opts.hostType
 * @param {string} opts.accountId
 *
 * @return {String} domain
 *
 * @since 2017.1
 */
url.prototype.resolveDomain = function(options) {};

/**
 * @param {Object} options
 * @param {string} options.domain
 * @param {Object} options.params query string data parameters as an object
 *
 * @return {String} url
 *
 * @since 2015.1
 */
url.prototype.format = function(options) {};

url = new url();
/**
 * @type {url}
 */
N.prototype.url = url;