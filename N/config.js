/**
 * SuiteScript module
 *
 * @module N/config
 * @NApiVersion 2.x
 */
function config() {}
/**
 * Load a configuration object with a specific type
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.type one of the Type values
 * @param {boolean} options.isDynamic load record in dynamic or deferred dynamic mode
 * @return {Record}
 *
 * @throws {SuiteScriptError} INVALID_RCRD_TYPE Thrown if an invalid record type was provided.
 *
 * @since 2015.2
 */
config.prototype.load = function(options) {};

/**
 * Enum configuration type values.
 * @readonly
 * @enum {string}
 * @since 2015.2
 */
function configType() {
    this.USER_PREFERENCES = 'userpreferences';
    this.COMPANY_INFORMATION = 'companyinformation';
    this.COMPANY_PREFERENCES = 'companypreferences';
    this.ACCOUNTING_PREFERENCES = 'accountingpreferences';
    this.ACCOUNTING_PERIODS = 'accountingperiods';
    this.TAX_PERIODS = 'taxperiods';
    this.FEATURES = 'companyfeatures';
    this.TIME_POST = 'timepost';
    this.TIME_VOID = 'timevoid';
}
config.prototype.Type = configType;

/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {Object} options.recordObj (server-generated object holding the full metadata and data for a record type,
 *     including all scripting and customization. See RecordSerializationKey.java)
 * @param (integer) options.recordObj.id
 * @param {number} options.runtimeVersion is the version of the record API that will be exposed (2.0 or 2.1)
 * @param (boolean) options.recordObj.isSubrecord
 * @param (boolean) options.recordObj.isDynamic
 * @param (boolean) options.recordObj.isReadOnly
 * @param (boolean) options.recordObj.isCurrentRecord
 * @param (boolean) options.recordObj.isUserEvent
 * @param (Object) options.recordObj.recordContext
 * @param (Metadata) options.recordObj.metadata (record metadata data used to populate the model controller)
 * @param (ModelController) options.recordObj.data (record data used to populate the model)
 * @param (RecordStateController) options.recordObj.state (record state to use to pre-populate the model controller)
 * @return {Record}
 * @constructor
 */
