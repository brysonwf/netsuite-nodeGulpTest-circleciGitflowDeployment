/**
 * SuiteScript file module
 *
 * @module N/file
 * @NApiVersion 2.x
 *
 */
function file() {}
/**
 * Instantiate a file object (specifying the name, type, and contents which are base-64 encoded for binary types.)
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {string} options.name file name
 * @param {string} options.fileType file type i.e. PLAINTEXT, HTMLDOC, PDF, WORD, see file.Type enum
 * @param {string} options.contents string containing file contents (must be base-64 encoded for binary types)
 * @param {number} options.folder (optional) the internal ID of the folder to be used when the file is saved
 * @return {File}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options is missing or one of mandatory options
 *     properties not set
 * @throws {SuiteScriptError} SSS_INVALID_TYPE_ARG if options.fileType is an invalid type
 *
 * @since 2015.2
 */
file.prototype.create = function(options) {};

/**
 * Load a file from the file cabinet (via its internal ID or path).
 *
 * @governance 10 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {number|string} options.id internal ID or path to file in the file cabinet (i.e. /SuiteScript/foo.js)
 * @return {File}
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if idOrPath parameter is missing
 * @throws {SuiteScriptError} RCRD_DSNT_EXIST attempt to load a file from non-existing path
 * @throws {SuiteScriptError} INSUFFICIENT_PERMISSION attempt to load a file with non-existing ID
 *
 * @since 2015.2
 */
file.prototype.load = function(options) {};

/**
 * Delete a file from the file cabinet.
 *
 * @governance 20 units
 * @restriction Server SuiteScript only
 *
 * @param {Object} options
 * @param {number|string} options.id internal ID of file to be deleted
 *
 * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if id parameter is missing
 *
 * @since 2015.2
 */
file.prototype['delete'] = function(options) {};

/**
 * Enum for file types.
 * @enum {string}
 * @readonly
 */
function fileType() {
    this.APPCACHE = 'APPCACHE';
    this.AUTOCAD = 'AUTOCAD';
    this.BMPIMAGE = 'BMPIMAGE';
    this.CERTIFICATE = 'CERTIFICATE';
    this.CONFIG = 'CONFIG';
    this.CSV = 'CSV';
    this.EXCEL = 'EXCEL';
    this.FLASH = 'FLASH';
    this.FREEMARKER = 'FREEMARKER';
    this.GIFIMAGE = 'GIFIMAGE';
    this.GZIP = 'GZIP';
    this.HTMLDOC = 'HTMLDOC';
    this.ICON = 'ICON';
    this.JAVASCRIPT = 'JAVASCRIPT';
    this.JPGIMAGE = 'JPGIMAGE';
    this.JSON = 'JSON';
    this.MESSAGERFC = 'MESSAGERFC';
    this.MP3 = 'MP3';
    this.MPEGMOVIE = 'MPEGMOVIE';
    this.MSPROJECT = 'MSPROJECT';
    this.PDF = 'PDF';
    this.PJPGIMAGE = 'PJPGIMAGE';
    this.PLAINTEXT = 'PLAINTEXT';
    this.PNGIMAGE = 'PNGIMAGE';
    this.POSTSCRIPT = 'POSTSCRIPT';
    this.POWERPOINT = 'POWERPOINT';
    this.QUICKTIME = 'QUICKTIME';
    this.RTF = 'RTF';
    this.SMS = 'SMS';
    this.STYLESHEET = 'STYLESHEET';
    this.SVG = 'SVG';
    this.TAR = 'TAR';
    this.TIFFIMAGE = 'TIFFIMAGE';
    this.VISIO = 'VISIO';
    this.WEBAPPPAGE = 'WEBAPPPAGE';
    this.WEBAPPSCRIPT = 'WEBAPPSCRIPT';
    this.WORD = 'WORD';
    this.XMLDOC = 'XMLDOC';
    this.XSD = 'XSD';
    this.ZIP = 'ZIP';
}
file.prototype.Type = fileType;

/**
 * Enum for file encodings.
 * @enum {string}
 * @readonly
 */
function fileEncoding() {
    this.UTF_8 = 'UTF-8';
    this.WINDOWS_1252 = 'windows-1252';
    this.ISO_8859_1 = 'ISO-8859-1';
    this.GB18030 = 'GB18030';
    this.SHIFT_JIS = 'SHIFT_JIS';
    this.MAC_ROMAN = 'MacRoman';
    this.GB2312 = 'GB2312';
    this.BIG5 = 'Big5';
}
file.prototype.Encoding = fileEncoding;

