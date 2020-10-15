/**
 * SuiteScript new-generation search common module
 *
 * @module N/advancedSearch
 * @suiteScriptVersion 2.x
 */
function advancedSearch() {}
/**
 * The search definition.
 */
function Search() {
    
    /**
     * Search type. Returns the search type given upon the creation of the search object.
     * @name Search#type
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.type = undefined;    
    /**
     * Search condition.
     * @name Search#condition
     * @type Condition
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than search.Condition
     */    
    this.prototype.condition = undefined;    
    /**
     * Columns to be returned from the search.
     * @name Search#columns
     * @type Column[]
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than search.Column array
     */    
    this.prototype.columns = undefined;    
    /**
     * Specifies how the results will be sorted.
     * @name Search#sort
     * @type Sort[]
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting value of different type than search.Sort array
     */    
    this.prototype.sort = undefined;    
    /**
     * Children of the root component of the search. It is an object with key/value pairs where key is the name of the
     * child component and value is the corresponding Component object. This is a shortcut for the Search.root.child expression.
     * @name Search#child
     * @type Object
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.child = undefined;    
    /**
     * Access the root component of the search. It is the component that corresponds to the search type given upon the
     * creation of the whole Search object.
     * @name Search#root
     * @type Component
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.root = undefined;    
    /**
     * Execute the search and return results.
     * @returns {ResultSet} the result set object
     */    
    function runThis() {}    
    runThis.prototype.promise = function() {};    
    this.prototype.run = new runThis();    
    this.prototype.run = function() {}    
    
    /**
     * Autojoin the root component of the Search with another search type. This is a shortcut for Search.root.autoJoin.
     * @see Component#autoJoin
     */    
    this.prototype.autoJoin = function(options) {};    
    
    /**
     * Create a Condition object based on the root component of the Search. This is a shortcut for Search.root.createCondition.
     * @see Component#createCondition
     */    
    this.prototype.createCondition = function(options) {};    
    
    /**
     * Create a Column object based on the root component of the Search. This is a shortcut for Search.root.createColumn.
     * @see Component#createColumn
     */    
    this.prototype.createColumn = function(options) {};    
    
    /**
     * Create a Sort object based on the root component of the Search. This is a shortcut for Search.root.createSort.
     * @see Component#createSort
     */    
    this.prototype.createSort = function(options) {};    
    
    /**
     * Create a new Condition object that corresponds to a logical conjunction (AND) of the Condition objects given to
     * the method as arguments. The arguments must be one or more Condition objects.
     * @param {Condition} condition1
     * @param {Condition} condition2
     * @param {Condition} condition<n>
     * @returns {Condition}
     */    
    this.prototype.and = function(options) {};    
    
    /**
     * Create a new Condition object that corresponds to a logical disjunction (OR) of the Condition objects given to
     * the method as arguments. The arguments must be one or more Condition objects.
     * @param {Condition} condition1
     * @param {Condition} condition2
     * @param {Condition} condition<n>
     * @returns {Condition}
     */    
    this.prototype.or = function(options) {};    
    
    /**
     * Create a new Condition object that corresponds to a logical negation (NOT) of the Condition object given to the method
     * as argument.
     * @param {Condition} condition
     * @returns {Condition}
     */    
    this.prototype.not = function(options) {};    
    
    /**
     * Returns the object type name.
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     * @returns {Object}
     */    
    this.prototype.toJSON = function(options) {};    
}

/**
 * One component of the search definition. The Search object always contains at least one Component object called the root
 * component. Searches with multi-level joins contain multiple Component objects linked together into a parent/child hierarchy.
 */
function Component() {
    
    /**
     * Search type. Returns the search type of this component.
     * @name Component#type
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.type = undefined;    
    /**
     * Returns the Component that corresponds to the ancestor of this component in the search object model.
     * @name Component#parent
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.parent = undefined;    
    /**
     * Children of this component. It is an object with key/value pairs where key is the name of the child component
     * and value is the corresponding Component object.
     * @name Component#child
     * @type Object
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.child = undefined;    
    /**
     * Autojoin this component with another search type. A new component corresponding to the given relationship is created
     * and joined with this one.
     * @param {Object} options
     * @param {string} options.relationship The name of the relationship that will be used to determine the search type of the
     *                                      newly joined component and also the columns on which the search types will be joined
     *                                      together. For example "salesrep".
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if relationship is undefined
     * @throws {error.SuiteScriptError} RELATIONSHIP_ALREADY_USED if relationship is already used
     * @returns {Component}
     */    
    this.prototype.autoJoin = function(options) {};    
    
    /**
     * Create a Condition object based on this search component. Use either name + operator + values or formula + (optional) type.
     * @param {Object} options
     * @param {string} options.name Field (column) name
     * @param {string} options.operator Operator. Use the Operator enum.
     * @param {string[]} options.values Array of values
     * @param {string} options.formula Formula
     * @param {string} options.type (optional) Explicitly define value type in case it is not determined correctly from the
     *                                         formula. Use the ReturnType enum.
     * @param {string} options.aggregate (optional) Aggregate function. Use the Aggregate enum.
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} OPERATOR_ARITY_MISMATCH if requested operator cannot work with specified number of arguments
     * @throws {error.SuiteScriptError} INVALID_SEARCH_OPERATOR if wrong search operator is used
     * @returns {Condition}
     */    
    this.prototype.createCondition = function(options) {};    
    
    /**
     * Create a Column object based on this search component. Use either name or formula + (optional) type.
     * @param {Object} options
     * @param {string} options.name Field (column) name
     * @param {string} options.formula Formula
     * @param {string} options.type (optional) Explicitly define value type in case it is not determined correctly from the
     *                                         formula. Use the ReturnType enum.
     * @param {string} options.aggregate (optional) Aggregate function. Use the Aggregate enum.
     * @param {boolean} options.groupBy (optional) Indicates that we want the results grouped by this column; used together
     *                                             with aggregate function defined on other columns.
     * @throws {error.SuiteScriptError} MISSING_REQD_ARGUMENT if options are undefined
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE if options isn't object
     * @throws {error.SuiteScriptError} MUTUALLY_EXCLUSIVE_ARGUMENTS when two mutually arguments are defined
     * @throws {error.SuiteScriptError} NEITHER_ARGUMENT_DEFINED when neither of two mandatory arguments is defined
     * @returns {Column}
     */    
    this.prototype.createColumn = function(options) {};    
    
    /**
     * Create a Sort object based on this search component.
     * @param {Object} options
     * @param {string} options.column The Column by which we want to sort.
     * @param {string} options.direction (optional) The sort direction. Use the Direction enum. If not specified, Direction.ASC
     *                                              is the default value.
     * @returns {Sort}
     */    
    this.prototype.createSort = function(options) {};    
}

