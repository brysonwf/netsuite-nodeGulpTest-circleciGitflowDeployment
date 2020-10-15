/**
 * SuiteScript record module (Server Side)
 *
 * @module N/record
 * @NApiVersion 2.x
 *
 */
function record() {
}

/**
 * Create a new record object based on provided type
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] record default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
 *
 * @since 2015.2
 */
function createRecord() {
}

createRecord.prototype.promise = function () {
};
record.prototype.create = new createRecord();
record.prototype.create = function () {
}

/**
 * Load an existing nlobjRecord from the database based on provided type, id
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] record default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
 *
 * @since 2015.2
 */
function loadRecord() {
}

loadRecord.prototype.promise = function () {

  //load vars should be global


};
record.prototype.load = new loadRecord();
record.prototype.load = function () {
  return 'record';
}

/**
 * Copy a record object based on provided type, id
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] record default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
 *
 * @since 2015.2
 */
function copyRecord() {
}

copyRecord.prototype.promise = function () {
};
record.prototype.copy = new copyRecord();
record.prototype.copy = function () {
}

/**
 * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 *
 * @param {Object} options
 * @param {string} options.fromType record type to be transformed from
 * @param {number|string} options.fromId record id to be transformed from
 * @param {string} options.toType record type to be transformed to
 * @param {boolean} [options.isDynamic=false] record is dynamic
 * @param {Object} [options.defaultValues={}] transformed record's default values
 * @return {Record}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
 *
 * @since 2015.2
 */
function transformRecord() {
}

transformRecord.prototype.promise = function () {
};
record.prototype.transform = new transformRecord();
record.prototype.transform = function () {
}

/**
 * Delete a record object based on provided type, id and return the id of deleted record
 *
 * @governance 20 units for transactions, 4 for custom records, 10 for all other records
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @return {number} recordId
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
 *
 * @since 2015.2
 */
function deleteRecord() {
}

deleteRecord.prototype.promise = function () {
};
record.prototype['delete'] = new deleteRecord();
record.prototype['delete'] = function () {
}

/**
 * commit record field updates to the system
 *
 * @governance 10 units for transactions, 2 for custom records, 5 for all other records
 * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
 *
 * @param {Object} options
 * @param {string} options.type record type
 * @param {number|string} options.id record id
 * @param {Object} options.values field and value mapping to be submitted
 * @param {Object} [options.options] additonal flags for submission
 * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
 * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
 *
 * @return {number} id of submitted record
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
 *
 * @since 2015.2
 */
function submitFieldsRecord() {
}

submitFieldsRecord.prototype.promise = function () {
};
record.prototype.submitFields = new submitFieldsRecord();
record.prototype.submitFields = function () {
}

/**
 * attach record to another record
 *
 * @governance 10 units
 *
 * @param {Object} options
 * @param {Object} options.record record to be attached
 * @param {Object} options.record.type the type of the record to be attached
 * @param {number|string} options.record.id the id of the record to be attached
 * @param {Object} options.to the destination record where options.record will be attached to
 * @param {string} options.to.type the type of the destination
 * @param {number|string} options.to.id the id of the destination
 * @param {Object} [options.attributes=null] name/value pairs containing attributes
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
 *
 * @since 2015.2
 */
function attachRecord() {
}

attachRecord.prototype.promise = function () {
};
record.prototype.attach = new attachRecord();
record.prototype.attach = function () {
}

/**
 * detach record from another record
 *
 * @governance 10 units
 *
 * @param {Object} options
 * @param {Object} options.record record to be detached
 * @param {Object} options.record.type the type of the record to be detached
 * @param {number|string} options.record.id the id of the record to be detached
 * @param {Object} options.from the destination record where options.record will be detached from
 * @param {string} options.from.type the type of the destination
 * @param {number|string} options.from.id the id of the destination
 * @param {Object} [options.attributes=null] name/value pairs containing attributes
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
 *
 * @since 2015.2
 */
function detachRecord() {
}

detachRecord.prototype.promise = function () {
};
record.prototype.detach = new detachRecord();
record.prototype.detach = function () {
}

