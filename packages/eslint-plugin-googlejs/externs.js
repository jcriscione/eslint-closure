/**
 * Configuration object for the `verify` API. A JS representation of the
 * eslintrc files.
 * @record
 */


/* eslint valid-jsdoc: ["error", {prefer: {return: "return"}}]*/


/**
 * Configuration object for the `verify` API. A JS representation of the
 * eslintrc files.
 * @record
 */
const ESLintConfig = function() {};

/** @type {!Object} */
ESLintConfig.prototype.rules;

/** @type {string} */
ESLintConfig.prototype.parser;

/** @type {Object} */
ESLintConfig.prototype.parserOptions;

/** @type {Object} */
ESLintConfig.prototype.settings;

/** @type {Object} */
ESLintConfig.prototype.env;

/** @type {Object} */
ESLintConfig.prototype.global;



/**
 * Acts as an abstraction layer between rules and the main eslint object.
 * @record
 */
const RuleContext = function() {};

/** @type {string} ruleId The ID of the rule using this object. */
RuleContext.prototype.ruleId;

/** @type {!ESLintConfig} eslint The eslint object. */
RuleContext.prototype.eslint;

/** @type {number} severity The configured severity level of the rule. */
RuleContext.prototype.severity;

/**
 * @type {!Array<!Object>} options The configuration information to be added to
 *     the rule.
 */
RuleContext.prototype.options;

/**
 * @type {!Object} settings The configuration settings passed from the config
 *      file.
 */
RuleContext.prototype.settings;

/**
 * @type {!Object} parserOptions The parserOptions settings passed from the
 *     config file.
 */
RuleContext.prototype.parserOptions;

/** @type {!Object} parserPath The parser setting passed from the config file. */
RuleContext.prototype.parserPath;

/** @type {!Object} */
RuleContext.prototype.meta;

/**
 * Passthrough to eslint.getSourceCode().
 * @return {SourceCode} The SourceCode object for the code.
 */
RuleContext.prototype.getSourceCode = function() {};

/**
 * Passthrough to eslint.report() that automatically assigns the rule ID and
 * severity.
 * @param {!ASTNode|!MessageDescriptor} nodeOrDescriptor The AST node related to
 *      the message or a message descriptor.
 * @param {!Object} location The location of the error.
 * @param {string} message The message to display to the user.
 * @param {Object=} opts Optional template data which produces a formatted
 *     message with symbols being replaced by this object's values.
 * @return {void}
 */
RuleContext.prototype.report = function(nodeOrDescriptor, location, message,
                                        opts) {};

// TODO: add theset to Rule context
// "getAncestors",
// "getDeclaredVariables",
// "getFilename",
// "getScope",
// "markVariableAsUsed",


/**
 * Represents parsed source code.
 * @record
 */
const SourceCode = function() {};

// TODO: add these functions
// getSource
// getSourceLines
// getNodeByRangeIndex


/**
 * Gets the source code for the given node.
 * @param {ASTNode=} node The AST node to get the text for.
 * @param {number=} beforeCount The number of characters before the node to retrieve.
 * @param {number=} afterCount The number of characters after the node to retrieve.
 * @return {string} The text representing the AST node.
 */
SourceCode.prototype.getText = function(node, beforeCount, afterCount) {};

/**
 * Gets the entire source text split into an array of lines.
 * @return {Array} The source text as an array of lines.
 */
SourceCode.prototype.getLines = function() {};

/**
 * Retrieves an array containing all comments in the source code.
 * @return {Array<ASTNode>} An array of comment nodes.
 */
SourceCode.prototype.getAllComments = function() {};

/**
 * Gets all comments for the given node.
 * @param {ASTNode} node The AST node to get the comments for.
 * @return {Object} The list of comments indexed by their position.
 * @public
 */
SourceCode.prototype.getComments = function(node) {};

/**
 * Retrieves the JSDoc comment for a given node.
 * @param {ASTNode} node The AST node to get the comment for.
 * @return {ASTNode} The BlockComment node containing the JSDoc for the
 *      given node or null if not found.
 * @public
 */
SourceCode.prototype.getJSDocComment = function(node) {};

/**
 * Gets the deepest node containing a range index.
 * @param {number} index Range index of the desired node.
 * @return {ASTNode} The node if found or null if not found.
 */
SourceCode.prototype.getNodeByRangeIndex = function(index) {};

/**
 * Determines if two tokens have at least one whitespace character
 * between them. This completely disregards comments in making the
 * determination, so comments count as zero-length substrings.
 * @param {Token} first The token to check after.
 * @param {Token} second The token to check before.
 * @return {boolean} True if there is only space between tokens, false
 *  if there is anything other than whitespace between tokens.
 */