/**
 * Specifies a return column.
 */
function Column() {
    
    /**
     * Column name.
     * @name Column#name
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.name = undefined;    
    /**
     * Search component. Returns the Component to which this column belongs.
     * @name Column#component
     * @type Component
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.component = undefined;    
    /**
     * Formula.
     * @name Column#formula
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.formula = undefined;    
    /**
     * Desired value type of the formula (if it was explicitly stated upon Column creation).
     * @name Column#type
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.type = undefined;    
    /**
     * Aggregate function.
     * @name Column#aggregate
     * @type string (value from Aggregate enum)
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.aggregate = undefined;    
    /**
     * The group-by flag.
     * @name Column#groupBy
     * @type boolean
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.groupBy = undefined;}

/**
 * Specifies sorting by the values of a given column and the sort direction.
 */
function Sort() {
    
    /**
     * The search column by which we want to sort.
     * @name Sort#column
     * @type Column
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.column = undefined;    
    /**
     * Sort direction.
     * @name Sort#direction
     * @type string (value from the Sort enum)
     * @throws {error.SuiteScriptError} WRONG_PARAMETER_TYPE when setting wrong sort order is attempted
     */    
    this.prototype.direction = undefined;}

/**
 * Specifies the condition used to filter the results. It can consist of other Condition objects.
 */
function Condition() {
    
    /**
     * This is only applicable to "non-leaf" conditions that were created by AND-ing, OR-ing or NOT-ing other Condition objects.
     * In such case this property holds the child Component objects that are arguments of the logical operation.
     * @name Condition#children
     * @type Condition[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.children = undefined;    
    /**
     * Field name. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     * @name Condition#name
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.name = undefined;    
    /**
     * Operator. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     * @name Condition#operator
     * @type string (values from the Operator enum)
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.operator = undefined;    
    /**
     * Values. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     * @name Condition#values
     * @type string[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.values = undefined;    
    /**
     * Formula. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     * @name Condition#formula
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.formula = undefined;    
    /**
     * Return type of the formula, if explicitly specified. This is only applicable to "leaf" conditions (equivalent to the
     * former Filter).
     * @name Condition#type
     * @type string (values from the ReturnType enum)
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.type = undefined;    
    /**
     * Aggregate function. This is only applicable to "leaf" conditions (equivalent to the former Filter).
     * @name Condition#aggregate
     * @type string (values from the Aggregate enum)
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.aggregate = undefined;    
    /**
     * Search component to which this condition belongs. This is only applicable to "leaf" conditions (equivalent to the
     * former Filter).
     * @name Condition#component
     * @type string
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.component = undefined;}

/**
 * Set of results returned by the search.
 */
function ResultSet() {
    
    /**
     * The actual search results.
     * @name ResultSet#results
     * @type Result[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.results = undefined;    
    /**
     * The types of the return values. Array of values from the ReturnType enum. Number and order of values in the array
     * exactly matches the ResultSet#columns property.
     * @name ResultSet#types
     * @type string[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.types = undefined;    
    /**
     * The return columns.
     * @name ResultSet#columns
     * @type Column[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.columns = undefined;}

/**
 * Corresponds to a single row of the ResultSet.
 */
function Result() {
    
    /**
     * The result values. Value types correspond to the ResultSet#types property. Number and order of values in the array
     * exactly matches the ResultSet#types, ResultSet#columns or Result#columns property.
     * @name Result#values
     * @type string|number[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.values = undefined;    
    /**
     * The return columns. This is equivalent to ResultSet#columns.
     * @name Result#columns
     * @type Column[]
     * @readonly
     * @throws {error.SuiteScriptError} READ_ONLY when setting the property is attempted
     */    
    this.prototype.columns = undefined;}

/**
 * Create a Search object with a single search component based on the given search type.
 * @param {Object} options
 * @param {string} options.type The search type. Use the Type enum.
 * @throws {error.SuiteScriptError} INVALID_RCRD_TYPE when search type is invalid
 * @returns {Search}
 */
function createSearch() {
}

/**
 * TODO not yet implemented
 * @param options
 */
function loadSearch() {
}

advancedSearch = new advancedSearch();
/**
 * @type {advancedSearch}
 */
N.prototype.advancedSearch = advancedSearch;