function recordType() {
  this.ACCOUNT = 'account';
  this.ACCOUNTING_BOOK = 'accountingbook';
  this.ACCOUNTING_CONTEXT = 'accountingcontext';
  this.ACCOUNTING_PERIOD = 'accountingperiod';
  this.ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry';
  this.ALLOCATION_SCHEDULE = 'allocationschedule';
  this.AMORTIZATION_SCHEDULE = 'amortizationschedule';
  this.AMORTIZATION_TEMPLATE = 'amortizationtemplate';
  this.ASSEMBLY_BUILD = 'assemblybuild';
  this.ASSEMBLY_ITEM = 'assemblyitem';
  this.ASSEMBLY_UNBUILD = 'assemblyunbuild';
  this.BILLING_ACCOUNT = 'billingaccount';
  this.BILLING_CLASS = 'billingclass';
  this.BILLING_RATE_CARD = 'billingratecard';
  this.BILLING_REVENUE_EVENT = 'billingrevenueevent';
  this.BILLING_SCHEDULE = 'billingschedule';
  this.BIN = 'bin';
  this.BIN_TRANSFER = 'bintransfer';
  this.BIN_WORKSHEET = 'binworksheet';
  this.BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder';
  this.BOM = 'bom';
  this.BOM_REVISION = 'bomrevision';
  this.BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript';
  this.BULK_OWNERSHIP_TRANSFER = 'bulkownershiptransfer';
  this.CALENDAR_EVENT = 'calendarevent';
  this.CAMPAIGN = 'campaign';
  this.CAMPAIGN_RESPONSE = 'campaignresponse';
  this.CAMPAIGN_TEMPLATE = 'campaigntemplate';
  this.CASH_REFUND = 'cashrefund';
  this.CASH_SALE = 'cashsale';
  this.CHARGE = 'charge';
  this.CHARGE_RULE = 'chargerule';
  this.CHECK = 'check';
  this.CLASSIFICATION = 'classification';
  this.CLIENT_SCRIPT = 'clientscript';
  this.CMS_CONTENT = 'cmscontent';
  this.CMS_CONTENT_TYPE = 'cmscontenttype';
  this.COMMERCE_CATEGORY = 'commercecategory';
  this.COMPETITOR = 'competitor';
  this.CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate';
  this.CONTACT = 'contact';
  this.CONTACT_CATEGORY = 'contactcategory';
  this.CONTACT_ROLE = 'contactrole';
  this.COST_CATEGORY = 'costcategory';
  this.COUPON_CODE = 'couponcode';
  this.CREDIT_CARD_CHARGE = 'creditcardcharge';
  this.CREDIT_CARD_REFUND = 'creditcardrefund';
  this.CREDIT_MEMO = 'creditmemo';
  this.CURRENCY = 'currency';
  this.CUSTOMER = 'customer';
  this.CUSTOMER_CATEGORY = 'customercategory';
  this.CUSTOMER_DEPOSIT = 'customerdeposit';
  this.CUSTOMER_MESSAGE = 'customermessage';
  this.CUSTOMER_PAYMENT = 'customerpayment';
  this.CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization';
  this.CUSTOMER_REFUND = 'customerrefund';
  this.CUSTOMER_STATUS = 'customerstatus';
  this.CUSTOM_RECORD = 'customrecord';
  this.CUSTOM_TRANSACTION = 'customtransaction';
  this.DEPARTMENT = 'department';
  this.DEPOSIT = 'deposit';
  this.DEPOSIT_APPLICATION = 'depositapplication';
  this.DESCRIPTION_ITEM = 'descriptionitem';
  this.DISCOUNT_ITEM = 'discountitem';
  this.DOWNLOAD_ITEM = 'downloaditem';
  this.EMAIL_TEMPLATE = 'emailtemplate';
  this.EMPLOYEE = 'employee';
  this.ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping';
  this.ESTIMATE = 'estimate';
  this.EXPENSE_CATEGORY = 'expensecategory';
  this.EXPENSE_REPORT = 'expensereport';
  this.FAIR_VALUE_PRICE = 'fairvalueprice';
  this.FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule';
  this.FOLDER = 'folder';
  this.FULFILLMENT_REQUEST = 'fulfillmentrequest';
  this.GENERIC_RESOURCE = 'genericresource';
  this.GIFT_CERTIFICATE = 'giftcertificate';
  this.GIFT_CERTIFICATE_ITEM = 'giftcertificateitem';
  this.GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping';
  this.INBOUND_SHIPMENT = 'inboundshipment';
  this.INTERCOMP_ALLOCATION_SCHEDULE = 'intercompallocationschedule';
  this.INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry';
  this.INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder';
  this.INVENTORY_ADJUSTMENT = 'inventoryadjustment';
  this.INVENTORY_COST_REVALUATION = 'inventorycostrevaluation';
  this.INVENTORY_COUNT = 'inventorycount';
  this.INVENTORY_DETAIL = 'inventorydetail';
  this.INVENTORY_ITEM = 'inventoryitem';
  this.INVENTORY_NUMBER = 'inventorynumber';
  this.INVENTORY_STATUS = 'inventorystatus';
  this.INVENTORY_STATUS_CHANGE = 'inventorystatuschange';
  this.INVENTORY_TRANSFER = 'inventorytransfer';
  this.INVOICE = 'invoice';
  this.ISSUE = 'issue';
  this.ITEM_ACCOUNT_MAPPING = 'itemaccountmapping';
  this.ITEM_DEMAND_PLAN = 'itemdemandplan';
  this.ITEM_FULFILLMENT = 'itemfulfillment';
  this.ITEM_GROUP = 'itemgroup';
  this.ITEM_LOCATION_CONFIGURATION = 'itemlocationconfiguration';
  this.ITEM_RECEIPT = 'itemreceipt';
  this.ITEM_REVISION = 'itemrevision';
  this.ITEM_SUPPLY_PLAN = 'itemsupplyplan';
  this.JOB = 'job';
  this.JOB_STATUS = 'jobstatus';
  this.JOB_TYPE = 'jobtype';
  this.JOURNAL_ENTRY = 'journalentry';
  this.KIT_ITEM = 'kititem';
  this.LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule';
  this.LEAD = 'lead';
  this.LOCATION = 'location';
  this.LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem';
  this.LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem';
  this.MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate';
  this.MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask';
  this.MANUFACTURING_ROUTING = 'manufacturingrouting';
  this.MAP_REDUCE_SCRIPT = 'mapreducescript';
  this.MARKUP_ITEM = 'markupitem';
  this.MASSUPDATE_SCRIPT = 'massupdatescript';
  this.MESSAGE = 'message';
  this.MFG_PLANNED_TIME = 'mfgplannedtime';
  this.NEXUS = 'nexus';
  this.NON_INVENTORY_ITEM = 'noninventoryitem';
  this.NOTE = 'note';
  this.NOTE_TYPE = 'notetype';
  this.OPPORTUNITY = 'opportunity';
  this.ORDER_SCHEDULE = 'orderschedule';
  this.OTHER_CHARGE_ITEM = 'otherchargeitem';
  this.OTHER_NAME = 'othername';
  this.OTHER_NAME_CATEGORY = 'othernamecategory';
  this.PARTNER = 'partner';
  this.PARTNER_CATEGORY = 'partnercategory';
  this.PAYCHECK = 'paycheck';
  this.PAYCHECK_JOURNAL = 'paycheckjournal';
  this.PAYMENT_ITEM = 'paymentitem';
  this.PAYMENT_METHOD = 'paymentmethod';
  this.PAYROLL_ITEM = 'payrollitem';
  this.PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule';
  this.PHONE_CALL = 'phonecall';
  this.PORTLET = 'portlet';
  this.PRICE_BOOK = 'pricebook';
  this.PRICE_LEVEL = 'pricelevel';
  this.PRICE_PLAN = 'priceplan';
  this.PRICING_GROUP = 'pricinggroup';
  this.PROJECT_EXPENSE_TYPE = 'projectexpensetype';
  this.PROJECT_TASK = 'projecttask';
  this.PROJECT_TEMPLATE = 'projecttemplate';
  this.PROMOTION_CODE = 'promotioncode';
  this.PROSPECT = 'prospect';
  this.PURCHASE_CONTRACT = 'purchasecontract';
  this.PURCHASE_ORDER = 'purchaseorder';
  this.PURCHASE_REQUISITION = 'purchaserequisition';
  this.REALLOCATE_ITEM = 'reallocateitem';
  this.RECEIVE_INBOUND_SHIPMENT = 'receiveinboundshipment';
  this.RESOURCE_ALLOCATION = 'resourceallocation';
  this.RESTLET = 'restlet';
  this.RETURN_AUTHORIZATION = 'returnauthorization';
  this.REVENUE_ARRANGEMENT = 'revenuearrangement';
  this.REVENUE_COMMITMENT = 'revenuecommitment';
  this.REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal';
  this.REVENUE_PLAN = 'revenueplan';
  this.REV_REC_SCHEDULE = 'revrecschedule';
  this.REV_REC_TEMPLATE = 'revrectemplate';
  this.SALES_ORDER = 'salesorder';
  this.SALES_ROLE = 'salesrole';
  this.SALES_TAX_ITEM = 'salestaxitem';
  this.SCHEDULED_SCRIPT = 'scheduledscript';
  this.SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance';
  this.SCRIPT_DEPLOYMENT = 'scriptdeployment';
  this.SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem';
  this.SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem';
  this.SERVICE_ITEM = 'serviceitem';
  this.SHIP_ITEM = 'shipitem';
  this.SOLUTION = 'solution';
  this.STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry';
  this.STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment';
  this.SUBSCRIPTION = 'subscription';
  this.SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder';
  this.SUBSCRIPTION_LINE = 'subscriptionline';
  this.SUBSCRIPTION_PLAN = 'subscriptionplan';
  this.SUBSIDIARY = 'subsidiary';
  this.SUBTOTAL_ITEM = 'subtotalitem';
  this.SUITELET = 'suitelet';
  this.SUPPORT_CASE = 'supportcase';
  this.TASK = 'task';
  this.TAX_ACCT = 'taxacct';
  this.TAX_GROUP = 'taxgroup';
  this.TAX_PERIOD = 'taxperiod';
  this.TAX_TYPE = 'taxtype';
  this.TERM = 'term';
  this.TIME_BILL = 'timebill';
  this.TIME_ENTRY = 'timeentry';
  this.TIME_OFF_CHANGE = 'timeoffchange';
  this.TIME_OFF_PLAN = 'timeoffplan';
  this.TIME_OFF_REQUEST = 'timeoffrequest';
  this.TIME_OFF_RULE = 'timeoffrule';
  this.TIME_OFF_TYPE = 'timeofftype';
  this.TIME_SHEET = 'timesheet';
  this.TOPIC = 'topic';
  this.TRANSFER_ORDER = 'transferorder';
  this.UNITS_TYPE = 'unitstype';
  this.USAGE = 'usage';
  this.USEREVENT_SCRIPT = 'usereventscript';
  this.VENDOR = 'vendor';
  this.VENDOR_BILL = 'vendorbill';
  this.VENDOR_CATEGORY = 'vendorcategory';
  this.VENDOR_CREDIT = 'vendorcredit';
  this.VENDOR_PAYMENT = 'vendorpayment';
  this.VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization';
  this.WEBSITE = 'website';
  this.WORKFLOW_ACTION_SCRIPT = 'workflowactionscript';
  this.WORK_ORDER = 'workorder';
  this.WORK_ORDER_CLOSE = 'workorderclose';
  this.WORK_ORDER_COMPLETION = 'workordercompletion';
  this.WORK_ORDER_ISSUE = 'workorderissue';
  this.WORKPLACE = 'workplace';
}