function Record() {
    
    /**
     * provides available macros
     * @returns {Object} a set of macros (@see Macro) defined on the record indexed by macroId
     */    
    this.prototype.getMacros = function(options) {};    
    
    /**
     * provides a macro to execute
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {String} [options.package] macro package
     * @returns {?Macro} executor function for macro specified by options
     */    
    this.prototype.getMacro = function(options) {};    
    
    /**
     * performs macro operation and returns result
     * executeMacro.promise returns a Promise
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {Object} [options.params] macro arguments
     * @returns {?Object} macro result or null
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */    
    this.prototype.executeMacro = function(options) {};    
    
    /**
     * remove body field data
     * @param {Object} options
     * @param {string} options.fieldId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.removeField = function(options) {};    
    
    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @returns {string[]}
     */    
    this.prototype.getFields = function(options) {};    
    
    /**
     * return array of names of all sublists
     * @returns {string[]}
     */    
    this.prototype.getSublists = function(options) {};    
    
    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @returns {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */    
    this.prototype.getValue = function(options) {};    
    
    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.setValue = function(options) {};    
    
    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @returns {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.getText = function(options) {};    
    
    /**
     * set value of the field by text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.setText = function(options) {};    
    
    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @returns {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */    
    this.prototype.findSublistLineWithValue = function(options) {};    
    
    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @returns {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */    
    this.prototype.getSublistValue = function(options) {};    
    
    /**
     * set the value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {(number|Date|string|Array|boolean)} options.value
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */    
    this.prototype.setSublistValue = function(options) {};    
    
    /**
     * return value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @returns {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */    
    this.prototype.getSublistText = function(options) {};    
    
    /**
     * set the value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */    
    this.prototype.setSublistText = function(options) {};    
    
    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {number}
     */    
    this.prototype.getLineCount = function(options) {};    
    
    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.beforeLineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @returns {Record}
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */    
    this.prototype.insertLine = function(options) {};    
    
    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.lineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @returns {Record}
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */    
    this.prototype.removeLine = function(options) {};    
    
    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */    
    this.prototype.selectNewLine = function(options) {};    
    
    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */    
    this.prototype.cancelLine = function(options) {};    
    
    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */    
    this.prototype.commitLine = function(options) {};    
    
    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */    
    this.prototype.getCurrentSublistValue = function(options) {};    
    
    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */    
    this.prototype.setCurrentSublistValue = function(options) {};    
    
    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @returns {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */    
    this.prototype.getCurrentSublistText = function(options) {};    
    
    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */    
    this.prototype.setCurrentSublistText = function(options) {};    
    
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @returns {number} id of submitted record
     */    
    function saveThis() {}    
    saveThis.prototype.promise = function() {};    
    this.prototype.save = new saveThis();    
    this.prototype.save = function() {}    
    
    /**
     * Save record updates to the system and return object with additional information about the saved record.
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @returns {number} id of submitted record
     */    
    function saveAndFetchThis() {}    
    saveAndFetchThis.prototype.promise = function() {};    
    this.prototype.saveAndFetch = new saveAndFetchThis();    
    this.prototype.saveAndFetch = function() {}    
    
    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */    
    this.prototype.hasSubrecord = function(options) {};    
    
    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Subrecord}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */    
    this.prototype.getSubrecord = function(options) {};    
    
    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     */    
    this.prototype.removeSubrecord = function(options) {};    
    
    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */    
    this.prototype.hasSublistSubrecord = function(options) {};    
    
    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Subrecord}
     */    
    this.prototype.getSublistSubrecord = function(options) {};    
    
    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */    
    this.prototype.removeSublistSubrecord = function(options) {};    
    
    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */    
    this.prototype.hasCurrentSublistSubrecord = function(options) {};    
    
    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Subrecord}
     */    
    this.prototype.getCurrentSublistSubrecord = function(options) {};    
    
    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record}
     */    
    this.prototype.removeCurrentSublistSubrecord = function(options) {};    
    
    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */    
    this.prototype.getSublist = function(options) {};    
    
    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */    
    this.prototype.getSublistFields = function(options) {};    
    
    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */    
    this.prototype.getField = function(options) {};    
    
    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */    
    this.prototype.getSublistField = function(options) {};    
    
    /**
     * return field object from record's sublist current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @restriction only available in dynamic record
     */    
    this.prototype.getCurrentSublistField = function(options) {};    
    
    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record}
     */    
    this.prototype.setMatrixHeaderValue = function(options) {};    
    
    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */    
    this.prototype.getMatrixHeaderValue = function(options) {};    
    
    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */    
    this.prototype.setMatrixSublistValue = function(options) {};    
    
    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */    
    this.prototype.getMatrixSublistValue = function(options) {};    
    
    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */    
    this.prototype.getMatrixHeaderField = function(options) {};    
    
    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */    
    this.prototype.getMatrixSublistField = function(options) {};    
    
    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */    
    this.prototype.findMatrixSublistLineWithValue = function(options) {};    
    
    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */    
    this.prototype.getMatrixHeaderCount = function(options) {};    
    
    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record}
     */    
    this.prototype.setCurrentMatrixSublistValue = function(options) {};    
    
    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */    
    this.prototype.getCurrentMatrixSublistValue = function(options) {};    
    
    /**
     * Start listening to events
     * @param {Object} options
     * @param {string[]} options.types [required]
     * @param {eventCallback} options.listener [required]
     * @return {Object} record
     */    
    this.prototype.on = function(options) {};    
    
    /**
     * Stop listening to events
     * @param {Object} options
     * @param {string[]} options.types [required]
     * @param {eventCallback} options.listener [required]
     * @return {Object} record
     */    
    this.prototype.off = function(options) {};    
}

/**
 * Primary object used to encapsulate a record object.
 *
 * @protected
 * @param {Object} options
 * @param {Object} options.recordObj (server-generated object holding the full metadata and data for a record type,
 *     including all scripting and customization. See RecordSerializationKey.java)
 * @param (integer) options.recordObj.id
 * @param {number} options.runtimeVersion is the version of the record API that will be exposed (2.0 or 2.1)
 * @param (boolean) options.recordObj.isSubrecord
 * @param (boolean) options.recordObj.isDynamic
 * @param (boolean) options.recordObj.isReadOnly
 * @param (boolean) options.recordObj.isCurrentRecord
 * @param (boolean) options.recordObj.isUserEvent
 * @param (Object) options.recordObj.recordContext
 * @param (Metadata) options.recordObj.metadata (record metadata data used to populate the model controller)
 * @param (ModelController) options.recordObj.data (record data used to populate the model)
 * @param (RecordStateController) options.recordObj.state (record state to use to pre-populate the model controller)
 * @return {Record}
 * @constructor
 */