/**
 * Return a new instance of file.File used for accessing and manipulating files in the file cabinet.
 *
 * @protected
 * @class File
 * @classdesc Encapsulation of files (media items) in the file cabinet.
 * @alias file.File
 *
 * @since 2015.2
 */
function File() {
    
    /**
    The id of the file (if stored in the FC).
     * @name File#id
     * @type number
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.id = undefined;    
    /**
    The size of the file in bytes.
     * @name File#size
     * @type number
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.size = undefined;    
    /**
    Return the URL of the file (if stored in the FC).
     * @name File#url
     * @type string
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.url = undefined;    
    /**
    The path to the file in the file cabinet.
     * @name File#path
     * @type string
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.path = undefined;    
    /**
    The type of the file.
     * @name File#fileType
     * @type string
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.fileType = undefined;    
    /**
     * Indicates whether or not the file is text-based or binary.
     * @name File#isText
     * @type boolean
     * @readonly
     * @throws READ_ONLY_PROPERTY when setting the property is attempted
     */    
    this.prototype.isText = undefined;    
    /**
     * The character encoding for the file.
     * @name File#encoding
     * @type string
     */    
    this.prototype.encoding = undefined;    
    /**
     * The name of the file.
     * @name File#name
     * @type string
     */    
    this.prototype.name = undefined;    
    /**
     * The internal ID of the folder that this file is in.
     * @name File#folder
     * @type number
     */    
    this.prototype.folder = undefined;    
    /**
     * The file description.
     * @name File#description
     * @type string
     */    
    this.prototype.description = undefined;    
    /**
     * The file's inactive status.
     * @name File#isInactive
     * @type boolean
     */    
    this.prototype.isInactive = undefined;    
    /**
     * The file's "Available without Login" status.
     * @name File#isOnline
     * @type boolean
     */    
    this.prototype.isOnline = undefined;    
    /**
     * @name File#lines
     * @type {Iterator} iterator - Iterator which provides the next line of text from the text file to the iterator function.
     *      <pre> file.lines.iterator().each(function(lineContext){...}); </pre>
     *
     * @throws {SuiteScriptError} YOU_CANNOT_READ_FROM_A_FILE_AFTER_YOU_BEGAN_WRITING_TO_IT if you call after having called appendLine
     * @readonly
     */    
    this.prototype.lines = undefined;    
    /**
     * Return the value (Base64 encoded for binary types) of the file.
     * Note: Contents are lazy loaded and must be less than 10MB in size in order to access.
     *
     * @throws {SuiteScriptError} SSS_FILE_CONTENT_SIZE_EXCEEDED when trying to get contents of a file larger than 10MB
     *
     * @return {string}
     */    
    this.prototype.getContents = function(options) {};    
    
    /**
     * Add/update a file in the file cabinet based on the properties of this object.
     *
     * @governance 20 units
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when the folder property is not set
     * @throws {SuiteScriptError} INVALID_KEY_OR_REF if trying to save to a non-existing folder
     *
     * @return {number} return internal ID of file in the file cabinet
     *
     * @since 2015.2
     */    
    this.prototype.save = function(options) {};    
    
    /**
     * Append a chunk of text to the file.
     *
     * @param {Object} options
     * @param {string} options.value text to append
     * @return {file} Returns this file
     * @throws {SuiteScriptError} YOU_CANNOT_WRITE_TO_A_FILE_AFTER_YOU_BEGAN_READING_FROM_IT If you call it after having called FileLines#each
     * @since 2017.1
     */    
    this.prototype.append = function(options) {};    
    
    /**
     * Append a line of text to the file.
     *
     * @param {Object} options
     * @param {string} options.value text to append
     * @return {file} Returns this file
     * @throws {SuiteScriptError} YOU_CANNOT_WRITE_TO_A_FILE_AFTER_YOU_BEGAN_READING_FROM_IT If you call it after having called FileLines#each
     * @since 2017.1
     */    
    this.prototype.appendLine = function(options) {};    
    
    /**
     * Reset the reading and writing streams that may have been opened by appendLine or FileLines#each
     *
     * @since 2017.1
     */    
    this.prototype.resetStream = function(options) {};    
    
    /**
     * Returns the object type name (file.File)
     *
     * @returns {string}
     */    
    this.prototype.toString = function(options) {};    
    
    /**
     * JSON.stringify() implementation.
     *
     * @returns {{type: string, id: *, name: *, description: *, path: *, url: *, folder: *, fileType: *, isText: *,
     *     size: *, encoding: *, isInactive: *, isOnline: *, contents: *}}
     */    
    this.prototype.toJSON = function(options) {};    
}

/**
 * @protected
 *
 * @param delegate
 * @constructor
 */
function FileLines() {
}

file = new file();
/**
 * @type {file}
 */
N.prototype.file = file;