record.prototype.Type = recordType;

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
  this.prototype.getMacros = function (options) {
  };

  /**
   * provides a macro to execute
   * @param {Object} options
   * @param {String} options.id macro id
   * @param {String} [options.package] macro package
   * @returns {?Macro} executor function for macro specified by options
   */
  this.prototype.getMacro = function (options) {
  };

  /**
   * performs macro operation and returns result
   * executeMacro.promise returns a Promise
   * @param {Object} options
   * @param {String} options.id macro id
   * @param {Object} [options.params] macro arguments
   * @returns {?Object} macro result or null
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
   */
  this.prototype.executeMacro = function (options) {
  };

  /**
   * remove body field data
   * @param {Object} options
   * @param {string} options.fieldId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.removeField = function (options) {
  };

  /**
   * return array of names of all body fields, including machine header field and matrix header fields
   * @returns {string[]}
   */
  this.prototype.getFields = function (options) {
  };

  /**
   * return array of names of all sublists
   * @returns {string[]}
   */
  this.prototype.getSublists = function (options) {
  };

  /**
   * return value of the field
   * @param {Object} options
   * @param {string} options.fieldId
   * @returns {(number|Date|string|Array|boolean)}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
   */
  this.prototype.getValue = function (options) {
    return recordGetValueFunctionVar(options);
  };

  /**
   * set value of the field
   * @param {Object} options
   * @param {string} options.fieldId
   * @param {number|Date|string|Array|boolean} options.value
   * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.setValue = function (options) {
  };

  /**
   * get value of the field in text representation
   * @param {Object} options
   * @param {string} options.fieldId
   * @returns {string}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.getText = function (options) {
  };

  /**
   * set value of the field by text representation
   * @param {Object} options
   * @param {string} options.fieldId
   * @param {string} options.text
   * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.setText = function (options) {
  };

  /**
   * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {(number|Date|string|Array|boolean)} options.value
   * @returns {number}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
   */
  this.prototype.findSublistLineWithValue = function (options) {
  };

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
  this.prototype.getSublistValue = function (options) {
  };

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
  this.prototype.setSublistValue = function (options) {
  };

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
  this.prototype.getSublistText = function (options) {
  };

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
  this.prototype.setSublistText = function (options) {
  };

  /**
   * return line count of sublist
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {number}
   */
  this.prototype.getLineCount = function (options) {
  };

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
  this.prototype.insertLine = function (options) {
  };

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
  this.prototype.removeLine = function (options) {
  };

  /**
   * select a new line at the end of sublist
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
   * @restriction only available in dynamic record
   */
  this.prototype.selectNewLine = function (options) {
  };

  /**
   * cancel the current selected line
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
   * @restriction only available in dynamic record
   */
  this.prototype.cancelLine = function (options) {
  };

  /**
   * commit the current selected line
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
   * @restriction only available in dynamic record
   */
  this.prototype.commitLine = function (options) {
  };

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
  this.prototype.getCurrentSublistValue = function (options) {
  };

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
  this.prototype.setCurrentSublistValue = function (options) {
  };

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
  this.prototype.getCurrentSublistText = function (options) {
  };

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
  this.prototype.setCurrentSublistText = function (options) {
  };

  /**
   * save record updates to the system
   * @governance 20 units for transactions, 4 for custom records, 10 for all other records
   *
   * @param {Object} options
   * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
   * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
   * @returns {number} id of submitted record
   */
  function saveThis() {
  }

  saveThis.prototype.promise = function () {
  };
  this.prototype.save = new saveThis();
  this.prototype.save = function () {
  }

  /**
   * Save record updates to the system and return object with additional information about the saved record.
   * @governance 20 units for transactions, 4 for custom records, 10 for all other records
   *
   * @param {Object} options
   * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
   * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
   * @returns {number} id of submitted record
   */
  function saveAndFetchThis() {
  }

  saveAndFetchThis.prototype.promise = function () {
  };
  this.prototype.saveAndFetch = new saveAndFetchThis();
  this.prototype.saveAndFetch = function () {
  }

  /**
   * return a value indicating if the field has a subrecord
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {boolean}
   */
  this.prototype.hasSubrecord = function (options) {
  };

  /**
   * get the subrecord for the associated field
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {Subrecord}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
   * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
   * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
   */
  this.prototype.getSubrecord = function (options) {
  };

  /**
   * remove the subrecord for the associated field
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {Record}
   */
  this.prototype.removeSubrecord = function (options) {
  };

  /**
   * return a value indicating if the associated sublist field has a subrecord
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {number} options.line
   * @restriction only available in deferred dynamic record
   * @return {boolean}
   */
  this.prototype.hasSublistSubrecord = function (options) {
  };

  /**
   * get the subrecord for the associated sublist field
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {number} options.line
   * @restriction only available in deferred dynamic record
   * @return {Subrecord}
   */
  this.prototype.getSublistSubrecord = function (options) {
  };

  /**
   * remove the subrecord for the associated sublist field
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {number} options.line
   * @restriction only available in deferred dynamic record
   * @return {Record}
   */
  this.prototype.removeSublistSubrecord = function (options) {
  };

  /**
   * return a value indicating if the associated sublist field has a subrecord on the current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @restriction only available in dynamic record
   * @return {boolean}
   */
  this.prototype.hasCurrentSublistSubrecord = function (options) {
  };

  /**
   * get the subrecord for the associated sublist field on the current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @restriction only available in dynamic record
   * @return {Subrecord}
   */
  this.prototype.getCurrentSublistSubrecord = function (options) {
  };

  /**
   * remove the subrecord for the associated sublist field on the current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @restriction only available in dynamic record
   * @return {Record}
   */
  this.prototype.removeCurrentSublistSubrecord = function (options) {
  };

  /**
   * returns the specified sublist
   * @param {Object} options
   * @param {string} options.sublistId
   * @return {Sublist}
   */
  this.prototype.getSublist = function (options) {
  };

  /**
   * return array of names of all fields in a sublist﻿
   * @param {Object} options
   * @param {string} options.sublistId
   * @return {Array}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
   */
  this.prototype.getSublistFields = function (options) {
  };

  /**
   * return field object from record
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {Field}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
   */
  this.prototype.getField = function (options) {
  };

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
  this.prototype.getSublistField = function (options) {
  };

  /**
   * return field object from record's sublist current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @return {Field}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
   * @restriction only available in dynamic record
   */
  this.prototype.getCurrentSublistField = function (options) {
  };

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
  this.prototype.setMatrixHeaderValue = function (options) {
  };

  /**
   * get the value for the associated header in the matrix
   * @param {Object} options
   * @param {string} options.sublistId the id of sublist in which the matrix is in.
   * @param {string} options.fieldId the id of the matrix field
   * @param {number} options.column the column number for the field
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
   * @return {number|Date|string}
   */
  this.prototype.getMatrixHeaderValue = function (options) {
  };

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
  this.prototype.setMatrixSublistValue = function (options) {
  };

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
  this.prototype.getMatrixSublistValue = function (options) {
  };

  /**
   * get the field for the specified header in the matrix
   * @param {Object} options
   * @param {string} options.sublistId the id of sublist in which the matrix is in.
   * @param {string} options.fieldId the id of the matrix field
   * @param {number} options.column the column number for the field
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
   * @return {Field}
   */
  this.prototype.getMatrixHeaderField = function (options) {
  };

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
  this.prototype.getMatrixSublistField = function (options) {
  };

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
  this.prototype.findMatrixSublistLineWithValue = function (options) {
  };

  /**
   * returns the number of columns for the specified matrix.
   * @param {Object} options
   * @param {string} options.sublistId the id of sublist in which the matrix is in.
   * @param {string} options.fieldId the id of the matrix field
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
   * @return {number}
   */
  this.prototype.getMatrixHeaderCount = function (options) {
  };

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
  this.prototype.setCurrentMatrixSublistValue = function (options) {
  };

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
  this.prototype.getCurrentMatrixSublistValue = function (options) {
  };

  /**
   * Start listening to events
   * @param {Object} options
   * @param {string[]} options.types [required]
   * @param {eventCallback} options.listener [required]
   * @return {Object} record
   */
  this.prototype.on = function (options) {
  };

  /**
   * Stop listening to events
   * @param {Object} options
   * @param {string[]} options.types [required]
   * @param {eventCallback} options.listener [required]
   * @return {Object} record
   */
  this.prototype.off = function (options) {
  };
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
  this.prototype.getMacros = function (options) {
  };

  /**
   * provides a macro to execute
   * @param {Object} options
   * @param {String} options.id macro id
   * @param {String} [options.package] macro package
   * @returns {?Macro} executor function for macro specified by options
   */
  this.prototype.getMacro = function (options) {
  };

  /**
   * performs macro operation and returns result
   * executeMacro.promise returns a Promise
   * @param {Object} options
   * @param {String} options.id macro id
   * @param {Object} [options.params] macro arguments
   * @returns {?Object} macro result or null
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.id is missing or undefined
   */
  this.prototype.executeMacro = function (options) {
  };

  /**
   * remove body field data
   * @param {Object} options
   * @param {string} options.fieldId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.removeField = function (options) {
  };

  /**
   * return array of names of all body fields, including machine header field and matrix header fields
   * @returns {string[]}
   */
  this.prototype.getFields = function (options) {
  };

  /**
   * return array of names of all sublists
   * @returns {string[]}
   */
  this.prototype.getSublists = function (options) {
  };

  /**
   * return value of the field
   * @param {Object} options
   * @param {string} options.fieldId
   * @returns {(number|Date|string|Array|boolean)}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_API_USAGE if invoked after using setText
   */
  this.prototype.getValue = function (options) {
    return recordGetValueFunctionVar(options);
  };

  /**
   * set value of the field
   * @param {Object} options
   * @param {string} options.fieldId
   * @param {number|Date|string|Array|boolean} options.value
   * @param {boolean} [options.ignoreFieldChange=false] Ignore the field change script
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.setValue = function (options) {
  };

  /**
   * get value of the field in text representation
   * @param {Object} options
   * @param {string} options.fieldId
   * @returns {string}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.getText = function (options) {
  };

  /**
   * set value of the field by text representation
   * @param {Object} options
   * @param {string} options.fieldId
   * @param {string} options.text
   * @param {boolean} [options.ignoreFieldChange=false] ignore field change script and slaving event if set to true
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if fieldId is missing or undefined
   */
  this.prototype.setText = function (options) {
  };

  /**
   * return the line number for the first occurrence of a field value in a sublist and return -1 if not found
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {(number|Date|string|Array|boolean)} options.value
   * @returns {number}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or field is missing
   */
  this.prototype.findSublistLineWithValue = function (options) {
  };

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
  this.prototype.getSublistValue = function (options) {
  };

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
  this.prototype.setSublistValue = function (options) {
  };

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
  this.prototype.getSublistText = function (options) {
  };

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
  this.prototype.setSublistText = function (options) {
  };

  /**
   * return line count of sublist
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {number}
   */
  this.prototype.getLineCount = function (options) {
  };

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
  this.prototype.insertLine = function (options) {
  };

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
  this.prototype.removeLine = function (options) {
  };

  /**
   * select a new line at the end of sublist
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id or sublist is not editable
   * @restriction only available in dynamic record
   */
  this.prototype.selectNewLine = function (options) {
  };

  /**
   * cancel the current selected line
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if sublistId is invalid or if machine is not editable
   * @restriction only available in dynamic record
   */
  this.prototype.cancelLine = function (options) {
  };

  /**
   * commit the current selected line
   * @param {Object} options
   * @param {string} options.sublistId
   * @returns {Record}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId is missing or undefined
   * @throws {SuiteScriptError} SSS_INVALID_SUBLIST_OPERATION if invalid sublist id
   * @restriction only available in dynamic record
   */
  this.prototype.commitLine = function (options) {
  };

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
  this.prototype.getCurrentSublistValue = function (options) {
  };

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
  this.prototype.setCurrentSublistValue = function (options) {
  };

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
  this.prototype.getCurrentSublistText = function (options) {
  };

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
  this.prototype.setCurrentSublistText = function (options) {
  };

  /**
   * save record updates to the system
   * @governance 20 units for transactions, 4 for custom records, 10 for all other records
   *
   * @param {Object} options
   * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
   * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
   * @returns {number} id of submitted record
   */
  function saveThis() {
  }

  saveThis.prototype.promise = function () {
  };
  this.prototype.save = new saveThis();
  this.prototype.save = function () {
  }

  /**
   * Save record updates to the system and return object with additional information about the saved record.
   * @governance 20 units for transactions, 4 for custom records, 10 for all other records
   *
   * @param {Object} options
   * @param {boolean} [options.enableSourcing=false] enable sourcing during record update
   * @param {boolean} [options.ignoreMandatoryFields=false] ignore mandatory field during record submission
   * @returns {number} id of submitted record
   */
  function saveAndFetchThis() {
  }

  saveAndFetchThis.prototype.promise = function () {
  };
  this.prototype.saveAndFetch = new saveAndFetchThis();
  this.prototype.saveAndFetch = function () {
  }

  /**
   * return a value indicating if the field has a subrecord
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {boolean}
   */
  this.prototype.hasSubrecord = function (options) {
  };

  /**
   * get the subrecord for the associated field
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {Subrecord}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
   * @throws {SuiteScriptError} FIELD_1_IS_NOT_A_SUBRECORD_FIELD if field is not a subrecord field
   * @throws {SuiteScriptError} FIELD_1_IS_DISABLED_YOU_CANNOT_APPLY_SUBRECORD_OPERATION_ON_THIS_FIELD if field is disable
   */
  this.prototype.getSubrecord = function (options) {
  };

  /**
   * remove the subrecord for the associated field
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {Record}
   */
  this.prototype.removeSubrecord = function (options) {
  };

  /**
   * return a value indicating if the associated sublist field has a subrecord
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {number} options.line
   * @restriction only available in deferred dynamic record
   * @return {boolean}
   */
  this.prototype.hasSublistSubrecord = function (options) {
  };

  /**
   * get the subrecord for the associated sublist field
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {number} options.line
   * @restriction only available in deferred dynamic record
   * @return {Subrecord}
   */
  this.prototype.getSublistSubrecord = function (options) {
  };

  /**
   * remove the subrecord for the associated sublist field
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @param {number} options.line
   * @restriction only available in deferred dynamic record
   * @return {Record}
   */
  this.prototype.removeSublistSubrecord = function (options) {
  };

  /**
   * return a value indicating if the associated sublist field has a subrecord on the current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @restriction only available in dynamic record
   * @return {boolean}
   */
  this.prototype.hasCurrentSublistSubrecord = function (options) {
  };

  /**
   * get the subrecord for the associated sublist field on the current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @restriction only available in dynamic record
   * @return {Subrecord}
   */
  this.prototype.getCurrentSublistSubrecord = function (options) {
  };

  /**
   * remove the subrecord for the associated sublist field on the current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @restriction only available in dynamic record
   * @return {Record}
   */
  this.prototype.removeCurrentSublistSubrecord = function (options) {
  };

  /**
   * returns the specified sublist
   * @param {Object} options
   * @param {string} options.sublistId
   * @return {Sublist}
   */
  this.prototype.getSublist = function (options) {
  };

  /**
   * return array of names of all fields in a sublist﻿
   * @param {Object} options
   * @param {string} options.sublistId
   * @return {Array}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.sublistId is missing or undefined﻿
   */
  this.prototype.getSublistFields = function (options) {
  };

  /**
   * return field object from record
   * @param {Object} options
   * @param {string} options.fieldId
   * @return {Field}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.fieldId is missing or undefined
   */
  this.prototype.getField = function (options) {
  };

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
  this.prototype.getSublistField = function (options) {
  };

  /**
   * return field object from record's sublist current line
   * @param {Object} options
   * @param {string} options.sublistId
   * @param {string} options.fieldId
   * @return {Field}
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if sublistId or fieldId is missing
   * @restriction only available in dynamic record
   */
  this.prototype.getCurrentSublistField = function (options) {
  };

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
  this.prototype.setMatrixHeaderValue = function (options) {
  };

  /**
   * get the value for the associated header in the matrix
   * @param {Object} options
   * @param {string} options.sublistId the id of sublist in which the matrix is in.
   * @param {string} options.fieldId the id of the matrix field
   * @param {number} options.column the column number for the field
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
   * @return {number|Date|string}
   */
  this.prototype.getMatrixHeaderValue = function (options) {
  };

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
  this.prototype.setMatrixSublistValue = function (options) {
  };

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
  this.prototype.getMatrixSublistValue = function (options) {
  };

  /**
   * get the field for the specified header in the matrix
   * @param {Object} options
   * @param {string} options.sublistId the id of sublist in which the matrix is in.
   * @param {string} options.fieldId the id of the matrix field
   * @param {number} options.column the column number for the field
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
   * @return {Field}
   */
  this.prototype.getMatrixHeaderField = function (options) {
  };

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
  this.prototype.getMatrixSublistField = function (options) {
  };

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
  this.prototype.findMatrixSublistLineWithValue = function (options) {
  };

  /**
   * returns the number of columns for the specified matrix.
   * @param {Object} options
   * @param {string} options.sublistId the id of sublist in which the matrix is in.
   * @param {string} options.fieldId the id of the matrix field
   * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any required values are missing
   * @return {number}
   */
  this.prototype.getMatrixHeaderCount = function (options) {
  };

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
  this.prototype.setCurrentMatrixSublistValue = function (options) {
  };

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
  this.prototype.getCurrentMatrixSublistValue = function (options) {
  };

  /**
   * Start listening to events
   * @param {Object} options
   * @param {string[]} options.types [required]
   * @param {eventCallback} options.listener [required]
   * @return {Object} record
   */
  this.prototype.on = function (options) {
  };

  /**
   * Stop listening to events
   * @param {Object} options
   * @param {string[]} options.types [required]
   * @param {eventCallback} options.listener [required]
   * @return {Object} record
   */
  this.prototype.off = function (options) {
  };
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
  this.prototype.getName = function (options) {
  };

  /**
   * The type of the sublist.
   * @name Sublist#type
   * @type string
   * @readonly
   */
  this.prototype.getType = function (options) {
  };

  /**
   * The sublist is changed
   * @name Sublist#isChanged
   * @type boolean
   * @readonly
   */
  this.prototype.isChanged = function (options) {
  };

  /**
   * The sublist is hidden
   * @name Sublist#isHidden
   * @type boolean
   * @readonly
   */
  this.prototype.isHidden = function (options) {
  };

  /**
   * The sublist is display
   * @name Sublist#isDisplay
   * @type boolean
   * @readonly
   */
  this.prototype.isDisplay = function (options) {
  };

  /**
   * Returns the object type name (sublist.Sublist)
   * @returns {string}
   */
  this.prototype.toString = function (options) {
  };

  /**
   * JSON.stringify() implementation.
   * @returns {{id: string, type: string, isChanged: boolean, isDisplay: boolean}}
   */
  this.prototype.toJSON = function (options) {
  };
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
  this.prototype.toJSON = function (options) {
  };

  /**
   * @return {string}
   *
   */
  this.prototype.toString = function (options) {
  };
}

record = new record();
/**
 * @type {record}
 */
var N = N || function () {
};
N.prototype.record = record;