function Record() {
    
    /**
     * provides available macros
     * @returns {Object} a set of macros (@see Macro) defined on the record indexed by macroId
     */    
    this.prototype.getMacros = function(options) {};    
    
    /**
     * provides a macro to execute
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {String} [options.package] macro package
     * @returns {?Macro} executor function for macro specified by options
     */    
    this.prototype.getMacro = function(options) {};    
    
    /**
     * performs macro operation and returns result
     * executeMacro.promise returns a Promise
     * @param {Object} options
     * @param {String} options.id macro id
     * @param {Object} [options.params] macro arguments
     * @returns {?Object} macro result or null
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
     */    
    this.prototype.executeMacro = function(options) {};    
    
    /**
     * remove body field data
     * @param {Object} options
     * @param {string} options.fieldId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.removeField = function(options) {};    
    
    /**
     * return array of names of all body fields, including machine header field and matrix header fields
     * @returns {string[]}
     */    
    this.prototype.getFields = function(options) {};    
    
    /**
     * return array of names of all sublists
     * @returns {string[]}
     */    
    this.prototype.getSublists = function(options) {};    
    
    /**
     * return value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @returns {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
     */    
    this.prototype.getValue = function(options) {};    
    
    /**
     * set value of the field
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {number|Date|string|Array|boolean} options.value
     * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.setValue = function(options) {};    
    
    /**
     * get value of the field in text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @returns {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.getText = function(options) {};    
    
    /**
     * set value of the field by text representation
     * @param {Object} options
     * @param {string} options.fieldId
     * @param {string} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
     */    
    this.prototype.setText = function(options) {};    
    
    /**
     * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @returns {number}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
     */    
    this.prototype.findSublistLineWithValue = function(options) {};    
    
    /**
     * return value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @returns {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setSublistText
     */    
    this.prototype.getSublistValue = function(options) {};    
    
    /**
     * set the value of a sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {(number|Date|string|Array|boolean)} options.value
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */    
    this.prototype.setSublistValue = function(options) {};    
    
    /**
     * return value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @returns {string}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked prior using setSublistText
     */    
    this.prototype.getSublistText = function(options) {};    
    
    /**
     * set the value of a sublist field in text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @param {string} options.text
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId, fieldId, or line is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id, field id, or line number
     */    
    this.prototype.setSublistText = function(options) {};    
    
    /**
     * return line count of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {number}
     */    
    this.prototype.getLineCount = function(options) {};    
    
    /**
     * insert a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.beforeLineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @returns {Record}
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and beforeLineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and beforeLineInstanceId
     *     are missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable or before exists and before is an instanceId that does not point to a line in the sublist.
     */    
    this.prototype.insertLine = function(options) {};    
    
    /**
     * remove a sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {number} options.line
     * @param {string} options.lineInstanceId
     * @param {boolean} [ignoreRecalc=false] options.ignoreRecalc ignore recalc scripting
     * @returns {Record}
     * @throws {SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS if both line and lineInstanceId are provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or both line and lineInstanceId are
     *     missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId or line index is invalid or if machine is not
     *     editable
     */    
    this.prototype.removeLine = function(options) {};    
    
    /**
     * select a new line at the end of sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
     * @restriction only available in dynamic record
     */    
    this.prototype.selectNewLine = function(options) {};    
    
    /**
     * cancel the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
     * @restriction only available in dynamic record
     */    
    this.prototype.cancelLine = function(options) {};    
    
    /**
     * commit the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
     * @restriction only available in dynamic record
     */    
    this.prototype.commitLine = function(options) {};    
    
    /**
     * return value of a sublist field on the current selected sublist line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */    
    this.prototype.getCurrentSublistValue = function(options) {};    
    
    /**
     * set the value for field in the current selected line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.value
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     */    
    this.prototype.setCurrentSublistValue = function(options) {};    
    
    /**
     * return the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @returns {(number|Date|string|Array|boolean)}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or field id
     * @restriction only available in dynamic record
     */    
    this.prototype.getCurrentSublistText = function(options) {};    
    
    /**
     * set the value for field in the current selected line by text representation
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {(number|Date|string|Array|boolean)} options.text
     * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
     * @returns {Record}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} A_SCRIPT_IS_ATTEMPTING_TO_EDIT_THE_1_SUBLIST_THIS_SUBLIST_IS_CURRENTLY_IN_READONLY_MODE_AND_CANNOT_BE_EDITED_CALL_YOUR_NETSUITE_ADMINISTRATOR_TO_DISABLE_THIS_SCRIPT_IF_YOU_NEED_TO_SUBMIT_THIS_RECORD
     *     if user tries to edit readonly sublist field
     * @restriction only available in dynamic record
     */    
    this.prototype.setCurrentSublistText = function(options) {};    
    
    /**
     * save record updates to the system
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @returns {number} id of submitted record
     */    
    function saveThis() {}    
    saveThis.prototype.promise = function() {};    
    this.prototype.save = new saveThis();    
    this.prototype.save = function() {}    
    
    /**
     * Save record updates to the system and return object with additional information about the saved record.
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
     * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     * @returns {number} id of submitted record
     */    
    function saveAndFetchThis() {}    
    saveAndFetchThis.prototype.promise = function() {};    
    this.prototype.saveAndFetch = new saveAndFetchThis();    
    this.prototype.saveAndFetch = function() {}    
    
    /**
     * return a value indicating if the field has a subrecord
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {boolean}
     */    
    this.prototype.hasSubrecord = function(options) {};    
    
    /**
     * get the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Subrecord}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
     * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
     */    
    this.prototype.getSubrecord = function(options) {};    
    
    /**
     * remove the subrecord for the associated field
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Record}
     */    
    this.prototype.removeSubrecord = function(options) {};    
    
    /**
     * return a value indicating if the associated sublist field has a subrecord
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {boolean}
     */    
    this.prototype.hasSublistSubrecord = function(options) {};    
    
    /**
     * get the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Subrecord}
     */    
    this.prototype.getSublistSubrecord = function(options) {};    
    
    /**
     * remove the subrecord for the associated sublist field
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */    
    this.prototype.removeSublistSubrecord = function(options) {};    
    
    /**
     * return a value indicating if the associated sublist field has a subrecord on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {boolean}
     */    
    this.prototype.hasCurrentSublistSubrecord = function(options) {};    
    
    /**
     * get the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Subrecord}
     */    
    this.prototype.getCurrentSublistSubrecord = function(options) {};    
    
    /**
     * remove the subrecord for the associated sublist field on the current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @restriction only available in dynamic record
     * @return {Record}
     */    
    this.prototype.removeCurrentSublistSubrecord = function(options) {};    
    
    /**
     * returns the specified sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Sublist}
     */    
    this.prototype.getSublist = function(options) {};    
    
    /**
     * return array of names of all fields in a sublist﻿
     * @param {Object} options
     * @param {string} options.sublistId
     * @return {Array}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
     */    
    this.prototype.getSublistFields = function(options) {};    
    
    /**
     * return field object from record
     * @param {Object} options
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
     */    
    this.prototype.getField = function(options) {};    
    
    /**
     * return field object from record's sublist
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @param {number} options.line
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if line number is invalid
     */    
    this.prototype.getSublistField = function(options) {};    
    
    /**
     * return field object from record's sublist current line
     * @param {Object} options
     * @param {string} options.sublistId
     * @param {string} options.fieldId
     * @return {Field}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
     * @restriction only available in dynamic record
     */    
    this.prototype.getCurrentSublistField = function(options) {};    
    
    /**
     * set the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @param {boolean} [options.ignoreFieldChange] Ignore the field change script (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Record}
     */    
    this.prototype.setMatrixHeaderValue = function(options) {};    
    
    /**
     * get the value for the associated header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */    
    this.prototype.getMatrixHeaderValue = function(options) {};    
    
    /**
     * set the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @param {string} options.value the value to set it to
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in deferred dynamic record
     * @return {Record}
     */    
    this.prototype.setMatrixSublistValue = function(options) {};    
    
    /**
     * get the value for the associated field in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.line the line number for the field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number|Date|string}
     */    
    this.prototype.getMatrixSublistValue = function(options) {};    
    
    /**
     * get the field for the specified header in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */    
    this.prototype.getMatrixHeaderField = function(options) {};    
    
    /**
     * get the field for the specified sublist in the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.column the column number for the field
     * @param {number} options.line the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {Field}
     */    
    this.prototype.getMatrixSublistField = function(options) {};    
    
    /**
     * returns the line number of the first line that contains the specified value in the specified column of the matrix
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @param {number} options.value the column number for the field
     * @param {number} options.column the line number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */    
    this.prototype.findMatrixSublistLineWithValue = function(options) {};    
    
    /**
     * returns the number of columns for the specified matrix.
     * @param {Object} options
     * @param {string} options.sublistId the id of sublist in which the matrix is in.
     * @param {string} options.fieldId the id of the matrix field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @return {number}
     */    
    this.prototype.getMatrixHeaderCount = function(options) {};    
    
    /**
     * set the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @param {string} options.value - the value to set it to
     * @param {boolean} options.ignoreFieldChange (optional) - Ignore the field change script (default false)
     * @param {boolean} options.fireSlavingSync (optional) - Flag to perform slaving synchronously (default false)
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {Record}
     */    
    this.prototype.setCurrentMatrixSublistValue = function(options) {};    
    
    /**
     * get the value for the line currently selected in the matrix
     * @param {Object} options
     * @param {string} options.sublistId - the id of sublist in which the matrix is in.
     * @param {string} options.fieldId - the id of the matrix field
     * @param {number} options.column - the column number for the field
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
     * @restriction only available in dynamic record
     * @return {number|Date|string}
     */    
    this.prototype.getCurrentMatrixSublistValue = function(options) {};    
    
    /**
     * Start listening to events
     * @param {Object} options
     * @param {string[]} options.types [required]
     * @param {eventCallback} options.listener [required]
     * @return {Object} record
     */    
    this.prototype.on = function(options) {};    
    
    /**
     * Stop listening to events
     * @param {Object} options
     * @param {string[]} options.types [required]
     * @param {eventCallback} options.listener [required]
     * @return {Object} record
     */    
    this.prototype.off = function(options) {};    
}