SourceCode.prototype.isSpaceBetweenTokens = function(first, second){};

/**
 * Gets a number of tokens that precede a given node or token in the token
 * stream.
 * @param {(!ASTNode|!Token)} node The AST node or token.
 * @param {number=} beforeCount The number of tokens before the node or
 *     token to retrieve.
 * @return {!Array<!Token>} Array of objects representing tokens.
 */
SourceCode.prototype.getTokensBefore = function(node, beforeCount) {};

/**
 * Gets the token that precedes a given node or token in the token stream.
 * @param {(!ASTNode|!Token)} node The AST node or token.
 * @param {number=} skip A number of tokens to skip before the given node or
 *     token.
 * @return {!Token} An object representing the token.
 */
SourceCode.prototype.getTokenBefore = function(node, skip) {};

/**
 * Gets a number of tokens that follow a given node or token in the token
 * stream.
 * @param {(!ASTNode|!Token)} node The AST node or token.
 * @param {number=} afterCount The number of tokens after the node or token
 *     to retrieve.
 * @return {!Array<!Token>} Array of objects representing tokens.
 */
SourceCode.prototype.getTokensAfter = function(node, afterCount) {};

/**
 * Gets the token that follows a given node or token in the token stream.
 * @param {(!ASTNode|!Token)} node The AST node or token.
 * @param {number=} skip A number of tokens to skip after the given node or
 *     token.
 * @return {!Token} An object representing the token.
 */
SourceCode.prototype.getTokenAfter = function(node, skip) {};

/**
 * Gets all tokens that are related to the given node.
 * @param {!ASTNode} node The AST node.
 * @param {number=} beforeCount The number of tokens before the node to retrieve.
 * @param {number=} afterCount The number of tokens after the node to retrieve.
 * @return {!Array<!Token>} Array of objects representing tokens.
 */
SourceCode.prototype.getTokens = function(node, beforeCount, afterCount) {};

/**
 * Gets the first `count` tokens of the given node's token stream.
 * @param {!ASTNode} node The AST node.
 * @param {number=} count The number of tokens of the node to retrieve.
 * @return {!Array<!Token>} Array of objects representing tokens.
 */
SourceCode.prototype.getFirstTokens = function(node, count) {};

/**
 * Gets the first token of the given node's token stream.
 * @param {!ASTNode} node The AST node.
 * @param {number=} skip A number of tokens to skip.
 * @return {!Token} An object representing the token.
 */
SourceCode.prototype.getFirstToken = function(node, skip) {};

/**
 * Gets the last `count` tokens of the given node.
 * @param {!ASTNode} node The AST node.
 * @param {number=} count The number of tokens of the node to retrieve.
 * @return {!Array<!Token>} Array of objects representing tokens.
 */
SourceCode.prototype.getLastTokens = function(node, count) {};

/**
 * Gets the last token of the given node's token stream.
 * @param {!ASTNode} node The AST node.
 * @param {number=} skip A number of tokens to skip.
 * @return {!Token} An object representing the token.
 */
SourceCode.prototype.getLastToken = function(node, skip) {};

/**
 * Gets all of the tokens between two non-overlapping nodes.
 * @param {!ASTNode} left Node before the desired token range.
 * @param {!ASTNode} right Node after the desired token range.
 * @param {number=} padding Number of extra tokens on either side of center.
 * @return {!Array<!Token>} Tokens between left and right plus padding.
 */
SourceCode.prototype.getTokensBetween = function(left, right, padding) {};

/**
 * Gets the token starting at the specified index.
 * @param {number=} startIndex Index of the start of the token's range.
 * @return {!Token} The token starting at index, or null if no such token.
 */
SourceCode.prototype.getTokenByRangeStart = function(startIndex) {}



/**
 * @record
 */
const Token = function() {};

/**
 * An error message description.
 * @record
 */
const MessageDescriptor = function() {};

/**
 * The type of node.
 * @type {string}
 */
MessageDescriptor.prototype.nodeType;

/**
 * The location of the problem.
 * @type {!Location}
 */
MessageDescriptor.prototype.loc;

/**
 * The problem message.
 * @type {string}
 */
MessageDescriptor.prototype.message;

/**
 * Optional data to use to fill in placeholders in the message.
 * @type {Object}
 */
MessageDescriptor.prototype.data;

/**
 * The function to call that creates a fix command.
 * @return {void}
 */
MessageDescriptor.prototype.fix = function() {};

/**
 * Acts as an abstraction layer between rules and the main eslint object.
 * @record
 */
const ASTNode = function() {};


/**
 * Acts as an abstraction layer between rules and the main eslint object.
 * @record
 */
const ESLintRule = function() {};