/**
 * Return a new instance of sublist object
 *
 * @param {Object} sublist
 * @param {string} sublist.type type of sublist
 * @param {SublistState} sublist.sublistState SublistState

 * @return {Sublist}
 * @constructor
 *
 * @since 2015.2
 */
function Sublist() {
    
    /**
     * The name of the sublist.
     * @name Sublist#name
     * @type string
     * @readonly
     */    
    this.prototype.getName = function(options) {};    
    
    /**
     * The type of the sublist.
     * @name Sublist#type
     * @type string
     * @readonly
     */    
    this.prototype.getType = function(options) {};    
    
    /**
     * The sublist is changed
     * @name Sublist#isChanged
     * @type boolean
     * @readonly
     */    
    this.prototype.isChanged = function(options) {};    
    
    /**
     * The sublist is hidden
     * @name Sublist#isHidden
     * @type boolean
     * @readonly
     */    
    this.prototype.isHidden = function(options) {};    
    
    /**
     * The sublist is display
     * @name Sublist#isDisplay
     * @type boolean
     * @readonly
     */    
    this.prototype.isDisplay = function(options) {};    
    
    /**
     * Returns the object type name (sublist.Sublist)
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     * @returns {{id: string, type: string, isChanged: boolean, isDisplay: boolean}}
     */    
    this.prototype.toJSON = function(options) {};    
}

/**
 * @protected
 * @constructor
 */
function Field() {
    
    /**
     * Return label of the field
     * @name Field#label
     * @type string
     * @readonly
     * @since 2015.2
     */    
    this.prototype.label = undefined;    
    /**
     * Return id of the field
     * @name Field#id
     * @type string
     * @readonly
     * @since 2015.2
     */    
    this.prototype.id = undefined;    
    /**
     * Disabled state of the field
     * @name Field#isDisabled
     * @type boolean
     * @since 2015.2
     */    
    this.prototype.isDisabled = undefined;    
    /**
     * Display state of the field
     * @name Field#isDisplay
     * @type boolean
     * @since 2015.2
     */    
    this.prototype.isDisplay = undefined;    
    /**
     * Mandatory state of the field
     * @name Field#isMandatory
     * @type boolean
     * @since 2015.2
     */    
    this.prototype.isMandatory = undefined;    
    /**
     * Read Only state of the field
     * @name Field#isReadOnly
     * @type boolean
     * @since 2015.2
     */    
    this.prototype.isReadOnly = undefined;    
    /**
     * Visible state of the field
     * @name Field#isVisible
     * @type boolean
     * @since 2015.2
     */    
    this.prototype.isVisible = undefined;    
    /**
     * Return type of the field
     * @name Field#type
     * @type string
     * @readonly
     * @since 2015.2
     */    
    this.prototype.type = undefined;    
    /**
     * Return the sublistId of the field
     * @name Field#sublistId
     * @type string
     * @readonly
     * @since 2015.2
     */    
    this.prototype.sublistId = undefined;    
    /**
     * Returns if the field is a popup
     * @name Field#isPopup
     * @type boolean
     * @readonly
     * @since 2015.2
     */    
    this.prototype.isPopup = undefined;    
    /**
     * get JSON format of the object
     * @return {{id: *, label: *, type: *}}
     *
     */    
    this.prototype.toJSON = function(options) {};    
    
    /**
     * @return {string}
     *
     */    
    this.prototype.toString = function(options) {};    
}

config = new config();
/**
 * @type {config}
 */
N.prototype.config = config;